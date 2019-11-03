//////////////////////////////////////////////////////////////////////////////

//VARIABLES
var celdasElements = new Array(); //guarda las celdas del dom
var tablero = new Array(3);
var fila1 = new Array(3);
var fila2=new Array(3);
var fila3= new Array(3);

var columnaMaquina = new Number();
var filaMaquina = new Number();
var columnaJugador = new Number();
var filaJugador= new Number();

//REFERENCIAS
//en cada posición guardo un elemento del dom
for (var i = 1; i < 10; i++) {
  celdasElements[i] = document.getElementById(i);
}

// //LISTENERS
// for (var i = 1; i < 10; i++) {
//   celdasElements[i].addEventListener("click", verificarPosicionUsuario);
// }

/////////////////////////////////////////////////////////////////////////////


tablero[0] = fila1;
tablero[1] = fila2;
tablero[2] = fila3;

//rellenarTablero();
//console.log(tablero);

// //DECIDIR QUIEN EMPIEZA (USUARIO O MÁQUINA)
// var number = Math.floor(Math.random() * 2);

// //juega la máquina
// number = 0;
// if (number == 0) {
//   juegaMaquina();
//   //juega el usuario
// } else {
//   juegaUsuario();
// }

// function juegaMaquina() {
//   //bloqueamos el click para el usuario
//   deshabilitarClick();

//   //numero aleatorio para poner ficha
//   crearPosicion();

//   verificarPosicion();
// }
// function juegaUsuario() {
//   habilitarClick();
// }
// function deshabilitarClick() {
//   for (var i = 1; i < celdasElements.length; i++) {
//     celdasElements[i].style.pointerEvents = "none";
//   }
// }
// function habilitarClick() {
//   for (var i = 1; i < celdasElements.length; i++) {
//     celdasElements[i].style.pointerEvents = "auto";
//   }
// }
// function crearPosicion() {
//   columnaMaquina = Math.floor(Math.random() * 3);
//   filaMaquina = Math.floor(Math.random() * 3);
// }

// function verificarPosicion() {
//   console.log(tablero);
//   console.log(columnaMaquina);
//   console.log(filaMaquina);
//   console.log(tablero[1][1]);
//   if (!tablero[columnaMaquina][filaMaquina]) {
//     //si está libre, ponemos ficha
//     tablero[columnaMaquina][filaMaquina] = true;
//     ponerFichaMaquina();
//   } else {
//     //si no está libre, sacamos otra posicion
//     crearPosicion();
//     verificarPosicion();
//   }
// }
// function verificarPosicionUsuario() {
  

//   switch (this.id) {
//     case 1:
//       columnaJugador = 0;
//       filaJugador = 0;
//       break;
//     case 2:
//         columnaJugador = 0;
//         filaJugador = 1;
//       break;
//     case 3:
//         columnaJugador = 0;
//         filaJugador = 2;
//       break;
//     case 4:
//         columnaJugador = 1;
//         filaJugador = 0;
//       break;
//     case 5:
//         columnaJugador = 1;
//         filaJugador = 1;
//       break;
//     case 6:
//         columnaJugador = 1;
//         filaJugador = 2;
//       break;
//     case 7:
//         columnaJugador = 2;
//         filaJugador = 0;
//       break;
//     case 8:
//         columnaJugador = 2;
//         filaJugador = 1;
//       break;
//     case 9:
//         columnaJugador = 2;
//         filaJugador = 2;
//       break;
//   }
//   console.log(tablero);
// console.log(columnaJugador);
// console.log(filaJugador);

//   if (!tablero[columnaJugador][filaJugador]) {
//     //si está libre, ponemos ficha
//     tablero[columnaJugador][filaJugador] = true;
//     ponerFichaJugador();
//   } else {
//     //si no está libre, sacamos otra posicion
//     console.log("casilla ocupada. Elige otra");
//   }
// }

// function ponerFichaMaquina() {
//   var elemento = null;

//   if (columnaMaquina == 0 && filaMaquina == 0) {
//     elemento = celdasElements[1];
//   } else if (columnaMaquina == 0 && filaMaquina == 1) {
//     elemento = celdasElements[2];
//   } else if (columnaMaquina == 0 && filaMaquina == 2) {
//     elemento = celdasElements[3];
//   } else if (columnaMaquina == 1 && filaMaquina == 0) {
//     elemento = celdasElements[4];
//   } else if (columnaMaquina == 1 && filaMaquina == 1) {
//     elemento = celdasElements[5];
//   } else if (columnaMaquina == 1 && filaMaquina == 2) {
//     elemento = celdasElements[6];
//   } else if (columnaMaquina == 2 && filaMaquina == 0) {
//     elemento = celdasElements[7];
//   } else if (columnaMaquina == 2 && filaMaquina == 1) {
//     elemento = celdasElements[8];
//   } else if (columnaMaquina == 2 && filaMaquina == 2) {
//     elemento = celdasElements[9];
//   }
//   var i = document.createElement("i");
//   i.className = "fas fa-kiwi-bird";
//   i.style.fontSize = "60px";
//   i.style.color="#0F3E87";
//   elemento.appendChild(i);

//   juegaUsuario();
// }
// function ponerFichaJugador() {
//   var elemento = null;

//   if (columnaJugador == 0 && filaJugador == 0) {
//     elemento = celdasElements[1];
//   } else if (columnaJugador == 0 && filaJugador == 1) {
//     elemento = celdasElements[2];
//   } else if (columnaJugador == 0 && filaJugador == 2) {
//     elemento = celdasElements[3];
//   } else if (columnaJugador == 1 && filaJugador == 0) {
//     elemento = celdasElements[4];
//   } else if (columnaJugador == 1 && filaJugador == 1) {
//     elemento = celdasElements[5];
//   } else if (columnaJugador == 1 && filaJugador == 2) {
//     elemento = celdasElements[6];
//   } else if (columnaJugador == 2 && filaJugador == 0) {
//     elemento = celdasElements[7];
//   } else if (columnaJugador == 2 && filaJugador == 1) {
//     elemento = celdasElements[8];
//   } else if (columnaJugador == 2 && filaJugador == 2) {
//     elemento = celdasElements[9];
//   }
//   var i = document.createElement("i");
//   i.className = "fas fa-carrot";
//   i.style.fontSize = "60px";
//   i.style.color="#FF900B";
//   elemento.appendChild(i);

//   juegaUsuario();
// }

// function rellenarTablero() {
//   for (var i = 0; i < tablero.length; i++) {
//     for (var j = 0; j < tablero[i].length; j++) {
//       tablero[i][j] = false;
//     }
//   }
// }
