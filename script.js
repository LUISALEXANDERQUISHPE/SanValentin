document.addEventListener('DOMContentLoaded', () => {
    const heartsContainer = document.getElementById('hearts-container');
    const btnSi = document.querySelector('.btn-si');
    const btnDownload = document.querySelector('.btn-download');
    const botonNo = document.getElementById("botonNo");

    if (!heartsContainer || !btnSi || !btnDownload || !botonNo) {
        console.error('No se encontraron todos los elementos necesarios');
        return;
    }

    function createHeart() {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = `${Math.random() * 2 + 3}s`; // Duración entre 3 y 5 segundos
        heart.style.fontSize = `${Math.random() * 20 + 10}px`; // Tamaño entre 20px y 40px
        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    // Crear corazones más frecuentemente
    setInterval(createHeart, 500); // Cambiado de 500ms a 200ms

    btnSi.addEventListener('click', () => {
        // Mostrar el botón de descarga
        btnDownload.style.display = "block";
    });
  
});
document.addEventListener('DOMContentLoaded', () => {
    const botonNo = document.getElementById("botonNo");

    if (!botonNo) {
        console.error('No se encontró el botón "No"');
        return;
    }

    botonNo.addEventListener('mouseover', (e) => {
        // Calcular nuevas coordenadas aleatorias
        const x = Math.random() * (window.innerWidth - e.target.offsetWidth);
        const y = Math.random() * (window.innerHeight - e.target.offsetHeight);

        // Aplicar posición fija y mover el botón
        botonNo.style.position = 'fixed';
        botonNo.style.left = `${x}px`;
        botonNo.style.top = `${y}px`;
    });
    document.getElementById('descargar').addEventListener('click', function(e) {
        e.preventDefault();  // Prevenir el comportamiento predeterminado
        const enlace = document.createElement('a');
        enlace.href = 'Amor.pdf';  // Ruta de la imagen
        enlace.download = 'Amor.pdf';  // Nombre que tendrá el archivo descargado
        enlace.click();  // Simula un clic para la descarga
      });
});
