//Activa la barra de navegacion en dispositivos mas pequeños
$(document).ready(function () {
    $('.sidenav').sidenav();
});


var carrito = [];

function agregarProducto() {
    //  datos del producto
    var producto = {
        imagen: "Imagenes/Ejemplo1.jpg",
        titulo: "Productos",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, quam."
    };

    // Agregar el producto al carrito
    carrito.push(producto);

    // Actualizar el contenido 
    actualizarCarrito();
}

function actualizarCarrito() {
    var carritoElemento = document.getElementById("carrito");
    carritoElemento.innerHTML = "";

    // Recorrer los productos en el carrito y mostrarlos
    for (var i = 0; i < carrito.length; i++) {
        var producto = carrito[i];

        var productoHTML = (`\
    <div class='card horizontal'>\
        <div class='card-image'>\
            <img src='${producto.imagen}' width='100px' height='100px'>\
        </div>\
        <div class='card-stacked'>\
            <div class='card-content'>\
                <h5>${producto.titulo}</h5>\
                <p>${producto.descripcion}</p>\
            </div>\
            <div class='card-action'>\
                <a href='#'><i class='material-icons purple-text' onclick='eliminarProducto(${i})'>delete</i></a>\
                </div>\
        </div>\
    </div>\
    `);

        carritoElemento.innerHTML += productoHTML;
    }
}

function eliminarProducto(index) {
    // Eliminar el producto del carrito
    carrito.splice(index, 1);

    // Actualizar el contenido del carrito
    actualizarCarrito();
}

function mostrarFormulario() {
    // Oculta los productos
    document.getElementById("productos").style.display = "none";

    // Muestra el formulario
    document.getElementById("formulario").style.display = "block";

    //Oculta el boton de confirmar
    document.getElementById("botonconfirmar").style.display = "none";
}

//Guarda el pedido
function guardarpedido(params) {
    alert("Su pedido fue guardado correctamente")
}