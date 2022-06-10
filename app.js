let userScore= 0;
let compScore= 0;
const userScore_span= document.getElementById('user-score');
const compScore_span= document.getElementById('comp-score');
const scoreBoard_div= document.querySelector('marcador');
const result_div= document.querySelector('.result p');
const piedra_div= document.getElementById('r');
const papel_div= document.getElementById('p');
const tijera_div= document.getElementById('t');


function movidaComp() {
    const opciones = ['r', 'p', 't'];
    const random = Math.floor( Math.random() * 3);
    const movida = opciones[random];
    return movida;
}

function convertirletra(opcion) {
    if (opcion == 'r') {
        return "Piedra ";
    } else if (opcion == 'p') {
        return "Papel ";
    }else{
        return "Tijeras ";
    }
}

function empate(opcionUser) {
    result_div.innerHTML = "ambos eligieron "+convertirletra(opcionUser)+ " ...es un empate";
}

function pierda(opcionUser, opcionPc) {
    compScore++;
    compScore_span.innerHTML = compScore;
    result_div.innerHTML = convertirletra(opcionPc)+" le gana a "+convertirletra(opcionUser)+ " ...tú perdiste";
}

function ganar(opcionUser, opcionPc) {
    userScore++;
    userScore_span.innerHTML = userScore;
    result_div.innerHTML = convertirletra(opcionUser)+" le gana a "+convertirletra(opcionPc)+ " ...tú ganaste";
}


function game(opcion) {
    const movidaPc = movidaComp();
    const movidaUser = opcion;

    switch (movidaUser+movidaPc) {
        //user: r | pc: p
        case 'rt':
        case 'pr':
        case 'tp':
            ganar(movidaUser, movidaPc);
        break;

        case 'rp':
        case 'pt':
        case 'tr':
            pierda(movidaUser, movidaPc);
        break;

        case 'rr':
        case 'pp':
        case 'tt':
            empate(movidaUser);
        break;
    }
}

function main() {
    piedra_div.addEventListener('click', () => game("r"));
    papel_div.addEventListener('click', () => game("p"));
    tijera_div.addEventListener('click', () => game("t"));
}
main();