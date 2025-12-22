
import { GoogleGenAI } from "@google/genai";

export class GeminiService {
  async getExplanation(question: string, correctAnswer: string): Promise<string> {
    try {
      // Create a new GoogleGenAI instance right before making an API call to ensure it always uses the most up-to-date API key
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `你是一位親切活潑的拼音老師。剛才學生回答了一個問題：「${question}」，正確答案是「${correctAnswer}」。
請用適合小學生的、可愛且鼓勵的口吻，簡短解釋一下這個拼音規則（例如為什麼 ü 的兩點要去掉，或者為什麼自成音節要加 y/w）。
字數請控制在 50 字以內，語氣要超級親切喔！`,
        config: {
          temperature: 0.8,
        },
      });
      // The GenerateContentResponse object features a text property that directly returns the string output.
      return response.text || "小寶貝，老師正在思考怎麼說得更清楚，等我一下喔！";
    } catch (error) {
      console.error("Gemini API Error:", error);
      return "哎呀，老師的魔法棒斷了，我們先看下一題吧！";
    }
  }
}

export const geminiService = new GeminiService();
