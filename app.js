const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");
app.use(express.static(__dirname + "/public"));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false}));

const rotaCaca = require('./routes/hunt');
const cadastroRoute = require("./routes/cadastro");
app.use("/cadastro", cadastroRoute);
app.use('/hunt', rotaCaca);

global.__basedir = __dirname;

app.get('/', (req, res) =>{
    res.sendFile(__dirname + "/index.html");
});


mongoose.connect(process.env.CONN, { useNewUrlParser: true, useUnifiedTopology: true}, () => console.log("bagaça rodando"));


app.listen(3000, () => {
    console.log('rodou a bagaça')
});