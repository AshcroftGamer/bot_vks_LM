const mongoose = require( 'mongoose' );

const StatusSchema = mongoose.Schema( {
    nome: {

        type: String,
        required: true
    },
    nickname: {

        type: String
    },
    ranking: {

        type: String
    },
    poder: {
        type: String
    },
    kills: {
        type: String
    },
    vitorias: {
        type: String
    }, derrotas: {

        type: String
    },
    taxaVitoria: {
        type: String
    },
    tropasPerdidas: {
        type: String
    }, armadilhasPerdidas: {
        type: String
    },
    tropasFeridas: {
        type: String
    },
    tropasInimigasFeridas: {
        type: String
    },
    territoriosDestruidos: { 
        type: String 
    },
    territoriosPerdidos: {
        type: String
    },
    inimigosDestruidosPoder: {
         type: String 
        },

    ataqueDeFamiliarLancado: { 
        type: String 
    },
    atacadoPeloFamiliarInimigo: { 
        type: String 
    },
    inimigosCapturados: { type: String },
    prisioneirosExecutados: { type: String },

    prisioneirosQueFugiram: { type: String },
    lideresQueFugiram: { type: String },
    lideresCapturados: { type: String },
    lideresExecutados: { type: String },
    recompensasColetadas: { type: String },
    posicaoAtualColiseu: { type: String },
    melhorPosicaoColiseu: { type: String },
    vitoriasColiseu: { type: String },
    comidaEnviada: { type: String },
    pedraEnviada: { type: String },
    madeiraEnviada: {
        type: String
    },
    minerioEnviado: { type: String },

    ouroEnviado: { type: String },
    ajudaEnviada: { type: String },
    totalRecursosColetados: { type: String },
    ataquesBemSucedidos: { type: String },

    ataquesMalSucedidos: { type: String },
    defesasBemSucedidas: { type: String },
    defesasMalSucedidas: { type: String },

    tropasMortas: { type: String },
    armadilhasDestruidas: { type: String }
} );

module.exports = mongoose.model( 'status', StatusSchema );