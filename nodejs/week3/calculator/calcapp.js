const express = require("express");
const bodyParser = require("body-parser");
const calc = require("./calculate");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static("public"));
app.use("/calculate",calc);

// app.listen(3000);
module.exports =app;

