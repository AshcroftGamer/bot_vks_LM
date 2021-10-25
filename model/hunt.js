const mogoose = require( 'mongoose' );

const HuntSchema = mogoose.Schema( {
    nome: {
        type: String,
        required: true
    },
    level1: {
        type: String
    },
    level2: {
        type: String

    },
    level3: {
        type: String
    },
    level4: {
        type: String

    },
    level5: {
        type: String
    },
    total: {
        type: String

    },
    data: {
        type: String,
        required: true
    }
} );

module.exports = mogoose.model( 'hunt', HuntSchema );