class tumpukan {
    constructor() {
        this.elemen=[];
    }
    //function push
    tambah(data){
        this.elemen.push(data);
    }
    //function isemptu / pengecekanan jikan tumpukan kosong
    kosong(){
        return this.elemen.length===0;
    }
    //function pop
    ambilhapus() {
        if (this.kosong()){
            return "TUmpukan sudah kosong";
        }
        return this.elemen.pop();
    }
    puncak() {
        if(this.kosong()) {
            return "tumpukan sudah kosong"
        }
        return this.elemen[this.elemen.length - 1];
    }    

     size(){
        return this.elemen.length;
     }

     cetak(){
        let str="";
        for (let a=0; a < this.elemen.length; a++){
            str += this.elemen[a] + "";
        }
        return str;
     } 
}

function faktorial(n) {
    let stack = new tumpukan();

    while (n> 1 ) {
        stack.tambah(n);
        n--;
    }
    let hasil = 1;
    while (!stack.kosong()) {
        hasil *=stack.ambilhapus();
        console.log(`faktorial saat ini: ${hasil}`)
    }
    return hasil;
}

//onsole.log(faktorial(3));
const nilai = 5;
faktorial(nilai);
