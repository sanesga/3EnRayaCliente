//////////////////////////////////////////////////////////////////////////////

//VARIABLES
var celdasElements = new Array();
var tablero = new Array(3);
var fila1 = new Array(3);
var fila2 = new Array(3);
var fila3 = new Array(3);
var turnos = 0;
var columnaMaquina = new Number();
var filaMaquina = new Number();
var columnaJugador = new Number();
var filaJugador = new Number();

//REFERENCIAS
var mensajes = document.getElementById("mensajes");
var btnPlayAgain = document.getElementById("playAgain");
for (var i = 1; i < 10; i++) {
  celdasElements[i] = document.getElementById(i);
}

//LISTENERS
for (var i = 1; i < 10; i++) {
  celdasElements[i].addEventListener("click", verificarPosicionUsuario);
}
btnPlayAgain.addEventListener("click", reloadPage);

/////////////////////////////////////////////////////////////////////////////

//creamos el tablero (array bidimensional)
tablero[0] = fila1;
tablero[1] = fila2;
tablero[2] = fila3;

//lo rellenamos con ceros (si pone ficha la máquina, se rellenará la celda con un 1 y si lo hace el usuario, con un 2)
rellenarTablero();

//DECIDIR QUIEN EMPIEZA (USUARIO O MÁQUINA)
var number = Math.floor(Math.random() * 2);

if (number == 0) {
  juegaMaquina();
} else {
  juegaUsuario();
}

function juegaMaquina() {
  //si no se ha llegado a los 9 movimientos
  if (turnos < 9) {
    turnos++;
    //bloqueamos el click para el usuario
    deshabilitarClick();

    //numero aleatorio para poner ficha
    crearPosicion();

    //verificamos que la posición esté libre
    verificarPosicion();

    //si se ha tirado 9 veces y nadie ha ganado, será empate
  } else if (turnos == 9) {
    mensajes.innerHTML = "Empate!!";
    deshabilitarClick();
  }
}
//la misma función que para la máquina
function juegaUsuario() {
  if (turnos < 9) {
    turnos++;
    habilitarClick();
  } else if (turnos == 9) {
    mensajes.innerHTML = "Empate!!";
  }
}

function deshabilitarClick() {
  for (var i = 1; i < celdasElements.length; i++) {
    celdasElements[i].style.pointerEvents = "none";
  }
}

function habilitarClick() {
  for (var i = 1; i < celdasElements.length; i++) {
    celdasElements[i].style.pointerEvents = "auto";
  }
}
//creamos la posición del array aleatoriamente
function crearPosicion() {
  columnaMaquina = Math.floor(Math.random() * 3);
  filaMaquina = Math.floor(Math.random() * 3);
}

//verificamos si la posición está libre
function verificarPosicion() {
  if (tablero[columnaMaquina][filaMaquina] == 0) {
    //si está libre, ponemos ficha
    tablero[columnaMaquina][filaMaquina] = 1;
    ponerFichaMaquina();
  } else {
    //si no está libre, sacamos otra posicion
    crearPosicion();
    verificarPosicion();
  }
}

//aquí asociamos el click del usuario sobre el tablero con las posiciones del array
function verificarPosicionUsuario() {
  switch (this.id) {
    case "1":
      columnaJugador = 0;
      filaJugador = 0;
      break;
    case "2":
      columnaJugador = 0;
      filaJugador = 1;
      break;
    case "3":
      columnaJugador = 0;
      filaJugador = 2;
      break;
    case "4":
      columnaJugador = 1;
      filaJugador = 0;
      break;
    case "5":
      columnaJugador = 1;
      filaJugador = 1;
      break;
    case "6":
      columnaJugador = 1;
      filaJugador = 2;
      break;
    case "7":
      columnaJugador = 2;
      filaJugador = 0;
      break;
    case "8":
      columnaJugador = 2;
      filaJugador = 1;
      break;
    case "9":
      columnaJugador = 2;
      filaJugador = 2;
      break;
  }

  //si está libre, ponemos ficha
  if (tablero[columnaJugador][filaJugador] == 0) {
    tablero[columnaJugador][filaJugador] = 2;
    ponerFichaJugador(this.id);
  }
}
//aquí asociamos las posiciones aleatorias del array con la celda del dom
function ponerFichaMaquina() {
  var elemento = null;
  if (columnaMaquina == 0 && filaMaquina == 0) {
    elemento = celdasElements[1];
  } else if (columnaMaquina == 0 && filaMaquina == 1) {
    elemento = celdasElements[2];
  } else if (columnaMaquina == 0 && filaMaquina == 2) {
    elemento = celdasElements[3];
  } else if (columnaMaquina == 1 && filaMaquina == 0) {
    elemento = celdasElements[4];
  } else if (columnaMaquina == 1 && filaMaquina == 1) {
    elemento = celdasElements[5];
  } else if (columnaMaquina == 1 && filaMaquina == 2) {
    elemento = celdasElements[6];
  } else if (columnaMaquina == 2 && filaMaquina == 0) {
    elemento = celdasElements[7];
  } else if (columnaMaquina == 2 && filaMaquina == 1) {
    elemento = celdasElements[8];
  } else if (columnaMaquina == 2 && filaMaquina == 2) {
    elemento = celdasElements[9];
  }
  //añadimos el icono dinamicamentte
  var i = document.createElement("i");
  i.className = "fas fa-kiwi-bird";
  i.style.fontSize = "60px";
  i.style.color = "#0F3E87";
  elemento.appendChild(i);

  //esperamos 2s y comprobamos si ha ganado la máquina con este movimiento
  setTimeout(function() {
    comprobarGanadorMaquina();
  }),
    2000;
  juegaUsuario();
}

