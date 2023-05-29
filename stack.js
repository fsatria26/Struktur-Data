class Stack {
    //implementasi stack dengan menggunakan array
    constructor ()
    {
        this.items = [];
    }
    //implementasi beberapa function
    //function push (item)
    push(element)
    {
        //menambahaknan elemen baru ke dalam data items
        this.items.push(element);
    }
    //function pop()
    pop()
    {
        if (this.items.length ==0)
            return "Underflow";
        return this.items.pop();
    }
    //peeek()
    peek()
    {
        //mengaembalikan nilai teratas elemen dari sebuah tumpukan 
        //tetapi tidak menghapus
        return this.items[this.items.length - 1];
    }
    //isEmpty()
    isempty()
    {
        //akan mengembalikan nilai true jika tumpukan sudah kosong
        return this.items.length == 0;
    }
    //printstack
    printstack()
    {
        var data1 ="";
        for (var i = 0; i < this.items.length; i++)
              data1 += this.items[i] + " ";
        return data1;
    }
}

var stack = new Stack();
//console.log(stack.isempty());
//console.log(stack.pop());
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
console.log(stack.printstack());
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.printstack());