
//Boton de Clientes

var botonClientes = document.getElementById('botonClientes');
botonClientes.addEventListener("click",imprimirClientes);

function imprimirClientes(){
  //arreglo de clientes
  var catalogoClientes= JSON.parse(localStorage.getItem('catalogoClientes'));
  document.getElementById('contenedorInformacion').innerHTML=" ";

  catalogoClientes.forEach( (clienteActual,indiceActual) => {

    document.getElementById('contenedorInformacion').innerHTML+=
    `
    <div class="itemInformacion">
            <div class="titulo">
              <h2>${clienteActual.nombre} ${clienteActual.apellido}</h2>
            </div>
            <div class="descripcion">
              <ul>
                <li>Direccion: ${clienteActual.direccion}</li>
                <li>Email: ${clienteActual.email}</li>
                <li>Telefono: ${clienteActual.telefono}</li>
              </ul>
            </div>
    </div>
    `;

  });

  document.getElementById('botonClientes').classList.add("itemSeleccionado");
  document.getElementById('botonProveedores').classList.remove("itemSeleccionado");
  document.getElementById('botonCategoriasDeProductos').classList.remove("itemSeleccionado");

}

//Boton de Proveedores
var botonProveedores = document.getElementById('botonProveedores');
botonProveedores.addEventListener("click",imprimirProveedores);

function imprimirProveedores(){
  var catalogoProveedores= JSON.parse(localStorage.getItem('catalogoProveedores'));
  document.getElementById('contenedorInformacion').innerHTML=" ";

  catalogoProveedores.forEach( (proveedorActual,indiceActual) => {
    document.getElementById('contenedorInformacion').innerHTML+=
    `
    <div class="itemInformacion">
            <div class="titulo">
              <h2>${proveedorActual.razonSocial}</h2>
            </div>
            <div class="descripcion">
              <ul>
                <li>Dirección: ${proveedorActual.direccion}</li>
                <li>Email: ${proveedorActual.email}</li>
                <li>Telefono: ${proveedorActual.telefono}</li>
              </ul>
              </div>
      </div>
    `;

  });

  document.getElementById('botonClientes').classList.remove("itemSeleccionado");
  document.getElementById('botonProveedores').classList.add("itemSeleccionado");
  document.getElementById('botonCategoriasDeProductos').classList.remove("itemSeleccionado");

}

//Boton de Categorías de productos
let botonCategoriasProductos = document.getElementById('botonCategoriasDeProductos');
botonCategoriasProductos.addEventListener("click", imprimirCategoriasProductos);

function imprimirCategoriasProductos(){
  var catalogoCategoriasProductos= JSON.parse(localStorage.getItem('catalogoCategoriasProductos'));
  document.getElementById('contenedorInformacion').innerHTML=" ";

  catalogoCategoriasProductos.forEach( (categoriaActual,indiceActual) => {
    let txt = "";
    for (let x in categoriaActual.productos) {
      txt += categoriaActual.productos[x].nombre + ", cantidad: "+categoriaActual.productos[x].unidades + "<br>";
    }

    document.getElementById('contenedorInformacion').innerHTML+=
    `
    <div class="itemInformacion">
            <div class="titulo">
              <h2>${categoriaActual.nombreCategoria}</h2>
            </div>
            <div class="descripcion">
                ${txt}
              </div>
      </div>
    `;

  });
  document.getElementById('botonClientes').classList.remove("itemSeleccionado");
  document.getElementById('botonProveedores').classList.remove("itemSeleccionado");
  document.getElementById('botonCategoriasDeProductos').classList.add("itemSeleccionado");
}

document.addEventListener('DOMContentLoaded', function () {
  imprimirCategoriasProductos();
  verificarAbastecimiento();
});

function verificarAbastecimiento(){
  //arreglo de categorías
  let catalogoCategoriasProductos = JSON.parse(localStorage.getItem('catalogoCategoriasProductos'));
  let productosEscasos = [];
  let txt="";
  let indice = 1;
  catalogoCategoriasProductos.forEach((categoriaActual, indiceActual) => {
    for (const x in categoriaActual.productos) {
      //Si unidades <= cantidad minima
      if (categoriaActual.productos[x].unidades<=categoriaActual.productos[x].cantidadMinimaDisponibleInventario) {

         txt+="<tr><th scope='row'>"+indice+"</th>"+"<td>"+categoriaActual.productos[x].nombre+"</td>"+"<td>"+categoriaActual.productos[x].unidades+"</td>"+"<td>"+categoriaActual.productos[x].cantidadMinimaDisponibleInventario+"</td>"+"</tr>";
         indice++;
      }
    }
  });
  if(txt==""){
    txt=`<tr><td colspan="3">No hay productos escasos.</td></tr>`;
  }
  document.getElementById('tabla1').innerHTML=" ";
  document.getElementById('tabla1').innerHTML=
  `<table class="table table-dark table-striped">
       <tr>
         <th scope="col">#</th>
         <th scope="col">Productos</th>
         <th scope="col">Cantidad</th>
         <th scope="col">Cantidad mínima</th>
       </tr>
       ${txt}
     </table>
 `;

}
