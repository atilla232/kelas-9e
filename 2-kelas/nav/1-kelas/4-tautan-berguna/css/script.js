// Ambil tombol dengan ID "instagram-link"
const instagramLinkButton = document.getElementById("instagram-link");
const GrubKelasLinkButton = document.getElementById("grub-9e-link");
const YtSekolahLinkButton = document.getElementById("yt-sekolah-link");
const instagramOisLinkButton = document.getElementById("osis-ig-link");
const jadwalLamaLinkButton = document.getElementById("jadwal-kelas-link");

// Tambahkan event listener untuk menyalin tautan saat tombol ditekan
instagramLinkButton.addEventListener("click", function () {
  // Tautan yang akan disalin ke clipboard
  const linkToCopy =
    "https://instagram.com/the9explorer?igshid=MTNvbWJtcjRyZnF4aw==";

  // Buat elemen textarea sementara untuk menyalin teks
  const tempTextArea = document.createElement("textarea");
  tempTextArea.value = linkToCopy;

  // Tempatkan elemen textarea di luar layar
  tempTextArea.style.position = "absolute";
  tempTextArea.style.left = "-9999px";

  // Tambahkan elemen ke dokumen
  document.body.appendChild(tempTextArea);

  // Pilih teks dalam elemen textarea
  tempTextArea.select();

  // Salin teks yang terpilih ke clipboard
  document.execCommand("copy");

  // Hapus elemen textarea
  document.body.removeChild(tempTextArea);

  // Beri tahu pengguna bahwa tautan telah disalin
  alert("Tautan telah disalin ke clipboard.");
});

// Tambahkan event listener untuk menyalin tautan saat tombol ditekan
GrubKelasLinkButton.addEventListener("click", function () {
  // Tautan yang akan disalin ke clipboard
  const linkToCopy = "https://chat.whatsapp.com/BTj1qs5LyI12yxeBR2mB4Q";

  // Buat elemen textarea sementara untuk menyalin teks
  const tempTextArea = document.createElement("textarea");
  tempTextArea.value = linkToCopy;

  // Tempatkan elemen textarea di luar layar
  tempTextArea.style.position = "absolute";
  tempTextArea.style.left = "-9999px";

  // Tambahkan elemen ke dokumen
  document.body.appendChild(tempTextArea);

  // Pilih teks dalam elemen textarea
  tempTextArea.select();

  // Salin teks yang terpilih ke clipboard
  document.execCommand("copy");

  // Hapus elemen textarea
  document.body.removeChild(tempTextArea);

  // Beri tahu pengguna bahwa tautan telah disalin
  alert("Tautan telah disalin ke clipboard.");
});

YtSekolahLinkButton.addEventListener("click", function () {
  // Tautan yang akan disalin ke clipboard
  const linkToCopy = "https://www.youtube.com/@smpn173jakarta9";

  // Buat elemen textarea sementara untuk menyalin teks
  const tempTextArea = document.createElement("textarea");
  tempTextArea.value = linkToCopy;

  // Tempatkan elemen textarea di luar layar
  tempTextArea.style.position = "absolute";
  tempTextArea.style.left = "-9999px";

  // Tambahkan elemen ke dokumen
  document.body.appendChild(tempTextArea);

  // Pilih teks dalam elemen textarea
  tempTextArea.select();

  // Salin teks yang terpilih ke clipboard
  document.execCommand("copy");

  // Hapus elemen textarea
  document.body.removeChild(tempTextArea);

  // Beri tahu pengguna bahwa tautan telah disalin
  alert("Tautan telah disalin ke clipboard.");
});

instagramOisLinkButton.addEventListener("click", function () {
  // Tautan yang akan disalin ke clipboard
  const linkToCopy =
    "https://instagram.com/osis.smpn173?igshid=eWhxYmRmc3hja3Rq";

  // Buat elemen textarea sementara untuk menyalin teks
  const tempTextArea = document.createElement("textarea");
  tempTextArea.value = linkToCopy;

  // Tempatkan elemen textarea di luar layar
  tempTextArea.style.position = "absolute";
  tempTextArea.style.left = "-9999px";

  // Tambahkan elemen ke dokumen
  document.body.appendChild(tempTextArea);

  // Pilih teks dalam elemen textarea
  tempTextArea.select();

  // Salin teks yang terpilih ke clipboard
  document.execCommand("copy");

  // Hapus elemen textarea
  document.body.removeChild(tempTextArea);

  // Beri tahu pengguna bahwa tautan telah disalin
  alert("Tautan telah disalin ke clipboard.");
});

jadwalLamaLinkButton.addEventListener("click", function () {
  // Tautan yang akan disalin ke clipboard
  const linkToCopy = "https://jadwal-kelas-9e.netlify.app";

  // Buat elemen textarea sementara untuk menyalin teks
  const tempTextArea = document.createElement("textarea");
  tempTextArea.value = linkToCopy;

  // Tempatkan elemen textarea di luar layar
  tempTextArea.style.position = "absolute";
  tempTextArea.style.left = "-9999px";

  // Tambahkan elemen ke dokumen
  document.body.appendChild(tempTextArea);

  // Pilih teks dalam elemen textarea
  tempTextArea.select();

  // Salin teks yang terpilih ke clipboard
  document.execCommand("copy");

  // Hapus elemen textarea
  document.body.removeChild(tempTextArea);

  // Beri tahu pengguna bahwa tautan telah disalin
  alert("Tautan telah disalin ke clipboard.");
});
