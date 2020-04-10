var express = require("express");
var app = express();

var mongojs = require("mongojs");
var db = mongojs("todo", ["tasks"]);

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var cors = require("cors");
app.use(cors());

app.get("/tasks", function (req, res) {
  db.tasks.find(function (err, data) {
    res.status(200).json(data);
  });
});

app.get("/tasks/:id", function (req, res) {
  db.tasks.find(
    {
      _id: mongojs.ObjectID(req.params.id),
    },
    function (err, data) {
      res.status(200).json(data);
    }
  );
});

app.post("/tasks", function (req, res) {
  var subject = req.body.subject;

  if (!subject)
    res.status(400).json({
      msg: "Missing Subject!",
    });

  db.tasks.insert({ subject, status: 0 }, function (err, data) {
    res.status(200).json(data);
  });
});

app.delete("/tasks/:id", function (req, res) {
  db.tasks.remove(
    {
      _id: mongojs.ObjectID(req.params.id),
    },
    function (err, data) {
      res.status(200).json(data);
    }
  );
});

app.delete("/tasks", function (req, res) {
  db.tasks.remove({ status: 1 }, function (err, data) {
    res.status(200).json(data);
  });
});

app.put("/tasks/:id", function (req, res) {
  var status = req.body.status;

  if (status !== 1 && status !== 0) {
    return res.status(400).json({ msg: "Incorrect Status!" });
  }

  db.tasks.update(
    { _id: mongojs.ObjectID(req.params.id) },
    { $set: { status: status } },
    { multi: false },
    function (err, data) {
      res.status(200).json(data);
    }
  );
});

app.listen(8000, function () {
  console.log("Todo API running at port 8000!");
});
