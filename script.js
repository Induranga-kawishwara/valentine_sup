const startDate = new Date("2024-05-11T19:00:00");

const images = [
  { src: "images/image01.jpg", text: "Our First Day Together ❤️" },
  { src: "images/image02.jpg", text: "Thisuri, you make my world complete" },
  { src: "images/image03.jpg", text: "Induranga & Thisuri - Perfect Together" },
  { src: "images/image04.jpg", text: "Every moment with you is special" },
  { src: "images/image05.jpg", text: "Your smile is my favorite view" },
  { src: "images/image06.jpg", text: "Growing old with you is my dream" },
  { src: "images/image07.jpg", text: "You are my forever Valentine" },
  { src: "images/image08.jpg", text: "Together is my favorite place to be" },
  { src: "images/image09.jpg", text: "My heart beats for you, Thisuri" },
  { src: "images/image10.jpg", text: "Induranga & Thisuri - Eternal Love" },
];

let currentImageIndex = 0;

function updateImageDisplay(index) {
  const img = images[index];
  const mainImg = document.getElementById("current-img");
  const blurBg = document.querySelector(".blur-background");

  mainImg.src = img.src;
  document.querySelector(".img-intro").textContent = img.text;
  blurBg.style.backgroundImage = `url(${img.src})`;
}

function createImageGallery() {
  const gallery = document.querySelector(".image-gallery");

  images.forEach((img, index) => {
    const imgElement = document.createElement("img");
    imgElement.src = img.src;
    imgElement.alt = `Memory ${index + 1}`;
    imgElement.addEventListener("click", () => {
      currentImageIndex = index;
      updateImageDisplay(index);
    });
    gallery.appendChild(imgElement);
  });
}

function autoRotateImages() {
  setInterval(() => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateImageDisplay(currentImageIndex);
  }, 5000);
}

function updateTimer() {
  const now = new Date();
  const diff = now - startDate;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

document.addEventListener("DOMContentLoaded", () => {
  createImageGallery();
  updateImageDisplay(0);
  autoRotateImages();
  setInterval(updateTimer, 1000);
  updateTimer();

  // Music player control
  const musicPlayer = document.querySelector(".music");
  const audio = document.querySelector(".audio");
  let isPlaying = false;

  musicPlayer.addEventListener("click", () => {
    isPlaying = !isPlaying;
    isPlaying ? audio.play() : audio.pause();
    musicPlayer.style.animation = isPlaying ? "pulse 1.5s infinite" : "none";
  });
});
