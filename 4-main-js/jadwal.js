const today = new Date();
const currentDay = today.getDay();
const days = ["minggu", "senin", "selasa", "rabu", "kamis", "jumat", "sabtu"];

// Fungsi untuk menampilkan hari ini
function showToday() {
  const hariIni = days[currentDay];

  const articles = document.querySelectorAll(".box-kelas");
  articles.forEach((article) => {
    if (article.id === hariIni) {
      article.style.display = "flex";
    } else {
      article.style.display = "none";
    }
  });
}

showToday();
