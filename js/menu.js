function ajustarImagen() {
    let zoom = window.devicePixelRatio * 100; // Detecta el nivel de zoom
    let img = document.querySelector(".imgMenu");

    console.log("Zoom Detectado:", zoom + "%");

    if (zoom > 175) {
        img.style.width = "100vw"; // 🔹 Si el zoom es mayor a 175%, ocupa toda la pantalla
        img.style.height = "100vh";
        img.style.objectFit = "cover";
    } else if (zoom > 100) {
        img.style.width = "75vw"; // 🔹 Entre 100% y 175%, ocupa el 75%
    } else if (zoom > 50) {
        img.style.width = "80vw"; // 🔹 Entre 50% y 100%, ocupa el 80%
    } else {
        img.style.width = "50vw"; // 🔹 Si el zoom está en 100%, ocupa el 50%
    }
}

/* Detecta cambios en el zoom y ajusta la imagen */
window.addEventListener("resize", ajustarImagen);
window.addEventListener("load", ajustarImagen);
