const translations = {
  id: {
    nav_projects: "Proyek",
    nav_stack: "Stack",
    nav_about: "Tentang",
    nav_contact: "Kontak",
    hero_eyebrow: "Android • Kotlin • Termux • Open Source",
    hero_title: "Arfoxcode membangun tool Android kecil yang tajam dan berguna.",
    hero_desc: "Tempat sederhana untuk menampilkan proyek seperti Notif Logs, Novel Reader & Downloader, dan eksperimen lain seputar Android, Kotlin, Termux, Flask, serta open source.",
    hero_github: "Lihat GitHub",
    hero_projects: "Lihat Proyek",
    profile_desc: "Developer Android yang suka membangun aplikasi utilitas, logging, otomasi, dan reader lokal.",
    projects_eyebrow: "Project",
    projects_title: "Proyek buatan Arfoxcode",
    projects_note: "Beberapa masih berkembang, karena software yang langsung sempurna cuma ada di brosur investor.",
    notif_status: "Aktif dikembangkan",
    notif_desc: "Aplikasi Android untuk merekam, mengelola, memfilter, dan mencari riwayat notifikasi. Fokusnya pada tampilan seperti chat, pencatatan yang tahan banting, filter log, whitelist/blacklist, dark mode, dan halaman About.",
    novel_status: "Reader",
    novel_desc: "Reader dan downloader novel legal dengan konsep server lokal atau aplikasi Android. Dibuat untuk membaca lebih nyaman, menyimpan chapter, history baca, backup/restore, dan ekspor EPUB.",
    stack_eyebrow: "Stack",
    stack_title: "Teknologi yang sering dipakai",
    about_eyebrow: "Tentang",
    about_title: "Sederhana dulu, berkembang nanti.",
    about_desc: "Halaman ini dibuat sebagai pusat kecil untuk mengenalkan Arfoxcode dan proyek-proyeknya. Fokusnya bukan gaya korporat berlebihan, tapi informasi jelas: siapa pembuatnya, apa yang dibuat, dan di mana orang bisa melihat kodenya.",
    contact_title: "Kontak & Link",
    contact_desc: "Temukan proyek, kode, dan update lain di sini.",
    footer_prefix: "©",
    footer_text: "Dibuat sederhana, karena portfolio tidak perlu memakai jas dan dasi."
  },
  en: {
    nav_projects: "Projects",
    nav_stack: "Stack",
    nav_about: "About",
    nav_contact: "Contact",
    hero_eyebrow: "Android • Kotlin • Termux • Open Source",
    hero_title: "Arfoxcode builds small, sharp, and useful Android tools.",
    hero_desc: "A simple place to showcase projects like Notif Logs, Novel Reader & Downloader, and other experiments around Android, Kotlin, Termux, Flask, and open source.",
    hero_github: "View GitHub",
    hero_projects: "View Projects",
    profile_desc: "Android developer who builds utility apps, logging tools, automation experiments, and local readers.",
    projects_eyebrow: "Projects",
    projects_title: "Projects by Arfoxcode",
    projects_note: "Some projects are still evolving, because perfect software on day one only exists in investor slide decks.",
    notif_status: "Actively developed",
    notif_desc: "An Android app for recording, managing, filtering, and searching notification history. It focuses on a chat-like interface, reliable logging, log filters, whitelist/blacklist support, dark mode, and an About page.",
    novel_status: "Reader",
    novel_desc: "A legal novel reader and downloader concept for a local server or Android app. Built for comfortable reading, chapter saving, reading history, backup/restore, and EPUB export.",
    stack_eyebrow: "Stack",
    stack_title: "Technologies often used",
    about_eyebrow: "About",
    about_title: "Simple first, improved later.",
    about_desc: "This page is a small hub to introduce Arfoxcode and the projects behind it. The goal is not corporate theater, but clear information: who made it, what was built, and where people can see the code.",
    contact_title: "Contact & Links",
    contact_desc: "Find projects, code, and other updates here.",
    footer_prefix: "©",
    footer_text: "Built simply, because a portfolio does not need a suit and tie."
  }
};

function applyLanguage(lang) {
  const dict = translations[lang] || translations.id;
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  localStorage.setItem("site-lang", lang);
}

document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => applyLanguage(btn.dataset.lang));
});

const savedLang = localStorage.getItem("site-lang");
const browserLang = navigator.language && navigator.language.toLowerCase().startsWith("id") ? "id" : "en";
applyLanguage(savedLang || browserLang);
