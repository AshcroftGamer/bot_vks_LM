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