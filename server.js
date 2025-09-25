const express = require("express");
const path = require("path");

const app = express();
const PORT = 4000;

// Statik fayllar (html, css, js, rasm)
app.use(express.static(path.join(__dirname)));

// Asosiy sahifa
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server http://localhost:${PORT} da ishlamoqda 🚀`);
});
