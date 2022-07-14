let total = 0;
let agregar = " ";

saludo();

function saludo() {
    let nombre = prompt("Ingrese su nombre:");

    alert(`¡Hola ${nombre}!`);

    pregunta()
}

function pregunta() {
    agregar = prompt(`¿Quiere agregar una prenda al carrito?
    Si / No`);
}
    
while (agregar == "Si" || agregar == "si" || agregar == "SI") {
    let prenda = parseInt(prompt(`¿Qué prenda quiere agregar? (Ingrese el numero)
    1) Remera - $1.500
    2) Pantalón - $7.500
    3) Campera - $15.000
    4) Pollera - $5.000`));

    if (prenda == 1) {
        total += 1500;
    }else if (prenda == 2) {
        total += 7500;
    }else if (prenda == 3) {
        total += 15000;
    }else if (prenda == 4) {
        total += 5000;
    }else {
        alert("La prenda elegida no está disponible.");
    }

    pregunta();
}

if (agregar == "No" || agregar == "no" || agregar == "NO") {
    if (total != 0) {
        alert(`Su total es $${total}.`);
    } else {
        alert("El carrito está vacío.");
    }
}