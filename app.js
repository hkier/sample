const express = require('express');
const app = new express;
const volleyball = require('volleyball');
const chalk = require('chalk');
const sequelize = require('sequelize');
const nunjucks = require('nunjucks');
const router = express.Router();
const bodyParser = require('body-parser');
const path = require('path')

console.log(chalk.magenta('started at ', Date()));


app.use(volleyball)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(express.static(path.join(__dirname, 'public')));

app.use('/', require('./model/routes'));


app.listen(9876)
console.log(chalk.magenta('listening on port 9876'))




