
import React, { useState, useEffect, useRef } from 'react';
import { AppState, Lesson, Question } from './types';
import { LESSONS } from './constants';
import { geminiService } from './services/geminiService';

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>(AppState.LESSON_SELECT);
  const [currentLesson, setCurrentLesson] = useState<Lesson | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [geminiAdvice, setGeminiAdvice] = useState<string>('');
  const [isLoadingAdvice, setIsLoadingAdvice] = useState(false);
  const autoNextTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const selectLesson = (lesson: Lesson) => {
    setCurrentLesson(lesson);
    setScore(0);
    setCurrentIndex(0);
    resetQuestionState();
    setAppState(AppState.QUIZ);
  };

  const resetQuestionState = () => {
    setSelectedAnswer(null);
    setIsAnswered(false);
    setShowExplanation(false);
    setGeminiAdvice('');
    if (autoNextTimerRef.current) clearTimeout(autoNextTimerRef.current);
  };

  const handleSelectOption = (index: number) => {
    if (isAnswered || !currentLesson) return;
    
    setSelectedAnswer(index);
    setIsAnswered(true);
    
    const isCorrect = index === currentLesson.questions[currentIndex].correctIndex;
    if (isCorrect) {
      setScore(prev => prev + 1);
    }

    autoNextTimerRef.current = setTimeout(() => {
      handleNext();
    }, isCorrect ? 1200 : 2500);
  };

  const handleNext = () => {
    if (!currentLesson) return;
    if (currentIndex < currentLesson.questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      resetQuestionState();
    } else {
      setAppState(AppState.RESULT);
    }
  };

  const fetchGeminiAdvice = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!currentLesson) return;
    if (autoNextTimerRef.current) clearTimeout(autoNextTimerRef.current);
    
    const q = currentLesson.questions[currentIndex];
    setIsLoadingAdvice(true);
    geminiService.getExplanation(q.question, q.options[q.correctIndex]).then(advice => {
      setGeminiAdvice(advice);
      setIsLoadingAdvice(false);
      setShowExplanation(true);
    });
  };

  const goToLessonSelect = () => {
    setAppState(AppState.LESSON_SELECT);
    setCurrentLesson(null);
    setCurrentIndex(0);
    setScore(0);
    resetQuestionState();
  };

  const getButtonClass = (index: number) => {
    const base = "w-full p-4 mb-3 rounded-2xl border-4 transition-all duration-300 text-lg font-bold flex items-center justify-between shadow-sm ";
    const q = currentLesson?.questions[currentIndex];
    
    if (!isAnswered || !q) {
      return base + (selectedAnswer === index 
        ? "border-yellow-400 bg-yellow-50 text-yellow-700 transform scale-[1.02]" 
        : "border-white bg-white hover:border-blue-200 text-slate-600 hover:shadow-md hover:scale-[1.01]");
    }
    
    if (index === q.correctIndex) {
      return base + "border-green-400 bg-green-100 text-green-700 animate-pulse-gentle";
    }
    
    if (index === selectedAnswer) {
      return base + "border-pink-400 bg-pink-100 text-pink-700 animate-shake";
    }
    
    return base + "border-slate-50 bg-slate-50 text-slate-300 opacity-40 shadow-none";
  };

  const currentQuestion = currentLesson?.questions[currentIndex];
  const progressPercent = currentLesson ? (currentIndex / (currentLesson.questions.length - 1)) * 100 : 0;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-br from-blue-100 via-white to-pink-100 relative overflow-hidden">
      {/* Background Decor */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-[5%] left-[10%] text-7xl animate-float">☁️</div>
        <div className="absolute top-[15%] right-[15%] text-7xl animate-float-delayed">🌈</div>
        <div className="absolute bottom-[10%] left-[5%] text-7xl animate-float-delayed">🌻</div>
        <div className="absolute bottom-[20%] right-[10%] text-7xl animate-float">🦋</div>
      </div>

      <div className="max-w-2xl w-full relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-game text-blue-500 drop-shadow-md mb-2 tracking-wide">拼音趣學園</h1>
          <div className="inline-block bg-white/80 backdrop-blur-sm px-4 py-1 rounded-full shadow-sm">
             <p className="text-pink-400 text-sm font-black uppercase tracking-widest">一起快樂學拼音！</p>
          </div>
        </div>

        {/* State: LESSON_SELECT */}
        {appState === AppState.LESSON_SELECT && (
          <div className="animate-fade-in">
            <h2 className="text-2xl font-game text-slate-600 text-center mb-8">選擇一個單元開始練習吧！</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {LESSONS.map((lesson, idx) => (
                <button
                  key={lesson.id}
                  onClick={() => selectLesson(lesson)}
                  className={`rounded-[2rem] p-5 shadow-lg border-b-[8px] transition-all transform hover:-translate-y-1 flex items-center gap-4 text-left group bg-white
                    ${idx % 4 === 0 ? 'border-blue-300' : idx % 4 === 1 ? 'border-green-300' : idx % 4 === 2 ? 'border-purple-300' : 'border-pink-300'}`}
                >
                  <span className="text-4xl group-hover:scale-110 transition-transform">{lesson.icon}</span>
                  <div className="flex-1 overflow-hidden">
                    <h3 className="text-lg font-black text-slate-700 truncate">{lesson.title}</h3>
                    <p className="text-slate-400 font-medium text-xs mt-0.5 truncate">{lesson.subtitle}</p>
                  </div>
                  <span className="text-2xl">{lesson.animal}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* State: QUIZ */}
        {appState === AppState.QUIZ && currentLesson && currentQuestion && (
          <div className="max-w-md mx-auto space-y-6 animate-fade-in relative">
            <button 
              onClick={goToLessonSelect}
              className="absolute -top-12 -left-2 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border-2 border-white hover:bg-white transition-all text-lg font-black text-slate-500 active:scale-90 z-20"
            >
              🏠 <span>返回</span>
            </button>

            {/* Animal Progress */}
            <div className="relative pt-10 px-2">
              <div 
                className="absolute top-0 transition-all duration-700 ease-out z-10 text-5xl"
                style={{ left: `${progressPercent}%`, transform: 'translateX(-50%)', animation: 'running 0.5s infinite alternate' }}
              >
                {currentLesson.animal}
              </div>
              <div className="h-6 w-full bg-white/70 rounded-full overflow-hidden shadow-inner border-2 border-white relative p-1">
                <div 
                  className="h-full bg-gradient-to-r from-blue-300 to-yellow-300 transition-all duration-700 rounded-full" 
                  style={{ width: `${progressPercent}%` }}
                ></div>
              </div>
            </div>

            <div className="bg-white rounded-[2.5rem] p-8 shadow-2xl border-b-[12px] border-blue-100 relative overflow-hidden">
              <div className="flex justify-between items-center mb-4">
                <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest bg-blue-50 px-2 py-0.5 rounded-full">{currentQuestion.category}</span>
                <span className="text-sm font-black text-slate-300">{currentIndex + 1} / {currentLesson.questions.length}</span>
              </div>
              
              <p className="text-2xl font-black text-slate-700 mb-8 leading-tight">
                {currentQuestion.question}
              </p>

              <div className="space-y-1">
                {currentQuestion.options.map((option, idx) => (
                  <button key={idx} onClick={() => handleSelectOption(idx)} className={getButtonClass(idx)}>
                    <span className="flex-1 text-left">{String.fromCharCode(65 + idx)}. {option}</span>
                  </button>
                ))}
              </div>

              {isAnswered && (
                <div className="mt-6 space-y-3 animate-slide-up">
                  <div className="p-4 bg-yellow-50/50 rounded-2xl border-2 border-yellow-100/50">
                    <p className="text-yellow-800 text-xs font-bold leading-relaxed">
                      💡 提示：{currentQuestion.explanation}
                    </p>
                  </div>
                  {showExplanation ? (
                    <div className="p-4 bg-pink-50 rounded-2xl border-2 border-pink-100 shadow-inner">
                      <p className="text-pink-700 text-xs leading-relaxed">
                        🌸 <span className="font-black">Gemini 老師說：</span>{geminiAdvice}
                      </p>
                    </div>
                  ) : (
                    <button 
                      onClick={fetchGeminiAdvice}
                      disabled={isLoadingAdvice}
                      className="w-full py-2.5 bg-pink-50/50 border-2 border-dashed border-pink-200 rounded-xl text-pink-400 font-black hover:bg-pink-50 transition-all text-xs flex items-center justify-center gap-2"
                    >
                      {isLoadingAdvice ? "⏳ 思考中..." : "✨ 聽聽老師的小秘訣？"}
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        {/* State: RESULT */}
        {appState === AppState.RESULT && currentLesson && (
          <div className="max-w-md mx-auto bg-white rounded-[3rem] p-10 shadow-2xl text-center border-b-[12px] border-green-200 animate-bounce-in">
            <div className="text-8xl mb-6 animate-float">{score === currentLesson.questions.length ? '👑' : '🎖️'}</div>
            <h2 className="text-2xl font-game text-slate-700 mb-1">大冒險完成！</h2>
            <p className="text-xs font-bold text-slate-400 mb-8 tracking-widest">{currentLesson.title}</p>
            
            <div className="mb-10 bg-slate-50 py-6 rounded-3xl border-2 border-dashed border-slate-200">
              <span className="text-7xl font-black text-blue-500">{score}</span>
              <span className="text-2xl text-slate-300 font-black mx-2">/</span>
              <span className="text-2xl text-slate-400 font-black">{currentLesson.questions.length}</span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button onClick={() => selectLesson(currentLesson)} className="bg-blue-500 text-white font-black py-4 rounded-2xl shadow-lg transform active:scale-95 transition-all text-lg">重來</button>
              <button onClick={goToLessonSelect} className="bg-white text-slate-400 border-4 border-slate-100 font-black py-4 rounded-2xl hover:bg-slate-50 transition-all">換單元</button>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes bounceIn { 0% { transform: scale(0.8); opacity: 0; } 100% { transform: scale(1); opacity: 1; } }
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        @keyframes running { from { transform: translateX(-50%) translateY(0); } to { transform: translateX(-50%) translateY(-8px); } }
        @keyframes shake { 0%, 100% { transform: translateX(0); } 25% { transform: translateX(-4px); } 75% { transform: translateX(4px); } }
        .animate-fade-in { animation: fadeIn 0.4s ease-out forwards; }
        .animate-slide-up { animation: slideUp 0.3s ease-out forwards; }
        .animate-bounce-in { animation: bounceIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-float-delayed { animation: float 3s ease-in-out 1.5s infinite; }
        .animate-shake { animation: shake 0.2s ease-in-out 3; }
        .animate-pulse-gentle { animation: pulse 1.5s infinite; }
        @keyframes pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.02); } }
      `}</style>
    </div>
  );
};

export default App;
