// server.js
// where your node app starts

// init project
const express = require('express');
const logger = require('morgan');
const app = express();
// const bodyParser = require('body-parser');
const cors = require('cors');

var indexRouter = require('./routes/index');
var apiRouter = require('./routes/api');

app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(logger('dev'));

app.use(cors());

// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

app.set('views', 'views')
app.set('view engine', 'ejs')

// http://expressjs.com/en/starter/basic-routing.html
app.use('/', indexRouter);
app.use('/api', apiRouter)

// listen for requests :)
const listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
