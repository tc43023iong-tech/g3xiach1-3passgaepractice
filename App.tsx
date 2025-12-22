
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
    setAppState(AppState.START);
  };

  const handleStart = () => {
    setAppState(AppState.QUIZ);
    setCurrentIndex(0);
    setScore(0);
    resetQuestionState();
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
    const base = "w-full p-5 mb-4 rounded-3xl border-4 transition-all duration-300 text-xl font-bold flex items-center justify-between shadow-md ";
    const q = currentLesson?.questions[currentIndex];
    
    if (!isAnswered || !q) {
      return base + (selectedAnswer === index 
        ? "border-yellow-400 bg-yellow-50 text-yellow-700 transform scale-[1.02]" 
        : "border-white bg-white hover:border-blue-200 text-slate-600 hover:shadow-lg hover:scale-[1.01]");
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
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-br from-blue-100 via-white to-pink-100 relative overflow-hidden">
      {/* Background Decor */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-[5%] left-[10%] text-7xl animate-float">☁️</div>
        <div className="absolute top-[15%] right-[15%] text-7xl animate-float-delayed">🌈</div>
        <div className="absolute bottom-[10%] left-[5%] text-7xl animate-float-delayed">🌻</div>
        <div className="absolute bottom-[20%] right-[10%] text-7xl animate-float">🦋</div>
        <div className="absolute top-[40%] left-[2%] text-5xl animate-float">🍬</div>
        <div className="absolute bottom-[40%] right-[2%] text-5xl animate-float-delayed">🍭</div>
      </div>

      <div className="max-w-md w-full relative z-10">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-5xl font-game text-blue-500 drop-shadow-md mb-2 tracking-wide">拼音趣學園</h1>
          <div className="inline-block bg-white/80 backdrop-blur-sm px-4 py-1 rounded-full shadow-sm">
             <p className="text-pink-400 text-sm font-black uppercase tracking-widest">一起快樂學拼音！</p>
          </div>
        </div>

        {/* State: LESSON_SELECT */}
        {appState === AppState.LESSON_SELECT && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-2xl font-game text-slate-600 text-center mb-8">選擇一個星球開始冒險吧！</h2>
            {LESSONS.map((lesson, idx) => (
              <button
                key={lesson.id}
                onClick={() => selectLesson(lesson)}
                className={`w-full rounded-[2.5rem] p-6 shadow-xl border-b-[12px] transition-all transform hover:-translate-y-2 flex items-center gap-6 text-left group bg-white
                  ${idx % 3 === 0 ? 'border-blue-300' : idx % 3 === 1 ? 'border-green-300' : 'border-purple-300'}`}
              >
                <span className={`text-5xl p-4 rounded-3xl transition-transform group-hover:scale-110 
                  ${idx % 3 === 0 ? 'bg-blue-50' : idx % 3 === 1 ? 'bg-green-50' : 'bg-purple-50'}`}>
                  {lesson.icon}
                </span>
                <div className="flex-1">
                  <h3 className="text-xl font-black text-slate-700 group-hover:text-blue-500 transition-colors">{lesson.title}</h3>
                  <p className="text-slate-400 font-medium text-sm mt-1">{lesson.subtitle}</p>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-3xl mb-1">{lesson.animal}</span>
                  <span className="text-slate-200 text-xl group-hover:text-pink-300 transition-colors">➜</span>
                </div>
              </button>
            ))}
          </div>
        )}

        {/* State: START */}
        {appState === AppState.START && currentLesson && (
          <div className="bg-white rounded-[3rem] p-10 shadow-2xl text-center border-b-[12px] border-pink-200 animate-bounce-in relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-pink-100/50"></div>
            <div className="text-8xl mb-8 animate-float">{currentLesson.icon}</div>
            <h2 className="text-3xl font-black text-slate-700 mb-4">{currentLesson.title}</h2>
            <p className="text-slate-500 mb-10 text-lg leading-relaxed px-4">
              準備好大顯身手了嗎？<br/>
              <span className="text-blue-400 font-bold">幫助小{currentLesson.animal}跑到終點！</span>
            </p>
            <div className="space-y-4">
              <button 
                onClick={handleStart}
                className="w-full bg-gradient-to-r from-pink-400 to-orange-400 hover:from-pink-500 hover:to-orange-500 text-white font-black py-5 rounded-3xl shadow-xl transform active:scale-95 transition-all text-2xl border-b-4 border-pink-700/30"
              >
                立即出發！
              </button>
              <button 
                onClick={goToLessonSelect}
                className="w-full text-slate-400 font-bold py-3 hover:text-slate-600 transition-all text-sm"
              >
                返回主選單
              </button>
            </div>
          </div>
        )}

        {/* State: QUIZ */}
        {appState === AppState.QUIZ && currentLesson && currentQuestion && (
          <div className="space-y-6 animate-fade-in relative">
            {/* Back to Home Button */}
            <button 
              onClick={goToLessonSelect}
              className="absolute -top-12 -left-2 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border-2 border-white hover:bg-white transition-all text-lg font-black text-slate-500 active:scale-90 group z-20 flex items-center gap-2"
            >
              🏠 <span>回到首頁</span>
            </button>

            <div className="flex justify-between items-end px-4 pt-4">
              <div>
                <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest block mb-1">CATEGORY</span>
                <span className="text-sm font-bold text-slate-600 bg-blue-50 px-3 py-1 rounded-full">{currentQuestion.category}</span>
              </div>
              <div className="text-right">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">PROGRESS</span>
                <span className="text-sm font-black text-slate-700 bg-white px-3 py-1 rounded-full shadow-sm">{currentIndex + 1} / {currentLesson.questions.length}</span>
              </div>
            </div>
            
            {/* Animal Running Progress Bar */}
            <div className="relative pt-12 px-2">
              <div 
                className="absolute top-2 transition-all duration-700 ease-out z-10 text-5xl"
                style={{ 
                  left: `${progressPercent}%`, 
                  transform: 'translateX(-50%)',
                  animation: 'running 0.5s infinite alternate' 
                }}
              >
                {currentLesson.animal}
              </div>
              <div className="h-8 w-full bg-white/70 rounded-full overflow-hidden shadow-inner border-2 border-white relative p-1">
                <div 
                  className="h-full bg-gradient-to-r from-blue-300 via-emerald-300 to-yellow-300 transition-all duration-700 rounded-full shadow-sm" 
                  style={{ width: `${progressPercent}%` }}
                ></div>
                <div className="absolute top-0 right-3 text-lg font-black h-full flex items-center">🚩</div>
              </div>
            </div>

            <div className="bg-white rounded-[2.5rem] p-8 shadow-2xl border-b-[12px] border-blue-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-[4rem] -mr-8 -mt-8 opacity-50"></div>
              
              <p className="text-2xl font-black text-slate-700 mb-10 leading-tight relative z-10 px-2">
                {currentQuestion.question}
              </p>

              <div className="space-y-1 relative z-10">
                {currentQuestion.options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(idx)}
                    className={getButtonClass(idx)}
                  >
                    <span className="flex-1 text-left">{String.fromCharCode(65 + idx)}. {option}</span>
                    {isAnswered && idx === currentQuestion.correctIndex && <span className="text-3xl animate-bounce">🌟</span>}
                    {isAnswered && idx === selectedAnswer && idx !== currentQuestion.correctIndex && <span className="text-3xl">💡</span>}
                  </button>
                ))}
              </div>

              {isAnswered && (
                <div className="mt-8 space-y-4 animate-slide-up">
                  <div className="p-5 bg-yellow-50/50 backdrop-blur-sm rounded-3xl border-2 border-yellow-100/50">
                    <p className="text-yellow-800 text-sm font-bold flex gap-2">
                      <span className="text-lg">📢</span> 提示：{currentQuestion.explanation}
                    </p>
                  </div>
                  
                  {showExplanation ? (
                    <div className="p-5 bg-pink-50 rounded-3xl border-2 border-pink-100 animate-fade-in shadow-inner">
                      <p className="text-pink-700 text-sm leading-relaxed">
                        <span className="font-black text-base block mb-1">🌸 Gemini 老師說：</span>
                        {geminiAdvice}
                      </p>
                    </div>
                  ) : (
                    <button 
                      onClick={fetchGeminiAdvice}
                      disabled={isLoadingAdvice}
                      className="w-full py-3 bg-pink-50/50 border-2 border-dashed border-pink-200 rounded-2xl text-pink-400 font-black hover:bg-pink-50 transition-all text-sm flex items-center justify-center gap-2 group"
                    >
                      {isLoadingAdvice ? "⏳ 老師正在思考中..." : "✨ 想聽聽老師的小秘訣嗎？"}
                      {!isLoadingAdvice && <span className="group-hover:translate-x-1 transition-transform">➜</span>}
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        {/* State: RESULT */}
        {appState === AppState.RESULT && currentLesson && (
          <div className="bg-white rounded-[3.5rem] p-10 shadow-2xl text-center border-b-[12px] border-green-200 animate-bounce-in relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-green-50 rounded-bl-[4rem] -mr-8 -mt-8 opacity-40"></div>
            <div className="relative inline-block mb-10">
               <div className="text-9xl animate-float">{score === currentLesson.questions.length ? '👑' : '🎖️'}</div>
               <div className="absolute -top-4 -right-4 text-4xl animate-float-delayed">✨</div>
               <div className="absolute -bottom-2 -left-4 text-4xl animate-float">🎈</div>
            </div>
            
            <h2 className="text-3xl font-game text-slate-700 mb-2">冒險達成！好厲害！</h2>
            <p className="text-base font-bold text-slate-400 mb-10 uppercase tracking-widest px-4">{currentLesson.title}</p>
            
            <div className="mb-12 bg-slate-50 py-8 rounded-[2rem] border-2 border-dashed border-slate-200">
              <span className="text-8xl font-black bg-gradient-to-br from-pink-500 to-orange-400 bg-clip-text text-transparent">{score}</span>
              <span className="text-3xl text-slate-300 font-black mx-2">/</span>
              <span className="text-3xl text-slate-400 font-black">{currentLesson.questions.length}</span>
              <p className="mt-4 text-slate-500 font-bold">小{currentLesson.animal}非常崇拜你喔！</p>
            </div>

            <div className="space-y-4">
              <button 
                onClick={handleStart}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-black py-5 rounded-[2rem] shadow-xl transform active:scale-95 transition-all text-2xl border-b-4 border-blue-800/30"
              >
                再次挑戰
              </button>
              <button 
                onClick={goToLessonSelect}
                className="w-full bg-white text-slate-400 border-4 border-slate-100 font-black py-4 rounded-[2rem] hover:bg-slate-50 transition-all text-lg shadow-sm"
              >
                換個單元冒險
              </button>
            </div>
          </div>
        )}

      </div>
      
      <div className="mt-16 text-center text-slate-300 text-[10px] font-black uppercase tracking-[0.3em] opacity-60">
        <p>Pinyin Fun Garden · Wonderful Journey</p>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(15px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes bounceIn { 
          0% { transform: scale(0.6); opacity: 0; }
          60% { transform: scale(1.1); }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        @keyframes running {
          from { transform: translateX(-50%) translateY(0); }
          to { transform: translateX(-50%) translateY(-10px); }
        }
        .animate-fade-in { animation: fadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-slide-up { animation: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-bounce-in { animation: bounceIn 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }
        .animate-float { animation: float 4s ease-in-out infinite; }
        .animate-float-delayed { animation: float 4s ease-in-out 2s infinite; }
        .animate-shake { animation: shake 0.2s ease-in-out 3; }
        .animate-pulse-gentle { animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }
      `}</style>
    </div>
  );
};

export default App;
