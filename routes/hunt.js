const route = require('express').Router();
const Hunt = require('../model/hunt');

route.get('/', (req, res) => {

    res.sendFile(__basedir + '/public/pages/hunt.html');
})

route.get('/get/', async (req, res) => {
    try {
        console.log(req.params.nome)
        let nomeUser = req.body.nome
        const todos = await Hunt.find({nome: nomeUser});
        console.log(todos)
        res.send(JSON.stringify(todos))
        
    } catch (error) {
        res.json({ message: error });
    }
})

route.post('/cadastro', async (req, res) => {
    const hunt = new Hunt({ //esta constante será o nome utilizado no bd para as colections
        nome: req.body.nome,
        level1: req.body.level1,
        level2: req.body.level2,
        level3: req.body.level3,
        level4: req.body.level4,
        level5: req.body.level5,
        data: req.body.data

    });
    try {
        const huntSaved = await hunt.save();
        res.json(huntSaved);
        // res.sendFile(__basedir + '/index.html');
        
    } catch (err) {
        res.json({ message: err });
    }

});


module.exports = route;