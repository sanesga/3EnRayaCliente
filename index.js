//////////////////////////////////////////////////////////////////////////////

//VARIABLES
var celdas = new Array();  //guarda las celdas del dom
var tablero = new Array(2);
var celdas = new Array(3);

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

tablero[0]=celdas;
tablero[1] = celdas;
tablero [2]= celdas;

rellenarTablero();


console.log(tablero);



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
  var columna = Math.floor(Math.random() *3);
  var fila = Math.floor(Math.random() *3);

  verificarPosicion();

  

   

}

function juegaUsuario() {}

function marcar() {
  console.log("entra a marcar");
}
function deshabilitarClick() {
  for (var i = 1; i < celdas.length; i++) {
    celdas[i].style.pointerEvents = "none";
  }
}
function habilitarClick() {
  for (var i = 1; i < celdas.length; i++) {
    celdas[i].style.pointerEvents = "auto";
  }
}
function verificarPosicion(){
  for (var i = 0; i < tablero.length; i++) {
    
  }
}
function rellenarTablero(){
  for (var i = 0; i < tablero.length; i++) {
    for(var j=0 ; i <tablero[i].length;j++){
      tablero[i][j]=false;
    }
  }
}
