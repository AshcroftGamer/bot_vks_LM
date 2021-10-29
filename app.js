const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require('cors');


require("dotenv/config");


app.use(cors())
app.use(express.static(__dirname + "/public"));
app.use( '/css', express.static( __dirname + 'public/css' ) );
app.use( '/js', express.static( __dirname + 'public/js' ) );
app.use( '/img', express.static( __dirname + 'public/img' ) );



app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false}));

const rotaStatus = require('./routes/status') ;
const rotaCaca = require('./routes/hunt');
const cadastroRoute = require("./routes/cadastro");
const rotaAbout = require('./routes/contato');
app.use('/contato', rotaAbout);
app.use("/cadastro", cadastroRoute);
app.use('/hunt', rotaCaca);
app.use('/status', rotaStatus);

global.__basedir = __dirname;

app.get('/', (req, res) =>{
    res.sendFile(__dirname + "/index.html");
});


mongoose.connect(process.env.CONN, { useNewUrlParser: true, useUnifiedTopology: true}, () => console.log("bagaça rodando"));


app.listen(process.env.PORT, () => {
    console.log('rodou a bagaça')
});