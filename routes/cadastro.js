const express = require("express");

const router = express.Router();
const Nota = require("../model/nota");




router.post('/', async (req, res) => {
    const notas = new Nota({ //esta constante será o nome utilizado no bd para as colections
        materia: req.body.materia,
        descricao: req.body.descricao,
        nota: req.body.nota

    });
    try {
        const savedNota = await notas.save();
        //res.json(savedNota);
        res.sendFile(__basedir + '/index.html');
        
    } catch (err) {
        res.json({ message: err });
    }

});





// cada vez que criar uma função na tela cria uma rota específica com a rota raiz + função do comando
router.get('/listarnota/:materia', async (req, res) => {
    try {
       console.log( req.params.materia)
       const post = await Nota.findOne({ materia: req.params.materia});

        res.json(post);

    } catch (err) {
        res.json({ message: err });
    }

});








router.delete('/excluirnota/:materia', async (req, res) =>{
    try {
        const removedNota = await Nota.deleteOne({materia: req.params.materia});
        res.json(removedNota);

    } catch (error) {

        res.json({message: err});

    }
});


router.patch('/atualizanota/:materia', async (req, res) =>{
    
    try {
        const updateNota = await Nota.updateOne(
            {materia: req.params.materia},
            {$set: {descricao: req.body.descricao} }
            
        );
        console.log(req.body.descricao);

        res.json(updateNota);

    } catch (error) {
        res.json({message: err});
        
    }

});

router.get('/buscaid/:id', async (req, res) => {
    try {
       const post = await Nota.findById(req.params.id);

        res.json(post);

    } catch (err) {
        res.json({ message: err });
    }

});
router.get('/buscamateria/:id', async (req, res) => {
    try {
       const post = await Nota.findOne({ materia: req.params.id});

        res.json(post);

    } catch (err) {
        res.json({ message: err });
    }

});



module.exports = router;