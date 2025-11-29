import { GoogleGenAI } from "@google/genai";

// Safely retrieve API key to prevent "process is not defined" crashes in browser
const getApiKey = () => {
  try {
    if (typeof process !== 'undefined' && process.env) {
      return process.env.API_KEY || '';
    }
  } catch (e) {
    // Ignore error if process is not defined
  }
  return '';
};

const ai = new GoogleGenAI({ apiKey: getApiKey() });

export const generateHRAdvice = async (userQuery: string): Promise<string> => {
  const apiKey = getApiKey();
  if (!apiKey) {
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