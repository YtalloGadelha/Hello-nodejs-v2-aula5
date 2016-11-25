// index.js
const express = require("express");

const app = express();

app.get("/hello", (req,res) => res.send("Olá mundo :D"));

app.get("/greet", (req,res) => {

	//verificando se o parâmetro foi passado na consulta
	if(req.query.nome)
		res.send(`Olá, ${req.query.nome}!`);

	else
		res.send("Faltou o parâmetro");
});

app.listen(3000);