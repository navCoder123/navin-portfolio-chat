const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json({ limit: "20kb" }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, service: "navin-portfolio-chat" });
});

// Simple portfolio assistant. This works without an API key; connect an AI provider later if desired.
app.post("/api/chat", (req, res) => {
  const message = String(req.body?.message || "").trim().slice(0, 1000);
  if (!message) return res.status(400).json({ reply: "Please type a message first." });

  const q = message.toLowerCase();
  let reply;
  if (/(hello|hi|hey|namaste)/.test(q)) {
    reply = "Hey! 👋 Welcome to Navin's portfolio. Ask me about his skills, projects, experience, or how to contact him.";
  } else if (/(skill|technology|tech stack|coding)/.test(q)) {
    reply = "Navin works with JavaScript, React, Vite, Tailwind CSS, Node.js, Express, MongoDB, REST APIs, GitHub, and deployment platforms such as Render and Vercel.";
  } else if (/(project|hallaghar|halla ghar|halla entry)/.test(q)) {
    reply = "One highlighted project is HALLA GHAR / HALLA ENTRY, an event-ticketing website concept with event listings, QR-code tickets, an admin scanning flow, and Razorpay payment integration.";
  } else if (/(experience|work|job|casino)/.test(q)) {
    reply = "Navin has professional casino-dealing experience and is also developing web projects with the MERN stack. For exact dates and details, please ask Navin directly.";
  } else if (/(contact|email|hire|available|reach)/.test(q)) {
    reply = "Thanks for your interest! Add your preferred public email and social links to public/index.html so visitors can contact you directly.";
  } else if (/(resume|cv|download)/.test(q)) {
    reply = "A resume download link can be added to the portfolio. Place your PDF in the public folder and link to it from the page.";
  } else {
    reply = "I can help with questions about Navin's skills, projects, experience, or contact details. Try asking: “What projects has Navin built?”";
  }
  res.json({ reply });
});

app.get("*", (_req, res) => res.sendFile(path.join(__dirname, "public", "index.html")));

app.listen(PORT, () => console.log(`Portfolio server listening on ${PORT}`));
