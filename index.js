var express = require('express');
var app = express();

app.get('/pracujte/:name/:from', function (req, res) {
  res.send(req.params.name+" pracujte. <br>-"+req.params.from);
});

app.get('/kopac/:name/:from', function (req, res) {
  res.send(req.params.name+" nebuďte kopáč. <br>-"+req.params.from);
});

app.get('/patent/:name/:count/:from', function (req, res) {
  res.send(req.params.name+" mám "+req.params.name+" amerických patentů. <br>-"+req.params.from);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});