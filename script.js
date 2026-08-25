  // --- 1. GERENCIAMENTO DE LIKES (COM LOCALSTORAGE) ---
let totalLikes = parseInt(localStorage.getItem('blogDragonsLikes')) || 0;
const btnLike = document.getElementById('btnLike');
const counterDisplay = document.getElementById('counter');

counterDisplay.textContent = totalLikes;

btnLike.addEventListener('click', () => {
  totalLikes++;
  counterDisplay.textContent = totalLikes;
  localStorage.setItem('blogDragonsLikes', totalLikes);

  btnLike.classList.add('animating');
  setTimeout(() => btnLike.classList.remove('animating'), 300);
});

// --- 2. EFEITO DE DIGITAÇÃO NO SUBTÍTULO ---
const textToType = "Dominando o fogo da tecnologia e a evolução da IA";
const typingElement = document.getElementById('typing-text');
let index = 0;

function typeEffect() {
  if (index < textToType.length) {
    typingElement.textContent += textToType.charAt(index);
    index++;
    setTimeout(typeEffect, 50); // Velocidade de digitação
  }
}

// Inicia a digitação ao carregar a página
window.addEventListener('DOMContentLoaded', typeEffect);

// --- 3. BARRA DE PROGRESSO DE LEITURA ---
window.addEventListener('scroll', () => {
  const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (window.scrollY / windowHeight) * 100;
  document.getElementById('progress-bar').style.width = scrolled + '%';
});
