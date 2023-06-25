const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

//Routes

//const userManager = require('./user/userManager');
//const checkAuth = require('./authenticator/auth');
const user = require('./user/user.js');
const test = require('./testRoute/test');

const app = express();

//dependencia para verificações na console do VSCODE
app.use(morgan('dev'));

//Padronização do tipo de resposta que deve ser enviada pelo body do navegador

app.use(bodyParser.urlencoded({extended: false})); //Apenas dados simples;
app.use(bodyParser.json());

//app.use('/api/v1', checkAuth);
app.use('/api/test', test);
//app.use('/api/v1/user', userManager);
//app.use('/api/v1/users', user);

//Quando rotas não forem encontradas
app.use((req, res, next) => {
	//remover do header *
	res.header('Access-Control-Allow-Origin', process.env.ORIGIN || '*');
	res.header(
		'Acess-Control-Allow-Header',
		'Origin, X-Requerested-With, Content-Type, Accept, Authorization'
	);
	if (req.method === 'OPTIONS') {
		res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
		return res.status(200).send({});
	}
	next();
});
app.use((req, res, next) => {
	const err = new Error('Not Found');
	err.status = 404;
	next(err);
});

app.use((error, req, res, next) => {
	res.status(error.status || 500);
	return res.send({
		error: {
			message: error.message
		}
	});
});

module.exports = app;