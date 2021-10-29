const route = require('express').Router();

route.get('/', (req, res) => {
    res.sendFile( __basedir + '/public/pages/about.html' );
})

module.exports = route;