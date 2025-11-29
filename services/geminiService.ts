import { GoogleGenAI } from "@google/genai";

// Initialize the client securely
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generateHRAdvice = async (userQuery: string): Promise<string> => {
  if (!process.env.API_KEY) {
    return "I'm sorry, my AI brain is currently offline (Missing API Key). Please try again later.";
  }

  try {
    const model = "gemini-2.5-flash";
    const systemInstruction = `
      You are an expert HR Consultant named "Simple AI". 
      Your tone is professional, empathetic, and legally cautious.
      You provide general guidance on Human Resources topics (hiring, firing, culture, policy).
      Important: Always include a disclaimer that you are an AI and this is not legal advice.
      Keep answers concise (under 150 words) and actionable.
      If the user asks about a specific product we sell (Handbook, Onboarding, Recruitment), recommend checking the Shop page.
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: userQuery,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      }
    });

    return response.text || "I couldn't generate a response at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I encountered an error while processing your request. Please try again.";
  }
};