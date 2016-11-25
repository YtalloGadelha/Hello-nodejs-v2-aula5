//exemplo-express-knex.js

const knex = require("./db");
const express = require("express");

const app = express();

app.get("/convidados", (req,res) => {

	knex("convidado").select().then((ret) => {
		res.send(ret);
		console.log(ret);
		//process.exit(0);
	}).catch((err) => {
		console.log(err);
		process.exit(1);
	});
});

app.listen(5000);