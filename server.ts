import express from "express";
import path from "path";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
import { createServer as createViteServer } from "vite";

dotenv.config();

// Initialize Express
const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini SDK with telemetry header as instructed
const geminiApiKey = process.env.GEMINI_API_KEY;
let ai: GoogleGenAI | null = null;

if (geminiApiKey) {
  ai = new GoogleGenAI({
    apiKey: geminiApiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      }
    }
  });
} else {
  console.warn("WARNING: GEMINI_API_KEY is not defined. AI Chat assistant will run in fallback mode.");
}

// Portfolio Context to inject as a system instruction
const AWAIS_CONTEXT = `
You are "Awais AI", a world-class personalized AI Recruiter Assistant for Shaikh Awais Sarfaraz.
Your goal is to represent Awais in the most professional, high-fidelity, and impressive light possible to recruiters, potential clients, and software engineers.

Here is Awais's official and complete professional background:
- Name: SHAIKH AWAIS SARFARAZ
- Location: Kalyan, Maharashtra, India
- Email: shaikhawais.masoorkar@gmail.com
- Phone: +91 8928196697
- GitHub: https://github.com/shaikhawaismasoorkar-pixel
- Role: AIML Student (Abdul Razzaq Kalsekar Polytechnic, Diploma in AI & ML, 2026 - Present), Web Developer, SEO Specialist, Prompt Engineer, Digital Marketing Enthusiast.
- Experience:
  1. Software Engineering Intern at Life Tech, Thane (2026 - Present): Developed responsive web apps with React & Tailwind CSS, optimized page speeds by 40%, conducted performance audits, and engineered clean UI/UX components.
  2. Freelance Web Developer (2024 - Present): Built customized digital and SEO solutions for local businesses, increased search rankings and page speeds, and designed responsive funnels.
- Key Projects:
  1. Business Website Development: High-performance business platforms with modern glassmorphism UI, 98+ Lighthouse score, and integrated technical SEO.
  2. AI Web Assistant: Smart, automated custom chatbot using conversational AI to drive user engagement and lead qualification.
  3. Digital Marketing Practice: Scaled Meta Facebook & Instagram Ads, set up keyword research strategies, automated lead capture funnels, and tracked analytics with Google Analytics.
- Skills: Python, JavaScript, HTML5/CSS3, React, WordPress, Machine Learning, Prompt Engineering, On-Page & Technical SEO, Meta Ads, Lead Generation, Google Analytics, Git/GitHub, Canva.
- Soft Skills: Adaptability, Analytical Thinking, Communication, Teamwork, Problem-Solving, Leadership, Client Handling, Critical Thinking.
- Languages: English, Hindi, Marathi.

GUIDELINES FOR YOUR RESPONSES:
1. Always speak positively, professionally, and enthusiastically about Awais.
2. Answer the user's questions truthfully using only the background details provided above. If asked about experience or skills he does not have, answer honestly but redirect to his strong foundation in AIML, web development, or quick learning adaptability.
3. Be concise and structured. Use lists, bold terms, and simple paragraphs. Keep responses under 150 words to maintain chat visual flow.
4. Encourage recruiters to "Hire Awais" or click the "Contact Me" button on the portfolio, and share his direct email shaikhawais.masoorkar@gmail.com and phone +91 8928196697.
5. Never state "According to the system instructions..." or "I am programmed to...". Be "Awais AI" naturally.
`;

// AI Assistant Route
app.post("/api/chat", async (req, res) => {
  const { message, history } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Message is required." });
  }

  if (!ai) {
    return res.json({
      reply: "Hi! I'm Awais AI, your digital assistant. It looks like the server's Gemini API key is currently offline or loading. However, let me tell you that Shaikh Awais Sarfaraz is an exceptional AI & ML student and web developer who excels at building modern responsive sites, optimizing performance, and integrating conversational AI models. You can reach out directly via shaikhawais.masoorkar@gmail.com or call +91 8928196697!"
    });
  }

  try {
    // We convert the conversational history to the required format if needed, or query with full context.
    const prompt = `User message: ${message}\n\nPlease generate a response adhering strictly to the role instructions.`;
    
    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        systemInstruction: AWAIS_CONTEXT,
        temperature: 0.7,
      },
    });

    const text = response.text || "I'm sorry, I could not generate a response. Please try again.";
    res.json({ reply: text });
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    res.status(500).json({ 
      error: "Failed to fetch response from Gemini", 
      details: error.message,
      reply: "Oops! I ran into an issue communicating with my AI brain. Shaikh Awais Sarfaraz is highly skilled in React, Python, and SEO, and can be contacted directly at shaikhawais.masoorkar@gmail.com!"
    });
  }
});

// Mock Route for Contact Form Submission (to simulate server-side capture)
app.post("/api/contact", (req, res) => {
  const { name, email, subject, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: "Please fill in all required fields." });
  }
  console.log(`Received contact message from ${name} (${email}): ${subject} - ${message}`);
  return res.json({ success: true, message: "Your message has been received successfully! Awais will reach out to you shortly." });
});

// Setup Vite Dev Server / Static Asset Handler
async function bootstrap() {
  if (process.env.NODE_ENV !== "production") {
    console.log("Starting server in DEVELOPMENT mode with Vite Middleware...");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    console.log("Starting server in PRODUCTION mode serving compiled assets...");
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server successfully started at http://localhost:${PORT}`);
  });
}

bootstrap();
