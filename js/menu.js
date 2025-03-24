function ajustarImagen() {
    let zoom = window.devicePixelRatio * 100; // Detecta el nivel de zoom
    let img = document.querySelector(".imgMenu");

    console.log("Zoom Detectado:", zoom + "%");

    let nuevoAncho;

    if (zoom > 175) {
        nuevoAncho = "100vw"; // 🔹 Si el zoom es mayor a 175%, ocupa toda la pantalla
    } else if (zoom > 100) {
        nuevoAncho = "75vw"; // 🔹 Entre 100% y 175%, ocupa el 75%
    } else if (zoom > 50) {
        nuevoAncho = "80vw"; // 🔹 Entre 50% y 100%, ocupa el 80%
    } else {
        nuevoAncho = "50vw"; // 🔹 Si el zoom está en 100%, ocupa el 50%
    }

    // Aplicamos transición suave con requestAnimationFrame
    requestAnimationFrame(() => {
        img.style.transition = "width 0.5s ease-in-out"; // Suaviza los cambios
        img.style.width = nuevoAncho;
    });
}

// 🔹 Detecta cambios en el zoom y ajusta la imagen
window.addEventListener("resize", ajustarImagen);
window.addEventListener("load", ajustarImagen);
