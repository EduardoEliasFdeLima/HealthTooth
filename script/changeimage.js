
const imageElement = document.getElementById('photo');
const images = [
  './src/images/paciente.jpg',
  './src/images/paciente2.jpg',
];

let currentIndex = 0;

function changeImage() {
    imageElement.style.opacity = 0;
  // Incrementa o índice, voltando ao início se atingir o final
  currentIndex = (currentIndex + 1) % images.length;


  // Atualiza o atributo src da imagem
  imageElement.style.opacity = 1;
  imageElement.src = images[currentIndex];
 
}

// Define o intervalo de troca a cada 1 segundo
setInterval(changeImage, 5000);