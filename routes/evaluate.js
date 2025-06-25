const express = require("express");
const router = express.Router();
const { generateInsights } = require("../utils/gpt");

// POST /api/evaluate
router.post("/", async (req, res) => {
  const { answers } = req.body;

  if (!answers || !Array.isArray(answers)) {
    return res.status(400).json({ error: "Ungültige Daten" });
  }

  try {
    const analysis = await generateInsights(answers);
    res.json({ analysis });
  } catch (err) {
    console.error("Fehler bei GPT:", err);
    res.status(500).json({ error: "Analyse fehlgeschlagen" });
  }
});

module.exports = router;
