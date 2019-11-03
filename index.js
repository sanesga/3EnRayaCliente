//////////////////////////////////////////////////////////////////////////////

//VARIABLES
var celdas = new Array();  //guarda las celdas del dom
var tablero = new Array(3);
var fila1= new Array(3);
var fila2= new Array(3);
var fila3= new Array(3);

tablero=(fila1,fila2,fila3);

//REFERENCIAS
//en cada posición guardo un elemento del dom
for (var i = 1; i < 10; i++) {
  celdas[i] = document.getElementById(i);
}

//LISTENERS
for (var i = 1; i < 10; i++) {
  celdas[i].addEventListener("click", marcar);
}

/////////////////////////////////////////////////////////////////////////////

//DECIDIR QUIEN EMPIEZA (USUARIO O MÁQUINA)
var number = Math.floor(Math.random() * 2);

//juega la máquina
if (number == 0) {
  juegaMaquina();
  //juega el usuario
} else {
  juegaUsuario();
}

function juegaMaquina() {
  //bloqueamos el click para el usuario
  deshabilitarClick();

  //numero aleatorio para poner ficha
  var posicionFicha = Math.floor(Math.random() *9);
  
   

}

function juegaUsuario() {}

function marcar() {
  console.log("entra a marcar");
}
function deshabilitarClick() {
  for (var i = 1; i < 10; i++) {
    celdas[i].style.pointerEvents = "none";
  }
}
function habilitarClick() {
  for (var i = 1; i < 10; i++) {
    celdas[i].style.pointerEvents = "auto";
  }
}
