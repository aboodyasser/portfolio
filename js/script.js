// ===== Mobile Menu Toggle =====
const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-links");
const navLinks = nav.querySelectorAll("a");

// فتح وغلق القائمة عند الضغط على ☰
// toggle.onclick = () => {
//   nav.classList.toggle("active");
// };

// إغلاق القائمة تلقائياً عند الضغط على أي رابط (فقط للشاشات الصغيرة)
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 768) { // فقط على الموبايل
      nav.classList.remove("active");
    }
  });
});

// ===== Back to Top Button =====
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});

topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"  // حركة سلسة مباشرة
  });
});

// ===== Initialize AOS (Scroll Animations) =====
AOS.init({
  duration: 1000,
  once: true
});


const menuToggle = document.getElementById("menu-toggle");
const navLink = document.getElementById("nav-links");

// عند الضغط على الزر
menuToggle.addEventListener("click", () => {
    navLink.classList.toggle("active"); // فتح/غلق القائمة

    // تحويل الزر بين ☰ و ✕
    menuToggle.textContent = menuToggle.textContent.trim() === "☰" ? "✕" : "☰";
});

// إغلاق القائمة عند الضغط على أي رابط
navLink.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        navLink.classList.remove("active"); // إخفاء القائمة
        menuToggle.textContent = "☰";       // إعادة الزر إلى ☰
    });
});

 