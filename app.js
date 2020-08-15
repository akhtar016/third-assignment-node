var express = require('express');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productsRouter = require('./routes/products');

var {firstMiddleWare} = require('./controllers/appController');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use(firstMiddleWare)
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter)

module.exports = app;
