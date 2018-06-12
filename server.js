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

// work page 
app.get('/work', function(req, res) {
    res.render('pages/work');
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

app.get('/work/brainrhythms', function(req, res) {
    res.render('pages/work/brainrhythms');
});

app.get('/work/responsibly', function(req, res) {
    res.render('pages/work/responsibly');
});

app.get('/work/pinocchio', function(req, res) {
    res.render('pages/work/pinocchio');
});

app.get('/work/shaders', function(req, res) {
    res.render('pages/work/shaders');
});

app.get('/work/dress', function(req, res) {
    res.render('pages/work/dress');
});

app.get('/work/glitch', function(req, res) {
    res.render('pages/work/glitch');
});

app.get('/work/fogg', function(req, res) {
    res.render('pages/work/fogg');
});

app.get('/work/crystal', function(req, res) {
    res.render('pages/work/crystal');
});

app.get('/work/hipchat', function(req, res) {
    res.render('pages/work/hipchat');
});

app.get('/work/longboard', function(req, res) {
    res.render('pages/work/longboard');
});

app.use(express.static('public'));
app.use('/blog', express.static('blog/public'));

app.listen(8000);
console.log('8000 is the magic port');