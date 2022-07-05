
//preguntamos si el localStorage esta vacio

if(localStorage.getItem('catalogoCategoriasProductos') === null){

  var catalogoClientes = [];
  var catalogoProveedores = [];
  var catalogoCategoriasProductos = [];

  //----------------Creacion de clientes:------------------------------------------//

  var cliente1 = {
    nombre:"Lucas",
    apellido:"Salomon",
    direccion:"Calle 1234",
    email:"salomon@gmail.com",
    telefono:"03817788123"
  };
  var cliente2 = {
    nombre:"Martin",
    apellido:"Pascual",
    direccion:"Calle 3210",
    email:"martin@gmail.com",
    telefono:"03815679985"
  };
  var cliente3 = {
    nombre:"Facundo",
    apellido:"Carello",
    direccion:"Calle 5678",
    email:"carello@gmail.com",
    telefono:"03815789654"
  };

  //Guardamos los clientes en el array vacío
  catalogoClientes.push(cliente1,cliente2,cliente3);

  //Metemos el contenido del array en el localStorage con la clave catalogoClientes
  localStorage.setItem('catalogoClientes',JSON.stringify(catalogoClientes));

  //--------------------Creacion de Proveedores-------------------------------------
  var proveedor1 = {
    nombre:"Arcor",
    razonSocial:"ARCOR S.A.I.C.",//razon social
    direccion:"Av. Fulvio S. Pagani 487",
    email:"arcorAR@gmail.com",
    telefono:"08003333033"
  };

  var proveedor2 = {
    nombre:"Felfort",
    razonSocial:"La Delicia Felipe Fort S.A",//razon social
    direccion:"Gascon 329",
    email:"felfort@gmail.com",
    telefono:"01152980000"
  };

  //Guardammos los proveedores en el array vacío
  catalogoProveedores.push(proveedor1,proveedor2);

   //Metemos el contenido del array en el localStorage con la clave catalogoClientes
  localStorage.setItem('catalogoProveedores',JSON.stringify(catalogoProveedores));

  //----------------creando catalogo de Categorías de Productos-----------------//

  //objetos que irán dentro del arreglo principal, tendrán 2 parámetros: el nombre de la categoría y un arreglo interno de productos inicialmente vacío//

  var categoria1 = {
    nombreCategoria:"Gomitas",
    productos:[]
  };
  var categoria2 = {
    nombreCategoria: "Alfajores",
    productos: []
  }
  var categoria3 = {
    nombreCategoria: "Chocolates",
    productos:[]
  }
  var categoria4 = {
    nombreCategoria: "Snacks",
    productos:[]
  }

  //Agregamos los objetos categoria a un array  
  catalogoCategoriasProductos.push(categoria1,categoria2,categoria3,categoria4);

  //Creando los productos que van a ir dentro de los arrays internos de productos para cada categoria

  //Gomitas

  var Gomitas1 = {
    codigo:"11850734011",
    nombre:"Mogul Conitos 220g",
    categoria:"Gomitas",
    descripcion:"Gomitas mogul en forma de Conitos de 220g",
    precioEntradas:200,
    precioSalidas:300,
    unidades:20,
    cantidadMinimaDisponibleInventario:5
  };

  var Gomitas2 = {
    codigo:"11850718023",
    nombre:"Mogul Oso Extreme 200g",
    categoria:"Gomitas",
    descripcion:"Gomitas Mogul extreme en forma de osos 200g",
    precioEntradas:170,
    precioSalidas:250,
    unidades:30,
    cantidadMinimaDisponibleInventario:5
  };

  var Gomitas3 = {
    codigo:"11850734009",
    nombre:"Gomitas Mogul Anillos 220g",
    categoria:"Gomitas",
    descripcion:"Gomitas mogul con forma de anillos 220g",
    precioEntradas:200,
    precioSalidas:300,
    unidades:40,
    cantidadMinimaDisponibleInventario:3
  };
  //--------------

  //Los Alfajores
  var Alfajores1 = {
    codigo:"22850764009",
    nombre:"Pack Alfajores Mini Jorgito Chocolate x6u",
    categoria:"Alfajores",
    descripcion:"Pack de alfajores mini jorgito de Chocolate x6u",
    precioEntradas:150,
    precioSalidas:220,
    unidades:20,
    cantidadMinimaDisponibleInventario:5
  };
  
  var Alfajores2 = {
    codigo:"2850864009",
    nombre:"Alfajor Cachafaz Chocolate 60g",
    categoria:"Alfajores",
    descripcion:"Alfojor Cachafaz Chocolate de 60g",
    precioEntradas:90,
    precioSalidas:140,
    unidades:30,
    cantidadMinimaDisponibleInventario:7
  };

  var Alfajores3 = {
    codigo:"3850864009",
    nombre:"Guaymallen Chocolate 38g",
    categoria:"Alfajores",
    descripcion:"Alfajor Guaymallen Chocolate x38g",
    precioEntradas:25,
    precioSalidas:40,
    unidades:100,
    cantidadMinimaDisponibleInventario:10
  };
  //--------------

  //Chocolates

  var Chocolates1 = {
    codigo:"4050865609",
    nombre:"Nugaton 27g",
    categoria:"Chocolates",
    descripcion:"Oblea Nugaton de leche de Bonafide de 27g",
    precioEntradas:30,
    precioSalidas:50,
    unidades:25,
    cantidadMinimaDisponibleInventario:10
  };

  var Chocolates2 = {
    codigo:"4844665609",
    nombre:"Caja Ferrero Rocher x8u",
    categoria:"Chocolates",
    descripcion:"Caja de chocolates Ferrero Rocher x8u",
    precioEntradas:550,
    precioSalidas:700,
    unidades:10,
    cantidadMinimaDisponibleInventario:3
  };

  //Snacks

  var Snacks1 = {
    codigo:"8744665609",
    nombre:"Doritos Queso 45g",
    categoria:"Snacks",
    descripcion:"Doritos con sabor a queso de 45g",
    precioEntradas:140,
    precioSalidas:190,
    unidades:10,
    cantidadMinimaDisponibleInventario:5
  };

  var Snacks2 = {
    codigo:"874487609",
    nombre:"Cheetos 47g",
    categoria:"Snacks",
    descripcion:"Chizitos Cheetos con sabor a queso de 47g",
    precioEntradas:120,
    precioSalidas:159.20,
    unidades:40,
    cantidadMinimaDisponibleInventario:10
  };

  var Snacks3 = {
    codigo:"904487609",
    nombre:"Pringles Cebolla 71g",
    categoria:"Snacks",
    descripcion:"Papas Pringles con sabor a Cebolla de 71g",
    precioEntradas:300,
    precioSalidas:370,
    unidades:20,
    cantidadMinimaDisponibleInventario:7
  };

  var Snacks4 = {
    codigo:"304487609",
    nombre:"Rex en Sobre 75g",
    categoria:"Snacks",
    descripcion:"Galletitas Rex en sobre sabor original de 75g",
    precioEntradas:70,
    precioSalidas:120,
    unidades:7,
    cantidadMinimaDisponibleInventario:5
  };

  //-------------
  
  //Ahora lo que sigue es introducir estos objetos de productos, dentro de los arreglos internos de cada categoria, pero hay que recordar que cada categoria está almacenado en el arreglo "catalogoCategoriasProductos", lo que se muestra a continuación es una forma de buscar dentro del arreglo "catalogoCategoriasProductos" al objeto que cumpla la condición que se establezca, en este caso se evalua el nombre de la categoria.

  var categoriaEncontrada = catalogoCategoriasProductos.find(element => element.nombreCategoria=="Gomitas");
  categoriaEncontrada.productos.push(Gomitas1,Gomitas2,Gomitas3);

  //En este caso que acaba de ocurrir, la variable categoriaEncontrada equivale a catalogoCategoriasProductos[0], y están directamente conectados, es decir, lo que se modifique en la variable categoriaEncontrada, se modificará en catalogoCategoriasProductos[0], por ese motivo, los objetos de producto televisores1, televisores 2 y televisores 3 quedan guardados en catalogoCategoriasProductos[0] que corresponde a Televisores.

  categoriaEncontrada = catalogoCategoriasProductos.find(element => element.nombreCategoria=="Alfajores");
  categoriaEncontrada.productos.push(Alfajores1,Alfajores2,Alfajores3);

  categoriaEncontrada = catalogoCategoriasProductos.find(element => element.nombreCategoria=="Chocolates");
  categoriaEncontrada.productos.push(Chocolates1,Chocolates2);

  categoriaEncontrada = catalogoCategoriasProductos.find(element => element.nombreCategoria=="Snacks");
  categoriaEncontrada.productos.push(Snacks1,Snacks2,Snacks3,Snacks4);

  localStorage.setItem('catalogoCategoriasProductos',JSON.stringify(catalogoCategoriasProductos));

}
