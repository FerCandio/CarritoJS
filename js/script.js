const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");
const cantidadCarrito = document.getElementById("cantidadCarrito");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

productos.forEach((product) =>{
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
    <img class="product__img" src="${product.img}">
    <h3 class="product__nombre"> ${product.nombre}</h3>
    <p class="price"> US$${product.precio} </p>
    `;

    shopContent.append(content);

    let comprar = document.createElement("button");
    comprar.className = "comprar";
    comprar.innerText = "Comprar";
    
    content.append(comprar);

    comprar.addEventListener("click", () => {
        const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id);

        Swal.fire({
            title: "Genial!",
            text: "Haz agregado un producto al carrito",
            icon: "success",
            confirmButtonText: "Ok",
        });

        if (repeat){
            carrito.map((prod) => {
                if(prod.id === product.id){
                    prod.cantidad++;
                };
            });
        } else {
            carrito.push({
                id: product.id,
                img: product.img,
                nombre: product.nombre,
                precio: product.precio,
                cantidad: product.cantidad,
            });
        };

        console.log(carrito);
        carritoCounter();
        saveLocal();
    });
});

// set item

const saveLocal = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
};

// get item

JSON.parse(localStorage.getItem("carrito"));

// Fetch

let galeria__contenedor = document.getElementById("galeria__contenedor");

fetch("./data.json")
.then(response => response.json())
.then(data => {
    data.forEach(item =>{
        let div = document.createElement("div");
        div.className = "galeriadiv";
        div.innerHTML = `
            <h2 class="galeria__nombre">${item.nombre}</h2>
            <img class="galeria__img" src="${item.img}">
        `;

        galeria__contenedor.append(div);
    });
});






















































