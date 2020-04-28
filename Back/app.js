'use strict'
//DEPENDENCIAS
const express = require('express');
let createError = require ('http-errors');
let path = require('path');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');
let multipart = require('connect-multiparty');
var logger = require('morgan');
const cors = require('cors');
//CONFIGURACION DE EXPRESS
let app=express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.urlencoded({limit: '200mb', extended: false}));
app.use(bodyParser.json({limit: '200mb'}));
app.use(bodyParser.json());
app.use(cors());
app.options(cors('*',cors()));
//CONFIGURACION DEL PUERTO
let mysql = require('mysql');
const port =8081;
app.listen(port,function(){
    console.log('Listo para trabajar por el Puerto' + port);
});
//CONFIGURACION DE LAS CABECERAS
app.use((req, res,next) =>{
    res.header('Acces-Control-Allow-Origin', '*');
    res.header('Acces-Control-Allow-Origin', 'Acces-Control-Allow-Headers','X-API-KEY, Origin, Requested-With, Content-Type, Accept, Acces-Control-Request-Method, enctype, Activation');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
    res.header('Allow', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
    next();
});
module.exports = app;