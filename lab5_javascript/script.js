// // script.js
// document.getElementById("pesan").textContent = "Hello World";
// console.log("Hello World");

// const namaPengguna = prompt("Masukkan nama Anda:", "");
// if (namaPengguna && namaPengguna.trim() !== "") {
//   alert("Halo, " + namaPengguna + "!");
//   document.getElementById("pesan").textContent =
//     "Selamat datang, " + namaPengguna + ".";
// } else {
//   alert("Nama belum diisi.");
// }

// // fungsi aritmatika
// function operasiDasar(a, b) {
//   console.log("Penjumlahan:", a + b);
//   console.log("Pengurangan:", a - b);
//   console.log("Perkalian:", a * b);
//   console.log("Pembagian:", b !== 0 ? a / b : "Tidak dapat dibagi nol");
//   console.log("Modulus:", a % b);
// }
// operasiDasar(9, 4);

// // fungsi aritmatika changed
// function operasiDasar(a, b) {
//   console.log("Penjumlahan:", a + b);
//   console.log("Pengurangan:", a - b);
//   console.log("Perkalian:", a * b);
//   console.log("Pembagian:", b !== 0 ? a / b : "Tidak dapat dibagi nol");
//   console.log("Modulus:", a % b);
// }

// // Menangkap input dari prompt dan mengonversinya menjadi number
// const angka1 = parseFloat(prompt("Masukkan angka pertama:"));
// const angka2 = parseFloat(prompt("Masukkan angka kedua:"));

// // Menjalankan fungsi dengan nilai dari pengguna
// operasiDasar(angka1, angka2);

// // Pengkondisian (if-else)
// const inputNilai = prompt("Masukkan nilai (0–100):");
// const nilaiMahasiswa = Number(inputNilai);
// if (
//   inputNilai === null ||
//   inputNilai.trim() === "" ||
//   Number.isNaN(nilaiMahasiswa) ||
//   nilaiMahasiswa < 0 ||
//   nilaiMahasiswa > 100
// ) {
//   alert("Input nilai tidak valid.");
// } else if (nilaiMahasiswa >= 60) {
//   alert("Lulus");
// } else {
//   alert("Belum lulus");
// }

// // switch case methode
// const inputPilihan = prompt("Masukkan angka 1–5:");
// switch (inputPilihan) {
//   case "1":
//     alert("Bilangan satu");
//     break;
//   case "2":
//     alert("Bilangan dua");
//     break;
//   case "3":
//     alert("Bilangan tiga");
//     break;
//   case "4":
//     alert("Bilangan empat");
//     break;
//   case "5":
//     alert("Bilangan lima");
//     break;
//   default:
//     alert("Pilihan tidak tersedia");
// }

// Program cek bilangan

// function cekBilangan() {
//   const input = document.getElementById("bilangan").value;
//   const angka = Number(input);
//   const hasil = document.getElementById("hasilBilangan");
//   if (input.trim() === "" || !Number.isInteger(angka)) {
//     hasil.textContent = "Masukkan bilangan bulat yang valid.";
//   } else if (angka % 2 === 0) {
//     hasil.textContent = "TRUE";
//     console.log("true")
//   } else {
//     hasil.textContent = "Bilangan ganjil";
//   }
// }

// // Fungsi tombol untuk mengubah warna latar belakang
// function ubahWarnaLatar(warna) {
//     document.body.style.backgroundColor = warna;
// }

// Membuat list daftar menu menggunakan checkbox

const daftarMenu = document.querySelectorAll(".menu");
daftarMenu.forEach((item) => {
    item.addEventListener("change", hitungTotal);
});

function hitungTotal() {   
    let total = 0;
    daftarMenu.forEach((item) => {
        if (item.checked) total += Number(item.value);
    });
    document.getElementById("total").textContent = total.toLocaleString("id-ID"); 
}

// function hitungNilaiAkhir(tugas, uts, uas) {
//   return tugas * 0.3 + uts * 0.3 + uas * 0.4;
// }
// function tentukanPredikat(nilai) {
//   if (nilai >= 85) return "A";
//   if (nilai >= 75) return "B";
//   if (nilai >= 60) return "C";
//   if (nilai >= 50) return "D";
//   return "E";
// }

