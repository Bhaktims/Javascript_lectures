class User{
    age=10;

    constructor(n){
        this.name = n;
    }

    sayHi(){
        console.log("Hi ---" + this.name);
    }
}
let Xuser = new User('bckdbjkbvjkdbv');
// Xuser.sayHi();
// console.log(Xuser.age);
// console.log(typeof User); // function
// console.log(Xuser);


function user1(age) {
    this.age= age;
    this.hello=function(){
        console.log('Hiiii '+this.age);
    }
};

let ux= new user1(25);
ux.hello(); //59