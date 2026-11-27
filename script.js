const tombol = document.getElementById("tombolSalam");
const pesan = document.getElementById("pesan");

const daftarSapaan = [
  "Semangat terus ya! Setiap commit kecil membawamu makin dekat ke target. 🦄💖",
  "Keren banget sudah sampai tahap ini—jaga konsistensi dan tetap percaya diri! 🌷✨",
  "Ceria boleh, tapi tetap rapi dan teliti saat mengelola kode di Git & GitHub. 🪻💘",
  "Satu langkah demi satu langkah, kamu pasti bisa menguasainya! 🌈🤍"
];

let indeksSapaan = 0;

tombol.addEventListener("click", function () {
  pesan.textContent = daftarSapaan[indeksSapaan];
  indeksSapaan = (indeksSapaan + 1) % daftarSapaan.length;
});