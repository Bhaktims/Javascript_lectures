// console.log(this);

function sayHi(){
    console.log("Sayhi",this);
}
// sayHi();

const sayHello =()=>{
    console.log("say hello from arrow",this);
}
// sayHello();

const a = {
    name:"abc",
    age:85,
    sayHiiii:function(){
        console.log("Hiii",this); // this will print the object who is calling sayHii function
    },
    xyz:()=>{
        console.log("arrow function",this);
    }
};

// a.sayHiiii(); // this will display a object
a.xyz(); // this will display window object

const group={
    title:"Mr",
    userName:['Anmay','Manoj','Avyaan','Malhar'],
    showUsers:function(){
        console.log(this.userName);
        console.log(group.userName);

        for (let val of this.userName){
            console.log(this.title,val);
        }

        this.userName.forEach(function(name){
            console.log(this.title,name);
        })

        
        this.userName.forEach((name)=>{
            console.log(this.title,name);
        })

    }
}

group.showUsers();

