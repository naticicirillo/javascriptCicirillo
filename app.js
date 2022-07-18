let total = 0;
let agregar = " ";
let nombre = " ";
const carrito = [];

const tienda = [
    {prenda: "Sweater Amapola", precio: 25000},
    {prenda: "Camisa Perséfone", precio: 8500},
    {prenda: "Pantalón Brooklyn", precio: 11500},
    {prenda: "Pollera Allegra", precio: 9000},
    {prenda: "Abrigo Olivia", precio: 28000},
    {prenda: "Sweater India", precio: 17000},
    {prenda: "Vestido Aurora", precio: 10000},
    {prenda: "Vestido Ferraro", precio: 12500},
];

// -----------------------------------------------------------------

const productos = document.querySelector(".productos");

for (let producto of tienda) {
    let publicados = document.createElement("button");

    publicados.innerHTML = `<h1>${producto.prenda}</h1>
    <h2>$${producto.precio}</h2>`;

    productos.appendChild(publicados);
}

// -----------------------------------------------------------------

saludo();

function saludo() {
    nombre = prompt("Ingrese su nombre:");

    alert("¡Hola " + nombre.toUpperCase() + "!");

    pregunta()
}

// -----------------------------------------------------------------

let nombreCarrito = document.querySelector(".carrito");

nombreCarrito.innerHTML = `<a href="#">CARRITO DE ${nombre.toUpperCase()}</a>`;

// -----------------------------------------------------------------

function pregunta() {
    agregar = prompt(`¿Quiere agregar una prenda al carrito?\nSi / No`);
}
    
while (agregar == "Si" || agregar == "si" || agregar == "SI") {
    let prenda = parseInt(prompt(`¿Qué prenda quiere agregar? (Ingrese el número)\n1) Sweater Amapola - $25.000\n2) Camisa Perséfone - $8.500\n3) Pantalón Brooklyn - $11.500\n4) Pollera Allegra - $9.000\n5) Abrigo Olivia - $28.000\n6) Sweater India - $17.000\n7) Vestido Aurora - $10.000\n8) Vestido Ferraro - $12.500`));

    if (prenda == 1) {
        carrito.push(tienda[0]);
    }else if (prenda == 2) {
        carrito.push(tienda[1]);
    }else if (prenda == 3) {
        carrito.push(tienda[2]);
    }else if (prenda == 4) {
        carrito.push(tienda[3]);
    }else if (prenda == 5) {
        carrito.push(tienda[4]);
    }else if (prenda == 6) {
        carrito.push(tienda[5]);
    }else if (prenda == 7) {
        carrito.push(tienda[6]);
    }else if (prenda == 8) {
        carrito.push(tienda[7]);
    }else {
        alert("La prenda elegida no está disponible.");
    }

    pregunta();
}

if (agregar == "No" || agregar == "no" || agregar == "NO") {
    carrito.forEach((item) => {total += item.precio});

    if (total != 0) {
        let listaPrendas = carrito.map(item => item.prenda);

        alert(`CARRITO:\n${listaPrendas.join("\n")}\n\nTOTAL: $${total}`);
        
        let metodoPago = parseInt(prompt(`¿Con qué método de pago quiere abonar? (Ingrese el número)\n1) Tarjeta\n2) Transferencia\n3) Pago con efectivo en el local`));

        if (metodoPago == 1) {
            let titular = prompt("Ingrese el nombre del titular de la tarjeta:");
    
            let tarjeta = parseInt(prompt("Ingrese el numero de tarjeta:"));
    
            alert(`¡Su compra se ha realizado con éxito!\n\nDATOS DEL COMPRADOR\nTitular: ${titular.toUpperCase()}\nN° de tarjeta: ${tarjeta}`);
        }else if (metodoPago == 2) {
            alert(`Debe transferir $${total} al siguiente CBU antes de las 24hs, sino su compra será cancelada.\n\nCBU: XXXXXXXXXXXXXXXXXXXXXX`);
        }else if (metodoPago == 3) {
                alert(`Deberá abonar $${total} en efectivo al momento de retirar su compra.`);
        }else {
            alert(`Este método de pago no está disponible.`)
        }
    } else {
        alert(`CARRITO:\nEl carrito está vacío.`);
    }
}