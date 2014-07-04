
/**
 * Module dependencies.
 */

var express = require('express')
    , socket = require('socket.io')
    , bodyParser = require('body-parser')
    , methodOverride = require('method-override')
    , http = require('http')
    , errorHandler = require('errorhandler');

var app = express();
var server = http.createServer(app);

// Sockets
// var io = socket.listen(app).set('log level', 1);
var io = socket.listen(server);



// Configuration
var logger = function(req, res, next) {
    console.log("["+ new Date().toISOString() +" ] " + req.method + " " + req.url );
    next(); // Passing the request to the next handler in the stack.
}

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.set('log level', 1);
app.use(logger)
app.use(bodyParser());
app.use(methodOverride());
app.use(express.static(__dirname + '/public'));
app.use(errorHandler({ dumpExceptions: true, showStack: true }));



// Pages
app.get('/', function(req, res){
  res.render('index', {
    title: 'Grid'
  });
});

app.get('/:grid_id', function(req, res){
  res.render('index', {
    title: 'Grid'
  });
});

app.get('/:x/:y/:rgb', function(req, res){
  var x = req.params.x;
  var y = req.params.y;
  var rgb = req.params.rgb;
  io.sockets.emit('update', {"x":x,"y":y,"rgb":rgb});
  res.send(200);
});

app.get('/:grid_id/:x/:y/:rgb', function(req, res){
  var x = req.params.x;
  var y = req.params.y;
  var rgb = req.params.rgb;

  var nsp = io.of('/'+req.params.grid_id);
  nsp.emit('update', {"x":x,"y":y,"rgb":rgb});

  res.send(200);
});


app.get('/:x/:y/:rgb', function(req, res){
  var x = req.params.x;
  var y = req.params.y;
  var rgb = req.params.rgb;
  io.sockets.emit('update', {"x":x,"y":y,"rgb":rgb});
  res.send(200);
});


server.listen(3001);


