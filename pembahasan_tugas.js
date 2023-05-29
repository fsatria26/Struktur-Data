// Data array berisi nilai mahasiswa
var nilaiMahasiswa = [60,65,55,45,75,80];

// Fungsi untuk menentukan kelulusan
function tentukanKelulusan(nilai) {
  var hasil = [];
  
  for (var i = 0; i < nilai.length; i++) {
    if (nilai[i] >= 60) {
      hasil.push("Lulus");
    } else {
      hasil.push("Tidak Lulus");
    }
  }
  
  return hasil;
}

// Memanggil fungsi untuk menentukan kelulusan

var kelulusan = tentukanKelulusan(nilaiMahasiswa);

// Menampilkan hasil kelulusan
for (var i = 0; i < kelulusan.length; i++) {
  console.log("Mahasiswa ke-" + (i+1) + ": " + kelulusan[i]);
}



const nilai = [60,65,55,45,75,80];

const kelulusan1 = nilai.map((n) => {
  return n >= 70 ? 'Lulus' : 'Tidak Lulus';
});

console.log(kelulusan1);



const a=[1,2,4,5,8,9,10]
const data = a.map(i=>i%5 ===0);
console.log(data);
