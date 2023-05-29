let  x= false;
let y = new Boolean(false);
//console.log(typeof x, typeof y);

const Array=[1,2,3,4,5,6,7]
Array.forEach(Element=> {
   // console.log(Element));
});

const mahasiswa=["ernest", "jeson", "vincent", "mario", "mario bros"]
//membuat array  baru dari array mahasiswa "mario"
const filteredArray = mahasiswa.filter(item=>item.match("mario"))
console.log(filteredArray);


const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// membuat array baru dari array angka untuk memeriksa 
//apakah setiap elemennya bernilai habis dibagi 2 atau tidak
const mapedArray = angka.map(item => item % 2 === 0);
console.log(mapedArray); 
// output: [false, true, false, true, false, true, false, true, false]

// membuat array baru dari array angka untuk melakukan 
//operasi perkalian 2 pada setiap elemennya
const multipleOfTwo = angka.map(e => e * 2);
console.log(multipleOfTwo); // Output: [2, 4, 6, 8, 10, 12, 14, 16, 18]


const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const something = angka.includes(2);
const any = angka.includes(10);

console.log(something); // Output: true
console.log(any); // Output: false


const angka = [1, 2, 3, 4, 5]

// mengecek apakah dalam array angka terdapat elemen yang habis dibagi 2
const some = angka.some(item => item % 2);
console.log(some); // Output: true

// mengecek apakah dalam array angka terdapat elemen yang kurang dari 0
const thing = angka.some(item => item < 0);
console.log(thing); // Output: false


const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// mengecek apakah semua elemen lebih dari 5
const greaterFive = angka.every(item => item > 4);
console.log(greaterFive); // Output: false

// mengecek apakah semua element kurang dari 10
const lessTen = angka.every(item => item < 10);
console.log(lessTen); // Output: true


const angka = [1, 2, 3, 4, 5];
const sum = angka.reduce((total, value) => total + value, 0); 
// kita dpt mengganti 0 dengan angka lain untuk mendapatkan 
//hasil penjumlahan yang berbeda
console.log(sum); // Output: 15


const angka = [20, 10, 3, 30, 58, 42, 6, 9]
const huruf = ['z', 'a', 'c', 'g', 'p']

// ascending order
const descOrder = angka.sort((a, b) => a > b ? 1 : -1);
console.log(descOrder); // Output: [3, 6, 9, 10, 20, 30, 42, 58]

// descending order
const ascOrder = huruf.sort((a, b) => a > b ? -1 : 1);
console.log(ascOrder); // Output: ['z', 'p', 'g', 'c', 'a']

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren = arr1.concat(arr2, arr3);
console.log(myChildren);

const fruits = ['apel', 'banana', 'mango']
const number = [1, 2, 3]
const newArray = fruits.concat(number);
console.log(newArray); // Output: ["apel", "banana", "mango", 1, 2, 3]


const angka = Array.of(1, 2, 3, 4, 5, 6);
console.log(angka); // Output: [1, 2, 3, 4, 5, 6]


// Syntax: arr.push(item1[, ...[, itemN]])
// Parameters: One or more items
// Return value: the new length of array

let languages = [ "Java", "PHP", "Python" ];
let foo = languages.push("JS");

console.log(foo);
// Output => 4

console.log(languages);
// Output => [ 'Java', 'PHP', 'Python', 'JS' ]


// Syntax: arr.pop()
// Return value: the removed element of the array

let languages = ["Java", "PHP", "Python"];
let poppedItem = languages.pop();

console.log(poppedItem);
// Output => Python

console.log(languages);
// Output => [ 'Java', 'PHP' ]



// Syntax: arr.shift()
// Return value: the removed element of the array

let languages = ["Java", "PHP", "Python"];
let foo = languages.shift();

console.log(foo);
// Output => Java

console.log(languages);
// Output => [ 'PHP', 'Python' ]


//Syntax: arr.unshift(Item1[, ...[, ItemN]])
// Return value: the new length of the array

let languages = ["Java", "PHP", "Python"];
let foo = languages.unshift("JS");

console.log(foo);
// Output => 4

console.log(languages);
// Output => [ 'JS', 'Java', 'PHP', 'Python' ]
