let total = 0;
let agregar = " ";
const carrito = [];

function Prenda(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}

const sweater1 = new Prenda("Sweater Amapola", 25000);
const camisa = new Prenda("Camisa Perséfone", 8500);
const pantalon = new Prenda("Pantalón Brooklyn", 11500);
const pollera = new Prenda("Pollera Allegra", 9000);
const abrigo = new Prenda("Abrigo Olivia", 28000);
const sweater2 = new Prenda("Sweater India", 17000);
const vestido1 = new Prenda("Vestido Aurora", 10000);
const vestido2 = new Prenda("Vestido Ferraro", 12500);

saludo();

function saludo() {
    let nombre = prompt("Ingrese su nombre:");

    alert("¡Hola " + nombre.toUpperCase() + "!");

    pregunta()
}

function pregunta() {
    agregar = prompt(`¿Quiere agregar una prenda al carrito?
    Si / No`);
}
    
while (agregar == "Si" || agregar == "si" || agregar == "SI") {
    let prenda = parseInt(prompt(`¿Qué prenda quiere agregar? (Ingrese el numero)
    1) ${sweater1.nombre} - $${sweater1.precio}
    2) ${camisa.nombre} - $${camisa.precio}
    3) ${pantalon.nombre} - $${pantalon.precio}
    4) ${pollera.nombre} - $${pollera.precio}
    5) ${abrigo.nombre} - $${abrigo.precio}
    6) ${sweater2.nombre} - $${sweater2.precio}
    7) ${vestido1.nombre} - $${vestido1.precio}
    8) ${vestido2.nombre} - $${vestido2.precio}`));

    if (prenda == 1) {
        carrito.push({producto: sweater1.nombre, precio: sweater1.precio});
    }else if (prenda == 2) {
        carrito.push({producto: camisa.nombre, precio: camisa.precio});
    }else if (prenda == 3) {
        carrito.push({producto: pantalon.nombre, precio: pantalon.precio});
    }else if (prenda == 4) {
        carrito.push({producto: pollera.nombre, precio: pollera.precio});
    }else if (prenda == 5) {
        carrito.push({producto: abrigo.nombre, precio: abrigo.precio});
    }else if (prenda == 6) {
        carrito.push({producto: sweater2.nombre, precio: sweater2.precio});
    }else if (prenda == 7) {
        carrito.push({producto: vestido1.nombre, precio: vestido1.precio});
    }else if (prenda == 8) {
        carrito.push({producto: vestido2.nombre, precio: vestido2.precio});
    }else {
        alert("La prenda elegida no está disponible.");
    }

    pregunta();
}

if (agregar == "No" || agregar == "no" || agregar == "NO") {
    carrito.forEach((item) => {total += item.precio});

    if (total != 0) {
        let listaPrendas = carrito.map(item => item.producto);

        alert(`CARRITO:\n${listaPrendas.join("\n")}\n\nTOTAL: $${total}`);
    } else {
        alert(`CARRITO:\nEl carrito está vacío.`);
    }
}