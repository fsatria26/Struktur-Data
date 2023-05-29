var mobil = {
    //properti
    merk:'KIA', type:'city car', bobot: 650, warna:['putih', 
    'merah', 'kuning'],
   //methode
   start:function(){
      console.log("ini metode start mobil");
   },
   drive:function() {
     console.log("ini metode mengemudi");
   },
    color:function() {
        console.log(mobil.warna);
    }
};

mobil.color();