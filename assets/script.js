const productos = [
    { id: 1, nombre: "Bubambilia Amarilla", precio: 10000, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkIVBj8gmsfA76DddUwstiUPUpC5BSHCDolQ&s" },
    { id: 2, nombre: "Bugambilia Burdeo", precio: 15000, img: "https://plantket.cl/plantket-cl/888-medium_default/bouganvillea-pie-alto.jpg" },
    { id: 3, nombre: "Bugambilia Café", precio: 20000, img: "https://www.shutterstock.com/image-photo/close-orange-bouganvilla-flowers-bush-260nw-1689456745.jpg" }
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

function agregarAlCarrito() {
    let cuenta = parseInt(localStorage.getItem('cartCount')) || 0;
    cuenta++;
    localStorage.setItem('cartCount', cuenta);
    actualizarContador();
}

function actualizarContador() {
    let cuenta = localStorage.getItem('cartCount') || 0;
    $('#cart-count').text(cuenta);
}