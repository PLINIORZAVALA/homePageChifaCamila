/* Ajsutes para la imagen principal*/

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
        nuevoAncho = "20vw"; // 🔹 Si el zoom está en 100%, ocupa el 50%
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

function ajustarImagen() {
    const imagen = document.querySelector('.imagen-principal'); // Asegúrate de tener esta clase en tu imagen
    const pageWidth = window.innerWidth;
    const pageHeight = window.innerHeight;
    const maxWidth = pageWidth * 1.4; // 40% más grande que el ancho de la página
    const maxHeight = pageHeight * 1.4; // 40% más grande que el alto de la página
    
    // Obtiene el tamaño actual de la imagen
    const currentWidth = imagen.offsetWidth;
    const currentHeight = imagen.offsetHeight;
    
    // Limita el tamaño máximo
    if (currentWidth > maxWidth || currentHeight > maxHeight) {
        imagen.style.maxWidth = `${maxWidth}px`;
        imagen.style.maxHeight = `${maxHeight}px`;
    }
}

// 🔹 Detecta cambios en el zoom y ajusta la imagen
window.addEventListener("resize", ajustarImagen);
window.addEventListener("load", ajustarImagen);

function ajustarImagen() {
    const imagen = document.querySelector('.imagen-principal'); // Asegúrate de tener esta clase en tu imagen
    const pageWidth = window.innerWidth;
    const pageHeight = window.innerHeight;
    const maxWidth = pageWidth * 1.4; // 40% más grande que el ancho de la página
    const maxHeight = pageHeight * 1.4; // 40% más grande que el alto de la página
    
    // Obtiene el tamaño actual de la imagen
    const currentWidth = imagen.offsetWidth;
    const currentHeight = imagen.offsetHeight;
    
    // Limita el tamaño máximo
    if (currentWidth > maxWidth || currentHeight > maxHeight) {
        imagen.style.maxWidth = `${maxWidth}px`;
        imagen.style.maxHeight = `${maxHeight}px`;
    }
}

/* Ajustes para el texto de la imagen principal*/
function ajustarTextoZoom() {
    const zoom = window.devicePixelRatio * 100;
    const texto = document.querySelector('.menuTexBoder');
    const pageWidth = window.innerWidth;
    
    console.log("Zoom actual:", zoom + "%");

    if (zoom > 110) {
        texto.style.display = 'none'; // Desaparece si zoom > 110%
    } else {
        texto.style.display = 'block';
        
        // Ajuste proporcional del tamaño con límite del 40%
        const escala = Math.min(1.4, 1 - ((110 - zoom) * 0.01)); // No superar 1.4 (40%)
        const nuevoAncho = Math.min(500 * escala, pageWidth * 0.7); // 70% del ancho de página como máximo
        const nuevoPadding = 25 * escala;
        
        texto.style.width = `${nuevoAncho}px`;
        texto.style.padding = `${nuevoPadding}px ${40 * escala}px`;
        texto.style.fontSize = `${20 * escala}px`;
        
        // Posicionamiento relativo al zoom
        const offsetX = 300 * escala;
        const offsetY = 650 * escala;
        
        texto.style.left = `${offsetX}px`;
        texto.style.top = `${offsetY}px`;
        
        // Ajuste de distancia al ángulo
        texto.style.transform = `translate(-${30 * escala}%, -${30 * escala}%)`;
    }
}

window.addEventListener('resize', ajustarTextoZoom);
window.addEventListener('load', ajustarTextoZoom);