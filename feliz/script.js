// Array con las imágenes de fondo
const imagenesFondo = [
    'imagenes/imagen1.jpg', // Primera imagen
    'imagenes/imagen2.jpg', // Segunda imagen
    'imagenes/imagen3.jpg'  // Tercera imagen
];

let indiceActual = 0; // Índice para saber qué imagen mostrar

// Función para cambiar el fondo
function cambiarFondo() {
    const body = document.querySelector('body');
    
    // Cambia la imagen de fondo
    body.style.backgroundImage = `url('${imagenesFondo[indiceActual]}')`;

    // Incrementa el índice para mostrar la siguiente imagen
    indiceActual = (indiceActual + 1) % imagenesFondo.length; // Ciclo infinito
}

// Cambia el fondo cada 10 segundos (10000 ms)
setInterval(cambiarFondo, 10000);

// Llama a la función inmediatamente para mostrar la primera imagen
cambiarFondo();

// Función para mostrar rosas cayendo (sin cambios)
function mostrarRosas() {
    const rosaContainer = document.getElementById("rosa-container");

    // Crear múltiples rosas que caerán
    for (let i = 0; i < 50; i++) { // Crea 30 rosas
        const rosa = document.createElement("div");
        rosa.classList.add("rosa");

        // Añadir la imagen de la rosa
        const imgRosa = document.createElement("img");
        imgRosa.src = "imagenes/ROSAS2.PNG"; // Ruta de la imagen de la rosa
        imgRosa.style.width = "100%"; // Ajuste para que ocupe el contenedor de la rosa

        // Agregar la imagen dentro del contenedor .rosa
        rosa.appendChild(imgRosa);

        // Posición aleatoria en la pantalla
        rosa.style.left = Math.random() * 100 + "vw"; // Entre 0 y 100vw
        rosa.style.animationDelay = Math.random() * 5 + "s"; // Retraso aleatorio para la caída

        // Añadir la rosa al contenedor principal
        rosaContainer.appendChild(rosa);
    }
}
function createFirework() {
    const fireworkContainer = document.querySelector('.fireworks');
    const firework = document.createElement('div');
    firework.classList.add('firework');

    // Posición aleatoria del fuego artificial
    firework.style.left = Math.random() * 100 + 'vw';
    firework.style.top = Math.random() * 50 + 'vh';

    fireworkContainer.appendChild(firework);

    // Elimina el fuego artificial después de la explosión
    setTimeout(() => {
        firework.remove();
    }, 1500); // 1.5 segundos para la explosión
}

// Crea fuegos artificiales al hacer clic en la pantalla
document.addEventListener('click', createFirework);
// Función para generar fuegos artificiales
function createFirework(event) {
    const fireworkContainer = document.querySelector('.fireworks-container');

    // Crear múltiples partículas
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.classList.add('firework-particle');

        // Colores aleatorios
        const colors = ['#ff0', '#f00', '#0f0', '#00f', '#f0f', '#0ff', '#ff8000'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        particle.style.backgroundColor = color;

        // Posición inicial en el lugar del click
        particle.style.left = event.clientX + 'px';
        particle.style.top = event.clientY + 'px';

        // Dirección aleatoria (usamos variables CSS para el movimiento)
        const angle = Math.random() * 360;
        const distance = Math.random() * 100 + 50; // Distancia aleatoria
        particle.style.setProperty('--x', Math.cos(angle) * distance + 'px');
        particle.style.setProperty('--y', Math.sin(angle) * distance + 'px');

        fireworkContainer.appendChild(particle);

        // Eliminar la partícula después de la explosión
        setTimeout(() => {
            particle.remove();
        }, 1500); // 1.5 segundos para la animación
    }
}
// Función para crear fuegos artificiales
function crearFuegosArtificiales() {
    const fireworkContainer = document.querySelector('.fireworks-container');

    for (let i = 0; i < 100; i++) { // Aumentar el número de partículas
        const particle = document.createElement('div');
        particle.classList.add('firework-particle');
        
        // Colores aleatorios
        const colors = ['#ff0', '#f00', '#0f0', '#00f', '#f0f', '#0ff', '#ff8000'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        particle.style.backgroundColor = color;

        // Posición inicial aleatoria en la pantalla
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.top = Math.random() * 100 + 'vh';

        // Dirección aleatoria de las partículas
        const angle = Math.random() * 360;
        const distance = Math.random() * 200 + 100; // Aumentar la distancia para fuegos artificiales más grandes
        particle.style.setProperty('--x', Math.cos(angle) * distance + 'px');
        particle.style.setProperty('--y', Math.sin(angle) * distance + 'px');

        fireworkContainer.appendChild(particle);

        // Eliminar la partícula después de la explosión
        setTimeout(() => {
            particle.remove();
        }, 4000); // Duración de la animación de fuegos artificiales aumentada
    }
}

// Crea fuegos artificiales al hacer clic en la pantalla
document.addEventListener('click', (event) => {
    crearFuegosArtificiales(event);
});



