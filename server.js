const express = require("express");
const cors = require("cors");
require("dotenv").config();

const evaluateRoute = require("./routes/evaluate"); // <== NEU

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/evaluate", evaluateRoute); // <== NEU

// HIER den Test-Endpunkt einfügen:
app.post("/api/test", (req, res) => {
  res.json({ msg: "API läuft!" });
});

app.get("/", (req, res) => {
  res.send("Flightcheck 2.0 läuft ✅");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server läuft auf Port ${PORT}`));
