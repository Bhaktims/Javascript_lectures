// Constructor function
//1. new empty object is craeted and assigned to this
//2.add properties to this
//3. return the value

function User(name){
    this.name = name;
    this.helllo = function(){
        console.log("Hello from constructor")
    }
}
const u = new User("Bhakti");
// console.log(u.name);
// u.helllo();

// regular function working
let user1 ={
    name:'Anmay',
    sayHi:function(){
        console.log("Hi");
    }
};
// console.log(user1.name);
// user1.sayHi();


function Myuser(){
    this.name = "My Name";
    return { age:25}; //if u return an object, then this will be discarded
}
const x = new Myuser();
console.log(x);  // it will only return age


function Myuser1(){
    this.name = "XYZ";
    return 1; 
}
const y = new Myuser1();
console.log(y);  // if u return any primitive value, then this object will be return // it will return Myuser1 { name: 'XYZ' }






