var miVariable =5;
var campoTexto = document.getElementById("myTXT");
var texto="";

function miFuncion(myTXT){
    texto= campoTexto.value;
    alert(texto);
}

function borrar(myTXT){
    document.getElementById("myTXT").value="";
}

function color(){
    let rojo= Math.floor(Math.random() *256);
    let verde= Math.floor(Math.random() *256);
    let azul= Math.floor(Math.random() *256);
    let colorFondo ="rgb("+rojo+","+verde+","+azul+")";
    document.getElementById("Body").style.backgroundColor=colorFondo;

}