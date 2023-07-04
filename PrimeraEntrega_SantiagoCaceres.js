var numVidas = 5;

alert ('La palabra final es ' + ' _  _  _  _  _ ')

var letraCorrecta = 'C'

function tries(){
for (var i = numVidas; i > 0; i--) {

    console.log("Vidas restantes: " + i);
    let letra = prompt('Ingrese Letra')

    if (letra !== letraCorrecta) {
        console.log('No es esa letra')
        numVidas--;
    } else {
    console.log (' Correcto era la letra ' + letraCorrecta)
    break
    }

}

  // Restar una vida
if (numVidas === 0) {
    console.log('Te haz quedado sin vidas')
    }
}

tries()

alert ('CORRECTO! La palabra final es ' + 'C  _  _  _  _')

// SEGUNDA LETRA
//----------------------
letraCorrecta = letraCorrecta = 'O'
tries()

alert ('CORRECTO! La palabra final es ' + 'C  O  _  _  _')

//----------------------
letraCorrecta = letraCorrecta = 'D'
tries()

alert ('CORRECTO! La palabra final es ' + 'C  O  D  _  _')

//----------------------
letraCorrecta = letraCorrecta = 'E'
tries()

alert ('CORRECTO! La palabra final es ' + 'C  O  D  E  _')
//----------------------

letraCorrecta = letraCorrecta = 'R'
tries()

alert ('CORRECTO! La palabra final es ' + 'C  O  D  E  R')
//----------------------

var cabeza = "  😊";
var cabeza2 = " 😵";
var cuello = "   |";
var brazos = "  /|\\";
var cuerpo = "   |";
var piernas = "  / \\";
var base = "_______";


switch (numVidas) {
    case 5:
        console.log(cabeza);
        break;
    case 4:
        console.log(cabeza);
        console.log(cuello);
        break;
    case 3:
        console.log(cabeza);
        console.log(cuello);
        console.log(brazos);
        break;
    case 2:
        console.log(cabeza);
        console.log(cuello);
        console.log(brazos);
        console.log(cuerpo);
        break;
    case 1:
        console.log(cabeza);
        console.log(cuello);
        console.log(brazos);
        console.log(cuerpo);
        console.log(piernas);
    case 0:
        console.log(cabeza2);
        console.log(cuello);
        console.log(brazos);
        console.log(cuerpo);
        console.log(piernas);
        console.log(base)       
        break;
    }