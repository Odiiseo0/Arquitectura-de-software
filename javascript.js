function pedir(producto){

    const numero = "5218112345678";

    const mensaje =
    `Hola, me interesa el producto: ${producto}`;

    const url =
    `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank");
}
