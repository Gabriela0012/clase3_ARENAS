class Producto {
  constructor(nombre, precio, talle) {
    this.nombre  = nombre.toUpperCase();
    this.precio  = parseFloat(precio);
    this.talle =  parseInt(talle);
  }
  
}

let producto1 = new Producto("mini gris", "1580", "40");
let producto2 = new Producto("mini negro", "1500", "42");
let producto3 = new Producto("short blanco", "1700", "44");
let producto4 = new Producto("jean", "2500", "38");
let descuento = (0.10);

// funciones
const precioTotal = function (precioUnidad, cantidad) {
  return (precioUnidad * cantidad)
}

const precioConDescuento = function (precioUnidad, descuento) {
  return ((precioUnidad * cantidad) - (precioUnidad * cantidad * descuento))
}

do {
  producto = prompt("Que producto desea?\n Descripción del producto: NOMBRE, PRECIO, TALLE.\n1. Mini gris, 1580, 40 \n2. Mini negro, 1500, 42 \n3. Short blanco, 1700, 44\n 4. jean, 2500, 38")
  while (producto != 1 && producto != 2 && producto != 3 && producto != 4);
  
  cantidad = parseInt(prompt("Cuántas unidades del producto desea?"));

  switch (producto){
    case "producto1":
    case "1":
      precioUnidad = producto1.precio;
      producto = "MINI GRIS";
      break;
    case "producto2":
    case "2":
      precioUnidad = producto2.precio;
      producto = "MINI NEGRO";
      break;
    case "producto3":
    case "3":
      precioUnidad = producto3.precio;
      producto = "SHORT BLANCO";
      break;
    case "producto4":
    case "4":
      precioUnidad = producto4.precio;
      producto = "JEAN";
      break;
    
  }
  
  cupon = prompt("Ingrese su código para hacer el descuento, sino desea del escuento ingrese NO")
  if (cupon == "BIENVENIDO10"){

    alert("El total de su compra con el descuento es de $" + precioConDescuento(precioUnidad,descuento) + "\n"+ producto + " x " + cantidad + " unidades");
    
  } else {
    alert("El total de su compra sin descuento es de $" + precioTotal(precioUnidad, cantidad) + "\n"+ producto + " x " + cantidad + " unidades");
  }

  volverAComprar = prompt("Deseas volver a comprar? SI/NO")
} while (volverAComprar == "SI");

