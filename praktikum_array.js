const mahasiswa=["ernest", "jeson", "vincent", "mario", "mario bros"]
//membuat array  baru dari array mahasiswa "mario"
const filteredArray = mahasiswa.filter(item=>item.match("mario"))
//console.log(filteredArray);

const makanan=["gado-gado","galantin","ganggang", "gori", 
"gobet", "gurami kuah","gayam kuah","sayur mangga"]
const hasilfilter= makanan.filter(item=>item.match("ga"))
const hasilinclude=makanan.filter(makanan=>makanan.includes("ga"));
//console.log(hasilfilter);
//console.log(hasilinclude);

const angka=[1,2,3,4]
const maparray = angka.map(a=>a-1);
const sum=angka.reduce((total,value) =>total+value,2);
angka.push(11,12,13);
//console.log(maparray);
//console.log(sum);
//perintah penambah data 
//const angkabaru=angka.push(6,7,8,10);

//const buah= Array.of("jeruk","mangga", "jambu");
//console.log(buah);
//console.log(angkabaru);

//menmpilkan kesulurahn data array 
console.log(angka);
