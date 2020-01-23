var express = require('express');
var app = express();

app.get('/tasks', function (req, res) {
   var data = [
      { subject: 'Apple', status: 0 },
      { subject: 'Orange', status: 0 }
   ];

   res.status(200).json(data);
});

app.listen(8000, function () {
   console.log('Todo API running at port 8000!');
});