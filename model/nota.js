const mogoose = require( "mongoose" );

const NotaSchema = mogoose.Schema( {
    materia: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    },
    nota: {
        type: String,
        required: true
    }



} );

module.exports = mogoose.model( 'Nota', NotaSchema );