function add() {

    let user = {
        materia: window.document.getElementsByName( 'materia' ).value,
        descricao: window.document.getElementsByName( 'descricao' ).value,
        nota: window.document.getElementsByName( 'nota' ).value
    };

    let response = fetch( 'http://localhost:3000/cadastro/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify( user )
    } );

}
async function byid() {

    fetch( 'http://localhost:3000/cadastro/listarnota/' + document.getElementById( "materia" ).value )
        .then( result => {

            return result.json();

        } )
        .then( data => {

            console.log( data );
            //document.getElementById("ide").value = data._id;
            document.getElementById( "descricao" ).value = data.descricao;
            document.getElementById( "nota" ).value = data.nota;
            fetch( 'http://localhost:3000/cadastro/buscaid/' + data._id )
                .then( result => {

                    return result.json();

                } )
                .then( data => {

                    console.log( data );
                    document.getElementById( "materia" ).value = data.materia;
                    document.getElementById( "descricao" ).value = data.descricao;
                    document.getElementById( "nota" ).value = data.nota;
                    
            
                } );




        } );

}
async function buscaName() {

    fetch( 'http://localhost:3000/status/get/' + document.getElementById( "nome" ).value )
        .then( result => {

            return result.json();

        } )
        .then( data => {

            console.log( data[0] );
           
        } );

}
 async function huntStatus() {
    let nome = document.getElementById( "nome" ).value
    await fetch( 'http://localhost:3000/status/get/' + nome )
        .then( result => {

            return result.json();

        } )
        .then( data => {

            // console.log( data[0] );
            // console.log(data[0].poder)
            let poder = document.getElementById('power');
            poder.value = data[0].poder;
            // console.log(data[0].kills)
            let kill = document.getElementById('kill');
            kill.value = data[0].kills;
            // console.log(data[0].ranking)
            let ades = document.getElementById('ades');
            ades.value = data[0].ranking;
            // console.log(data[0].taxaVitoria)
            let abes = document.getElementById('abes');
            abes.value = data[0].taxaVitoria;
            // console.log(data[0].armadilhasDestruidas)
            let ames = document.getElementById('ames');
            ames.value = data[0].armadilhasDestruidas;
           
        } );

}

function formatarNumero(n) {
    var n = n.toString();
    var r = '';
    var x = 0;

    for (var i = n.length; i > 0; i--) {
        r += n.substr(i - 1, 1) + (x == 2 && i != 1 ? '.' : '');
        x = x == 2 ? 0 : x + 1;
    }

    return r.split('').reverse().join('');
}

async function delet() {

    fetch( 'http://localhost:3000/cadastro/excluirnota/' + document.getElementById( "materia" ).value, { method: 'DELETE' } )
        .then( result => {
            return result.json();
        } )
        .then( data => {

            console.log( data );

        } );

    alert( "Exclui " + document.getElementById( "materia" ).value );
    document.getElementById( "materia" ).value = "";

}
async function update() {

    fetch( 'http://localhost:3000/cadastro/atualizanota/' + document.getElementById( "materia" ).value,
        {
            method: 'PATCH',
            body: JSON.stringify( { descricao: document.getElementById( "descricao" ).value } ),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }

        } )
        .then( result => {

            return result.json();

        } )
        .then( data => {
            console.log( data )

        } );




}
async function bid() {


    // Se o codigo for introduzido em X input execute -  se não execute este outro
    fetch( 'http://localhost:3000/cadastro/buscaid/' + document.getElementById( "ide" ).value, )
        .then( result => {

            return result.json();

        } )
        .then( data => {

            console.log( data );
            document.getElementById( "materia" ).value = data.materia;
            document.getElementById( "descricao" ).value = data.descricao;
            document.getElementById( "nota" ).value = data.nota;
            var ab = data._id;

            fetch( 'http://localhost:3000/cadastro/buscamateria/' + document.getElementById( "materia" ).value, )
                .then( result => {

                    return result.json();

                } )
                .then( data => {

                    console.log( data );
                    console.log( ab )

                } );

        } );



}