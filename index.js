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
}