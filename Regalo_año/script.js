// 🎯 elementos principales
const enterBtn = document.getElementById("enterBtn");
const hero = document.getElementById("hero");
const app = document.getElementById("app");
const music = document.getElementById("music");
const musicToggle = document.getElementById("musicToggle");

// 🚀 entrar a la app
enterBtn.addEventListener("click", () => {
  // ocultar portada
  hero.style.display = "none";

  // mostrar app
  app.classList.remove("hidden");

  // reproducir música (los navegadores solo permiten tras interacción)
  music.volume = 0;
  music.play().catch(() => {});

  let vol = 0;
  const fadeAudio = setInterval(() => {
    if (vol < 1) {
        vol += 0.05;
        music.volume = Math.min(vol, 1);
    } else {
    clearInterval(fadeAudio);
    }
  }, 120);


// 🧭 navegación entre secciones
const navButtons = document.querySelectorAll(".nav-btn");
const sections = document.querySelectorAll(".section");

navButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const target = btn.dataset.section;

    sections.forEach(sec => sec.classList.remove("active"));

    const targetSection = document.getElementById(target);
    if (targetSection) {
      targetSection.classList.add("active");
    }
  });
});

// 🎵 botón play / pausa
musicToggle.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    musicToggle.textContent = "🎵 Pausar música";
  } else {
    music.pause();
    musicToggle.textContent = "🎵 Reproducir música";
  }
});

// 💌 efecto máquina de escribir
const text = `Desde que entraste en mi vida, todo tiene más sentido.

Cada risa contigo, cada mirada y cada momento
han hecho de este año el mejor de mi vida.

Gracias por ser mi lugar favorito en el mundo. 💖`;

let index = 0;
const typedText = document.getElementById("typedText");
let typingStarted = false;

function typeWriter() {
  if (index < text.length) {
    typedText.textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, 35);
  }
}

// activar al entrar en la sección poemas
document.querySelector('[data-section="poemas"]').addEventListener("click", () => {
  if (!typingStarted) {
    typingStarted = true;
    setTimeout(typeWriter, 300);
  }
});

// 💖 generador de corazones
const heartsContainer = document.getElementById("hearts-container");

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.textContent = "💖";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (14 + Math.random() * 20) + "px";
  heart.style.animationDuration = (4 + Math.random() * 4) + "s";

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 8000);
}

// ritmo de aparición (ajústalo si quieres)
setInterval(createHeart, 500);
});

// 🌙 modo noche toggle
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeToggle.textContent = "☀️Día";
  } else {
    themeToggle.textContent = "🌙Noche";
  }
});

// ❤️ contador tiempo juntos
const counterText = document.getElementById("counterText");

// ⚠️ IMPORTANTE: meses en JS van de 0 a 11
const startDate = new Date(2025, 2, 23, 20, 0, 0);

function updateLoveCounter() {
  const now = new Date();
  const diff = now - startDate;

  const seconds = Math.floor(diff / 1000) % 60;
  const minutes = Math.floor(diff / (1000 * 60)) % 60;
  const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  counterText.textContent =
    `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// actualizar cada segundo
updateLoveCounter();
setInterval(updateLoveCounter, 1000);

// 💖 corazón al hacer click
document.addEventListener("click", (e) => {
  const heart = document.createElement("div");
  heart.textContent = "💖";
  heart.style.position = "fixed";
  heart.style.left = e.clientX + "px";
  heart.style.top = e.clientY + "px";
  heart.style.pointerEvents = "none";
  heart.style.fontSize = "18px";
  heart.style.zIndex = "9999";
  heart.style.transition = "all 0.8s ease";
  heart.style.opacity = "1";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.style.transform = "translateY(-40px) scale(1.4)";
    heart.style.opacity = "0";
  }, 10);

  setTimeout(() => heart.remove(), 800);
});