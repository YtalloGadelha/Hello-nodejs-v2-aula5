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

//verificando os parâmetros da consulta
app.get("/queryparams", (req,res) => {

	console.log(req.query);
	res.send("Veja no console(terminal)");
});

//verificando os parâmetros de requisição
app.get("/pathparams/:nome/:time", (req,res) => {

	res.send(`Meu nome é ${req.params.nome} e meu time é o ${req.params.time}!`);
	console.log(req.params);
	console.log(`Meu nome é ${req.params.nome} e meu time é o ${req.params.time}!`);
});

//trabalhando com parâmetros opcionais
app.get("/optional(/:maybe)?", (req,res) => {

	if (req.params.maybe)
		res.send("Call me " + req.params.maybe);

	else
		res.send("I just met you");

	console.log(req.params);
});

app.listen(3000);