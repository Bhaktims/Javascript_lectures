class Person{

    city ="Mumbai";

    constructor(name){
        this.name =name;
    }
    sayBye(){
        console.log('Bye!!'+this.name);
    }
}

class Student extends Person{
    constructor(name,rollNo){
        super(name);
        this.rollNo=rollNo;
    }
    sayHi(){
        console.log('Hi'+this.name+this.rollNo+this.city);
    }
    sayBye(){
        super.sayBye();
        console.log("Bye Bye Students");

    }
}

const s1 =new Student('Anmay',89);
s1.sayHi();
s1.sayBye();