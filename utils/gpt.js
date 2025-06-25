const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function generateInsights(answers) {
  const prompt = `
Du bist Vertriebsdiagnostiker bei revenuepilots.
Analysiere die folgenden Antworten eines Unternehmens zum Thema Vertrieb.

Antworten: ${JSON.stringify(answers, null, 2)}

Strukturiere die Analyse bitte so:
1. Kurzfazit (2–3 Sätze)
2. Hauptprobleme (max. 3 Punkte, Bulletpoints)
3. Konkrete Handlungsempfehlungen (Bulletpoints)
`;

  const chatCompletion = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      { role: "system", content: "Du schreibst klare, direkte Vertriebsanalysen im Stil eines Diagnostikers." },
      { role: "user", content: prompt }
    ]
  });

  return chatCompletion.choices[0].message.content;
}

module.exports = { generateInsights };
