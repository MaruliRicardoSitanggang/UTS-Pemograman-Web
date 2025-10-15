// Tema gelap / terang
function toggleTheme() {
  document.body.classList.toggle("dark-mode");
  document.querySelector(".theme-btn").textContent =
    document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
}

// Hamburger menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Efek navigasi aktif
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    document.querySelectorAll(".nav-link").forEach(l => l.classList.remove("active"));
    link.classList.add("active");
    navLinks.classList.remove("show"); // otomatis tutup menu di HP
  });
});

// Animasi scroll
window.addEventListener("scroll", () => {
  document.querySelectorAll(".reveal").forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 80) el.classList.add("active");
  });
});

// Pesan sambutan
window.onload = () => {
  setTimeout(() => alert("Selamat datang di Website Maruli Ricardo Sitanggang! 🎉"), 400);
};
