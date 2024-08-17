// object constructor

// const user = new Object();
// console.log(typeof(user));
// user.fname="Bhakti";
// console.log(user)

// object literal
const user1 = {
    fname:"Anmay",
    lname:'Shirke',
    age:4
}
// console.log(user1);
// console.log(typeof(user1.age));

// delete user1.age;
// console.log(user1);

const mystery="answer";

// const user2={
//     name:"Bhakti",
//     age:24,
//     0:"Hello",
//     let:10,
//     10:100,
//     "full name":'BMS',
//     [mystery]:10, // dynamic/computed property syntax

// }
// console.log(user2)
// console.log(user2.let)
// console.log(user2[0]) // if key is number value the use [] 
// console.log(user2[10])
// console.log(user2["full name"])
// console.log(user2.age)
// delete user2.let
// console.log(user2)

// console.log(user2.mystery); // undefined
// console.log(user2[mystery]) //10
// console.log(user2.answer) //10

// op-1
function makeUser(name,age) {
    return{
        fname:name,
        Cage:age
    };
}

const user3 = makeUser("Manoj",35);
// console.log(user3)
// op-2
function make_User(name,age) {
    return{
        name,
        age    // name --> shorthand property syntax
    };
}
const user4 = make_User("Bhakti",34);
// console.log(user4)

const user5 = {};
// console.log(user5)
// console.log(user5.name === undefined); //true
// console.log("name" in user5); //false   - in operator to check whether key/property exists in the object or not

// for..in 
const user2={
    name:"Bhakti",
    age:24,
    0:"Hello",
    let:10,
    10:100,
    "full name":'BMS',
    [mystery]:10, // dynamic/computed property syntax
}

for (let key in user2){
    console.log(key,":",user2[key]);
}
