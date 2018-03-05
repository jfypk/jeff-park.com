// server.js
// load the things we need
var express = require('express');
var app = express();

//set up node-sass https://www.npmjs.com/package/node-sass

// set the view engine to ejs
app.set('views', __dirname + '/views')
app.set('view engine', 'ejs');

// index page 
app.get('/', function(req, res) {
    res.render('pages/index');
});

// about page 
app.get('/about', function(req, res) {
    res.render('pages/about');
});

app.get('/yuna', function(req, res) {
    res.render('pages/yuna');
});

app.get('/work/ocular', function(req, res) {
    res.render('pages/work/ocular');
});

app.get('/work/deliverance', function(req, res) {
    res.render('pages/work/deliverance');
});

app.get('/work/deliverance-full', function(req, res) {
    res.render('pages/work/deliverance-full');
});

app.get('/work/liquidlight', function(req, res) {
    res.render('pages/work/liquidlight');
});

app.get('/work/accessnyc', function(req, res) {
    res.render('pages/work/accessnyc');
});

app.get('/work/swellbeats', function(req, res) {
    res.render('pages/work/swellbeats');
});

app.get('/work/pinocchio', function(req, res) {
    res.render('pages/work/pinocchio');
});

app.get('/work/shaders', function(req, res) {
    res.render('pages/work/shaders');
});

app.use(express.static('public'));
app.use('/blog', express.static('blog/public'));

app.listen(8000);
console.log('8000 is the magic port');