
export interface Question {
  id: number;
  category: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface Lesson {
  id: number;
  title: string;
  subtitle: string;
  icon: string;
  animal: string; // The running animal emoji
  questions: Question[];
}

export enum AppState {
  LESSON_SELECT = 'LESSON_SELECT',
  START = 'START',
  QUIZ = 'QUIZ',
  RESULT = 'RESULT'
}
