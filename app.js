let total = 0;
let agregar = " ";
const carrito = [];

function Prenda(nombre, categoria, precio) {
    this.nombre = nombre;
    this.categoria = categoria;
    this.precio = precio;
}

const sweater1 = new Prenda("Sweater Amapola", "Sweaters", 25000);
const camisa = new Prenda("Camisa Perséfone", "Camisas", 8500);
const pantalon = new Prenda("Pantalón Brooklyn", "Pantalones", 11500);
const pollera = new Prenda("Pollera Allegra", "Polleras", 9000);
const abrigo = new Prenda("Abrigo Olivia", "Abrigos", 28000);
const sweater2 = new Prenda("Sweater India", "Sweaters", 17000);
const vestido1 = new Prenda("Vestido Aurora", "Vestidos", 10000);
const vestido2 = new Prenda("Vestido Ferraro", "Vestidos", 12500);

saludo();

function saludo() {
    let nombre = prompt("Ingrese su nombre:");

    alert("¡HOLA " + nombre.toUpperCase() + "!");

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
        total += sweater1.precio;
        carrito.push(sweater1.nombre);
    }else if (prenda == 2) {
        total += camisa.precio;
        carrito.push(camisa.nombre);
    }else if (prenda == 3) {
        total += pantalon.precio;
        carrito.push(pantalon.nombre);
    }else if (prenda == 4) {
        total += pollera.precio;
        carrito.push(pollera.nombre);
    }else if (prenda == 5) {
        total += abrigo.precio;
        carrito.push(abrigo.nombre);
    }else if (prenda == 6) {
        total += sweater2.precio;
        carrito.push(sweater2.nombre);
    }else if (prenda == 7) {
        total += vestido1.precio;
        carrito.push(vestido1.nombre);
    }else if (prenda == 8) {
        total += vestido2.precio;
        carrito.push(vestido2.nombre);
    }else {
        alert("La prenda elegida no está disponible.");
    }

    pregunta();
}

if (agregar == "No" || agregar == "no" || agregar == "NO") {
    if (total != 0) {
        alert(`CARRITO:\n${carrito.join("\n")}\nTOTAL: $${total}`);
    } else {
        alert(`CARRITO:\nEl carrito está vacío.`);
    }
}