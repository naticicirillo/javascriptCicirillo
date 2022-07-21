// -- VARIABLES ---------------------------------------------------------

const carrito = document.querySelector("#carrito");
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.querySelector("#vaciar-carrito");
const listaPrendas = document.querySelector(".productos");
let articulosCarrito = [];

cargarEventListeners();

function cargarEventListeners() {
    // Agregar prenda al carrito
    listaPrendas.addEventListener("click", agregarPrenda);

    // Eliminar prenda del carrito
    carrito.addEventListener("click", eliminarPrenda);

    // Vaciar carrito
    vaciarCarritoBtn.addEventListener("click", () => {
        articulosCarrito = [];

        limpiarHTML();
    });
}

// -- FUNCIONES ---------------------------------------------------------

// A través del boton podemos acceder a la prenda seleccionada
function agregarPrenda(e) {
    e.preventDefault();

    if (e.target.classList.contains("agregar-carrito")) {
        const prendaSeleccionada = e.target.parentElement;
        leerDatosPrenda(prendaSeleccionada);
    }
}

// Eliminar prenda del carrito
function eliminarPrenda(e) {
    e.preventDefault();

    if (e.target.classList.contains("borrar-prenda")) {
        const prendaID = e.target.getAttribute("id");

        // Eliminar prenda del arreglo de articulosCarrito por el ID
        articulosCarrito = articulosCarrito.filter((prenda) => prenda.id !== prendaID);

        carritoHTML();
    }
}

// Lee los datos del prenda seleccionado y los extrae
function leerDatosPrenda(prenda) {
    const infoPrenda = {
        imagen: prenda.querySelector("img").src,
        titulo: prenda.querySelector("section div h1").innerText,
        precio: prenda.querySelector("section div h2").innerText,
        id: prenda.querySelector("section div a").getAttribute("id"),
        cantidad: 1,
    };

    // Revisa si un elemento ya existe en el carrito
    const existe = articulosCarrito.some((prenda) => prenda.id === infoPrenda.id);

    if (existe) {
        // Actualiza la cantidad
        const prendas = articulosCarrito.map((prenda) => {
            if (prenda.id === infoPrenda.id) {
                prenda.cantidad++;
                return prenda; // Retorna objeto actualizado
            }else {
                return prenda; // Retorna los objetos que no son duplicados
            }
        });

        articulosCarrito = [...prendas];
    } else {
        // Agrega elementos al arreglo del carrito
        articulosCarrito = [...articulosCarrito, infoPrenda];
    }

    carritoHTML();
}

// Muestra el carrito en el HTML
function carritoHTML() {
    // Limpia el HTML
    limpiarHTML();

    //Recorre el carrito y genera el HTML
    articulosCarrito.forEach((prenda) => {
        const row = document.createElement("tr");
        row.innerHTML = `<td>${prenda.cantidad}</td>
        <td>${prenda.titulo}</td>
        <td>${prenda.precio}</td>
        <td>
        <a href="" class="borrar-prenda" id="${prenda.id}">X</a>
        </td>`;

        // Agrega el HTML del carrito en el tbody
        contenedorCarrito.appendChild(row);
    });
}

// Elimina los prendas del HTML
function limpiarHTML() {
    contenedorCarrito.innerHTML = "";
}