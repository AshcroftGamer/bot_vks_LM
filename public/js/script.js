
 async function userStatus() {
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
 async function huntStatus() {
    let nome = document.getElementById( "nome" ).value
    await fetch( 'http://localhost:3000/hunt/get/' + nome )
        .then( result => {

            return result.json();

        } )
        .then( data => {

            console.log( data[0] );

            // console.log(data[0].poder)
            let lv1 = document.getElementById('lv1');
            lv1.value = data[0].level1;
            let lv2 = document.getElementById('lv2');
            lv2.value = data[0].level2;
            let lv3 = document.getElementById('lv3');
            lv3.value = data[0].level3;
            let lv4 = document.getElementById('lv4');
            lv4.value = data[0].level4;
            let lv5 = document.getElementById('lv5');
            lv5.value = data[0].level5;
           
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
