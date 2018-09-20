var express = require("express");
var db = require("./models");
var bodyParser = require("body-parser");
var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Imports the routes from burgers_controller
var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);

db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log("Listening on port %s", PORT);
    });
});