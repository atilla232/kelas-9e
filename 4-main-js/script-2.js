document.addEventListener("DOMContentLoaded", function () {
  const currentLocation = window.location.pathname; // Dapatkan path URL halaman saat ini
  const navLinks = document.querySelectorAll(".nav-link, .dropdown-item");

  navLinks.forEach((link) => {
    if (link.id !== "non") {
      // Periksa apakah ID elemen bukan "non"
      const linkPath = new URL(link.href).pathname; // Dapatkan path URL dari tautan
      if (currentLocation === linkPath) {
        link.id = "active"; // Mengganti kelas "active" dengan ID "active" jika cocok
      } else {
        link.removeAttribute("id"); // Menghapus ID "active" jika tidak cocok
      }
    }
  });
});

// Temukan semua elemen <a> di dokumen
const links = document.querySelectorAll("a");

// Loop melalui setiap elemen <a>
links.forEach((link) => {
  // Periksa apakah href mengandung "/footer/our-class/indexa.html"
  if (link.href && link.href.includes("/footer/our-class/indexa.html")) {
    // Ganti href dengan "/2-kelas/nav/1-kelas/6-tentang-kelas/index.html"
    link.href = link.href.replace(
      "/footer/our-class/indexa.html",
      "/2-kelas/nav/1-kelas/6-tentang-kelas/index.html"
    );
  }
  // Periksa apakah href mengandung "/2-kelas/footer/3-our-class/index.html"
  if (
    link.href &&
    link.href.includes("/2-kelas/footer/3-our-class/index.html")
  ) {
    // Ganti href dengan "/2-kelas/footer/3-our-class/index.html"
    link.href = link.href.replace(
      "/2-kelas/footer/3-our-class/index.html",
      "/2-kelas/nav/1-kelas/6-tentang-kelas/index.html"
    );
  }
});

// Mengambil semua elemen anchor <a>
const anchorElements = document.querySelectorAll("a");

// Iterasi setiap elemen anchor <a>
anchorElements.forEach((anchor) => {
  const icon = anchor.querySelector("i");
  // Periksa apakah href mengandung tautan WhatsApp yang diberikan dan bukan anchor dengan kelas ikon "fa-brands fa-facebook"
  if (
    anchor.href.includes(
      "https://www.facebook.com/people/Atilla-Chess/pfbid06xYXNVYnozYF1LPmd2W5RNh7Qn6Zg7VJFuoduMV9muC3Ltxs6jHiAU4Jb9PHAakHl/?mibextid=ZbWKwL"
    ) &&
    (!icon || !icon.classList.contains("fa-facebook"))
  ) {
    // Ganti href dengan tautan Telegram yang baru
    anchor.href = "https://t.me/AtillaR7";

    // Ganti kelas ikon menjadi fa-telegram
    if (icon && icon.classList.contains("fa-whatsapp")) {
      icon.classList.remove("fa-whatsapp");
      icon.classList.add("fa-telegram");
    }
  }
});

// Mengambil elemen <div class="social-icons">
const socialIcons = document.querySelector(".social-icons");

// Mengambil elemen-elemen <a> di dalam div social-icons
const socialLinks = socialIcons.querySelectorAll("a");

// Iterasi melalui setiap elemen <a>
socialLinks.forEach((link) => {
  // Menambahkan atribut target="_blank" ke setiap elemen <a>
  link.setAttribute("target", "_blank");
});
