var person = {
    firstname: "Dian", lastname: "Sastro",
    fullname: function(){
        console.log(`Nama orang 1: ${this.firstname} ${this.lastname}`);
    }
};

var person2 = {
    firstname: "adi", lastname: "Sanjaya",
    fullname: function(){
        console.log(`Nama orang 1: ${this.firstname} ${this.lastname}`);
    }
};

person.fullname();
person2.fullname();

//alternatif kedua
function orang(firstname,lastname){
    //properti
    this.firstname = firstname;
    this.lastname = lastname;

    this.fullname=function(){
        return`nama lengkap:${this.firstname}${this.lastname}`  
     }
};

var person1= new orang("Dian","Samjaya");
var person2=new orang("adi","Sastro");
console.log(person1.fullname(), person2.fullname());