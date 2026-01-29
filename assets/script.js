const productos = [
    { id: 1, nombre: "Producto A", precio: 10000, img: "https://via.placeholder.com/150" },
    { id: 2, nombre: "Producto B", precio: 15000, img: "https://via.placeholder.com/150" },
    { id: 3, nombre: "Producto C", precio: 20000, img: "https://via.placeholder.com/150" }
];

$(document).ready(function() {
    renderizarProductos();
    actualizarContador();
});

function renderizarProductos() {
    productos.forEach(p => {
        $('#productos').append(`
            <div class="col-md-4 mb-4">
                <div class="card h-100">
                    <img src="${p.img}" class="card-img-top" alt="${p.nombre}">
                    <div class="card-body">
                        <h5 class="card-title">${p.nombre}</h5>
                        <p class="card-text">$${p.precio}</p>
                        <a href="producto.html?id=${p.id}" class="btn btn-primary">Ver más</a>
                        <button class="btn btn-success" onclick="agregarAlCarrito()">Agregar</button>
                    </div>
                </div>
            </div>
        `);
    });
}