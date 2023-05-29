class Node{
    constructor(item) {
        this.item = item;
        this.next=null;
    }
}

class daftarbelanja{
    constructor() {
        this.head = null;
    }
    //menambaah item ke daftar belanja
    addItem(item) {
        const newNode = new Node(item);
    
        if (this.head === null) {
          this.head = newNode;
        } else {
          let nodesekarang = this.head;
          while (nodesekarang.next !== null) {
            nodesekarang = nodesekarang.next;
          }
          nodesekarang.next = newNode;
        }
      }
   //mencari item(item){
    searchitem(item) {
    let nodesekarang = this.head;

    while (nodesekarang !== null) {
        if (nodesekarang.item === item) {
            return true;
        }
        nodesekarang = nodesekarang.next;
    }
    return false;
   }
   //menampilkan data
   display(){
    let nodesekarang = this.head;
    while (nodesekarang !==null) {
        console.log(nodesekarang.item);
        nodesekarang = nodesekarang.next;
    }
   }
}

//contoh penggunaan
const belanjabaru = new daftarbelanja();

belanjabaru.addItem("Roti");
belanjabaru.addItem("coca cola");
belanjabaru.addItem("Bir");
belanjabaru.addItem("susu");

console.log(belanjabaru.searchitem("Bir"));