//imprimimos la ficha del jugador
function ponerFichaJugador(id) {
  var i = document.createElement("i");
  i.className = "fas fa-carrot";
  i.style.fontSize = "60px";
  i.style.color = "#FF900B";
  celdasElements[id].appendChild(i);

  //esperamos 3s y verificamos si ha ganado con ese movimiento
  setTimeout(function() {
    comprobarGanadorUsuario();
  }),
    2000;

  //esperamos 3s para que juegue la máquina
  setTimeout(function() {
    juegaMaquina();
  }),
    3000;
}

//rellenamos el tablero con ceros
function rellenarTablero() {
  for (var i = 0; i < tablero.length; i++) {
    for (var j = 0; j < tablero[i].length; j++) {
      tablero[i][j] = 0;
    }
  }
}

//comprobamos si el usuario ha ganado en cualquiera de las siguientes combinaciones de posiciones
function comprobarGanadorUsuario() {
  var ganar = false;

  //en horizontal
  if (
    tablero[0][0] == tablero[0][1] &&
    tablero[0][0] == tablero[0][2] &&
    tablero[0][0] == 2
  ) {
    ganar = true;
  }
  if (
    tablero[1][0] == tablero[1][1] &&
    tablero[1][0] == tablero[1][2] &&
    tablero[1][0] == 2
  ) {
    ganar = true;
  }
  if (
    tablero[2][0] == tablero[2][1] &&
    tablero[2][0] == tablero[2][2] &&
    tablero[2][0] == 2
  ) {
    ganar = true;
  }

  //en vertical
  if (
    tablero[0][0] == tablero[1][0] &&
    tablero[0][0] == tablero[2][0] &&
    tablero[0][0] == 2
  ) {
    ganar = true;
  }
  if (
    tablero[0][1] == tablero[1][1] &&
    tablero[0][1] == tablero[2][1] &&
    tablero[0][1] == 2
  ) {
    ganar = true;
  }
  if (
    tablero[0][2] == tablero[1][2] &&
    tablero[0][2] == tablero[2][2] &&
    tablero[0][2] == 2
  ) {
    ganar = true;
  }

  //en diagonal
  if (
    tablero[0][0] == tablero[1][1] &&
    tablero[0][0] == tablero[2][2] &&
    tablero[0][0] == 2
  ) {
    ganar = true;
  }
  if (
    tablero[2][0] == tablero[1][1] &&
    tablero[2][0] == tablero[0][2] &&
    tablero[2][0] == 2
  ) {
    ganar = true;
  }

  if (ganar) {
    mensajes.innerHTML = "Has ganado!!";
    deshabilitarClick();
    //asignamos 10 a los turnos, para que no nos diga que es empate
    turnos = 10;
  }
}
//hacemos lo mismo con la máquina
function comprobarGanadorMaquina() {
  var ganar = false;
  // Horizontal
  if (
    tablero[0][0] == tablero[0][1] &&
    tablero[0][0] == tablero[0][2] &&
    tablero[0][0] == 1
  ) {
    ganar = true;
  }
  if (
    tablero[1][0] == tablero[1][1] &&
    tablero[1][0] == tablero[1][2] &&
    tablero[1][0] == 1
  ) {
    ganar = true;
  }
  if (
    tablero[2][0] == tablero[2][1] &&
    tablero[2][0] == tablero[2][2] &&
    tablero[2][0] == 1
  ) {
    ganar = true;
  }

  // Vertical
  if (
    tablero[0][0] == tablero[1][0] &&
    tablero[0][0] == tablero[2][0] &&
    tablero[0][0] == 1
  ) {
    ganar = true;
  }
  if (
    tablero[0][1] == tablero[1][1] &&
    tablero[0][1] == tablero[2][1] &&
    tablero[0][1] == 1
  ) {
    ganar = true;
  }
  if (
    tablero[0][2] == tablero[1][2] &&
    tablero[0][2] == tablero[2][2] &&
    tablero[0][2] == 1
  ) {
    ganar = true;
  }

  //Diagonal
  if (
    tablero[0][0] == tablero[1][1] &&
    tablero[0][0] == tablero[2][2] &&
    tablero[0][0] == 1
  ) {
    ganar = true;
  }
  if (
    tablero[2][0] == tablero[1][1] &&
    tablero[2][0] == tablero[0][2] &&
    tablero[2][0] == 1
  ) {
    ganar = true;
  }

  if (ganar) {
    mensajes.innerHTML = "Gana la máquina!!";
    deshabilitarClick();
  }
}
//al hacer click al botón de volver a jugar, se vuelve a cargar la página.
function reloadPage() {
  window.location.reload();
}
