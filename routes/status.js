const route = require( 'express' ).Router();
const Status = require( '../model/status' );

route.get( '/', ( req, res ) => {

    res.sendFile( __basedir + '/public/pages/status.html' );
} )

route.get( '/get/:nome', async ( req, res ) => {
    try {
        let nomeUser = req.params.nome
        const todos = await Status.find( { nome: nomeUser } );
        res.json(todos)

    } catch ( error ) {
        res.json( { message: error } );
    }
} )

route.post( '/cadastro', async ( req, res ) => {
    const nome = new Status( { //esta constante será o nome utilizado no bd para as colections
        nome: req.body.nome,
        level1: req.body.level1,
        level2: req.body.level2,
        level3: req.body.level3,
        level4: req.body.level4,
        level5: req.body.level5,
        data: req.body.data

    } );
    try {
        const StatusSaved = await nome.save();
        res.json( StatusSaved );
        // res.sendFile(__basedir + '/index.html');

    } catch ( err ) {
        res.json( { message: err } );
    }

} );


module.exports = route;