/*document.addEventListener('DOMContentLoaded', function () {

let usuarios = JSON.parse(localStorage.getItem("usuarios"));
let usuarioEncontrado = usuarios.find(element => element.logueado==1);
if (usuarioEncontrado.rol == "operario") {
  bloqueadas=document.querySelectorAll(".rol");
  bloqueadas.forEach((item, i) => {
    item.classList.add("d-none");
  });
  if (document.getElementById("botonAbastecer")) {
    // Deshabilitar boton de abastecer al ser operario
    document.getElementById('botonAbastecer').disabled=true;
  }
  
}
//----------------------------------------------------
});*/
