const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Servidor funcionando no Render!");
});

app.get("/api", (req, res) => {
  res.json({
    mensagem: "API online!"
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Servidor rodando");
});