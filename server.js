/* 
Node.js will operate with three dependencies:
express for routing,
mongoose for database structuring,
and body-parser for handling request post data
*/

var express = require("express");
var path= require('path');

var app = express();

const server = app.listen(8000, function () {
    console.log("listening on port 8000");
});

var bodyParser = require('body-parser');
app.use(bodyParser.json());

//=========> Connect to ANGULAR <=========
// <*> linking an angular app named 'public'
//if calling the app something else - replace accordingly
app.use(express.static(__dirname + '/public/dist/public'));

//mongoose connection
require('./server/config/mongoose.js');

//ROUTES
require('./server/config/routes.js')(app);

//The wildcard path for angular routes.
// <*> if calling your app something onther than
// "public", rename here as well
app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
});