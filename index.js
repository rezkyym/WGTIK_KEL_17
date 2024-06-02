function kenaRazia(date, data) {
    // Inisialisasi variabel untuk menyimpan hasil tilang
    let tilangResults = [];
    
    // Fungsi untuk mengecek apakah nomor plat ganjil atau genap
    function isPlatGanjil(plat) {
      // Ambil digit terakhir dari plat
      let lastDigit = plat[plat.length - 2];
      // Konversi ke angka
      lastDigit = parseInt(lastDigit);
      // Jika digit terakhir adalah ganjil, return true, jika genap return false
      return lastDigit % 2 !== 0;
    }
    
    // Loop melalui data kendaraan
    for (let i = 0; i < data.length; i++) {
      // Cek apakah kendaraan merupakan mobil dan tanggal valid
      if (data[i].type === "Mobil" && date >= 1 && date <= 31) {
        // Cek apakah rutenya termasuk lokasi yang memerlukan perhatian ganjil genap
        if (data[i].rute.includes("Gajah Mada") || data[i].rute.includes("Hayam Wuruk") || data[i].rute.includes("Sisingamangaraja") || data[i].rute.includes("Panglima Polim") || data[i].rute.includes("Fatmawati") || data[i].rute.includes("Tomang Raya")) {
          // Cek apakah nomor plat ganjil atau genap
          if (isPlatGanjil(data[i].plat)) {
            // Jika ganjil, tambahkan tilang
            tilangResults.push({ name: data[i].name, tilang: 1 });
          }
        }
      }
    }
    
    // Kembalikan hasil tilang
    return tilangResults;
  }

  // Contoh penggunaan
console.log(
    kenaRazia(27, [
      {
        name: "Denver",
        plat: "B 2791 KDS",
        type: "Mobil",
        rute: ["TB Simatupang", "Panglima Polim", "Depok", "Senen Raya"]
      },
      {
        name: "Toni",
        plat: "B 1212 JBB",
        type: "Mobil",
        rute: ["Pintu Besar Selatan", "Panglima Polim", "Depok", "Senen Raya", "Kemang"]
      },
      {
        name: "Stark",
        plat: "B 444 XSX",
        type: "Motor",
        rute: ["Pondok Indah", "Depok", "Senen Raya", "Kemang"]
      },
      {
        name: "Anna",
        plat: "B 678 DD",
        type: "Mobil",
        rute: ["Fatmawati", "Panglima Polim", "Depok", "Senen Raya", "Kemang", "Gajah Mada"]
      }
    ])
  );