// console.log(Math.PI);
// console.log(Math.cos(90));
// console.log(Math.E);
// console.log(Math.sqrt(100));

// object destructuring

const {PI,E,sqrt} = Math;
// console.log(PI);
// console.log(E);
// console.log(sqrt(5789));

user1={
    fname:'Bhakti',
    mname:'Manoj',
    lname:'Shirke',
    age:35,
    mob:9833633864,
    marks:90
};

user2={
    fname:'Manoj',
    mname:'Ashok',
    lname:'Shirke',
    age:35,
    mob:8793398017,
};
// console.log(user1.fname,user1.lname,user1.age);

const{ fname , mob , age , marks=0,city='Mumbai' } = user2;
// console.log(fname , mob,marks , city);

// const circle1 ={
//     name:"CircleX",
//     radius:2
// }

// const circle2 ={
//     name:"CircleY",
//     radius:4
// }

// const circleArea = (radius,name)=>{ return `${name} : ${PI*radius*radius}`};

// console.log(circleArea(circle1.radius,circle1.name));
// console.log(circleArea(circle2.radius,circle2.name))


// with destructuring

const circle1 ={
    name:"CircleX",
    radius:2
}

const circle2 ={
    name:"CircleY",
    radius:4
}


const circleArea = (radius,name,precision=2)=>{ return `${name} : ${(PI*radius*radius).tofixed(precision)}`};

// console.log(circleArea(circle1.radius,circle1.name));
// console.log(circleArea(circle2.radius,circle2.name))



// Array destructuring

const arr=[1,2,3,4,5,6];
// const[first,second]=arr;
// console.log(first,second);

const[first,second,,fourth]=arr;
console.log(fourth);