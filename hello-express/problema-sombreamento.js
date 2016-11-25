//problema-sombreamento.js
//as rotas são definidas da esquerda para a direita, de cima para baixo
const express = require("express");

const app = express();

app.get("/hello", (req,res) => res.send("Olá pessoal :D"));

app.get("/hello", (req,res) => res.send("Olá mundo :D"));

app.listen(4000);