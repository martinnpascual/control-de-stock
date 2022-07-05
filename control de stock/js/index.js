document.addEventListener('DOMContentLoaded', function () {

    //Creamos los arreglos que van a actuar como el "valor" de las parejas clave-valor
    var usuarios = [];

    let admin = {
      usuario:"admin",
      email:"admin@gmail.com",
      password:1234,
      rol:"administrador",
      logueado:0
    };

    let operario = {
      usuario:"user",
      email:"user@gmail.com",
      password:1234,
      rol:"operario",
      logueado:0
    };

    usuarios.push(admin, operario);
    localStorage.setItem("usuarios",JSON.stringify(usuarios));

});

function validarFormulario() {

  let mensaje = document.getElementById('mensaje');
  let usuariosAlmacenados = JSON.parse(localStorage.getItem("usuarios"));
  let usuario = document.forms["formulario"]["usuario"].value;
  let contraseñaCapturada = document.forms["formulario"]["contrasenia"].value;
  for (var x in usuariosAlmacenados ) {
      if((usuariosAlmacenados[x].usuario == usuario) && (usuariosAlmacenados[x].password == contraseñaCapturada)){
        mensaje.classList.add("d-none");
        usuariosAlmacenados[x].logueado=1;
        localStorage.setItem("usuarios",JSON.stringify(usuariosAlmacenados));
      return true;
      }
  }
  mensaje.classList.add("active");
  return false;
}

function quitarAlerta() {
  let mensaje = document.getElementById('mensaje');
  mensaje.classList.remove("active");
}
