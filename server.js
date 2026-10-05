const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.post("/api/generate", async (req, res) => {
  try {
    const { prompt, language } = req.body;

    if (!prompt || !prompt.trim()) {
      return res.status(400).json({ error: "Prompt is required" });
    }

    const systemInstruction = `
You are an expert programmer.
Return only code in ${language || "JavaScript"}.
Do not add explanations.
Do not wrap code in markdown fences.
Use valid syntax only.
`;

    const ollamaResponse = await fetch("http://localhost:11434/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "llama3.2",
        prompt: `${systemInstruction}\n\nUser request: ${prompt}`,
        stream: false
      })
    });

    if (!ollamaResponse.ok) {
      throw new Error(`Ollama API error: ${ollamaResponse.status}`);
    }

    const data = await ollamaResponse.json();
    const output = data.response || "No code generated.";

    return res.json({ code: output.trim() });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: "Failed to generate code. Make sure Ollama is running and the model is installed."
    });
  }
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