// ... (masukkan fungsi hitungNilaiAkhir dan tentukanPredikat lu di sini)

// function cekNilaiAll() {
//   // Ambil teks aslinya (value) sebelum diubah jadi angka
//   const inputTugas = document.getElementById("nilaiTugas").value;
//   const inputUTS = document.getElementById("nilaiUTS").value;
//   const inputUAS = document.getElementById("nilaiUAS").value;
//   const wadah = document.getElementById("output-nilai");

//   // 1. Validasi Kolom Kosong
//   // .trim() memastikan input yang isinya cuma spasi juga ditolak
//   if (inputTugas.trim() === "" || inputUTS.trim() === "" || inputUAS.trim() === "") {
//     wadah.innerHTML = `<p style="color: red;"><strong>Peringatan:</strong> Semua kolom nilai wajib diisi (tidak boleh kosong)!</p>`;
//     return; // Hentikan fungsi agar tidak dihitung
//   }

//   // Jika tidak kosong, ubah jadi angka (number)
//   const tugas = parseFloat(inputTugas);
//   const uts = parseFloat(inputUTS);
//   const uas = parseFloat(inputUAS);

//   // 2. Validasi Rentang 0-100 (kode dari lu sebelumnya)
//   if (tugas < 0 || tugas > 100 || uts < 0 || uts > 100 || uas < 0 || uas > 100) {
//     wadah.innerHTML = `<p style="color: red;"><strong>Peringatan:</strong> Semua nilai harus berada pada rentang 0 hingga 100!</p>`;
//     return;
//   }

//   // 3. Jalankan kalkulasi jika lolos semua validasi
//   const akhir = hitungNilaiAkhir(tugas, uts, uas);
//   const predikat = tentukanPredikat(akhir);
//   const status = akhir >= 60 ? "Lulus" : "Belum lulus";

//   wadah.innerHTML = `
//     <hr>
//     <p><strong>Nilai Akhir:</strong> ${akhir.toFixed(2)}</p>
//     <p><strong>Predikat:</strong> ${predikat}</p>
//     <p><strong>Status:</strong> ${status}</p>
//   `;
// }

// const tugas = 85;
// const uts = 78;
// const uas = 88;
// const akhir = hitungNilaiAkhir(tugas, uts, uas);

// console.log("Nilai akhir:", akhir.toFixed(2));
// console.log("Predikat:", tentukanPredikat(akhir));
// console.log("Status:", akhir >= 60 ? "Lulus" : "Belum lulus");

//fungsi perulangan untuk tabel perkalian angka 7 dari angka 1 - 10
// function tabelPerkalianTujuh() {
//   for (let i = 1; i <= 10; i++) {
//     console.log(`7 x ${i} = ${7 * i}`);
//   }
// }

// // Menjalankan fungsi
// tabelPerkalianTujuh();

//Membuat fungsi cek angka genap

// function cekGenap() {
//   const input = document.getElementById("bilangan").value;
//   const angka = Number(input);
//   const hasil = document.getElementById("hasilBilangan");

//   if (input.trim() === "" || !Number.isInteger(angka)) {
//     hasil.textContent = "Masukkan bilangan bulat yang valid.";
//   } else if (angka % 2 === 0) {
//     hasil.textContent = "TRUE";
//     console.log("true");
//   } else {
//     hasil.textContent = "False";
//     console.log("False");
//   }
// }

function toggleElemen() {
    const elemen = document.getElementById("elemenTarget");
    const tombol = document.getElementById("tombolToggle");

    // Mengecek apakah elemen saat ini sedang disembunyikan
    if (elemen.style.display === "none") {
      // Jika ya, tampilkan kembali elemennya
      elemen.style.display = "block";
      // Ubah teks tombolnya
      tombol.textContent = "Sembunyikan Elemen";
    } else {
      // Jika tidak, sembunyikan elemennya
      elemen.style.display = "none";
      // Ubah teks tombolnya
      tombol.textContent = "Tampilkan Elemen";
    }
  }