const images = document.querySelectorAll('.banner-image');
let current = 0;

function showImage(index) {
    images.forEach((img, i) => {
        img.classList.toggle('active', i === index);
    });
}

function cycleImages() {
    current = (current + 1) % images.length;
    showImage(current);
}

// Inicia com a primeira imagem visível
showImage(current);

// Muda a imagem a cada 5 segundos
setInterval(cycleImages, 5000);