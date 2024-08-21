let user1={
    address:{city:'Mumbai'}
};

let user2={
    address:{
        
    }
};

// console.log(user1.address); //{ city: 'Mumbai' }

// console.log(user2); //{}

console.log(user2.address ? user2.address.city:''); //undefined
console.log(user2.address && user2.address.city); // undefined

//?.- Object chaining operator works for undefined
// if the value before ?. undefined/null then it will not try to access its property

console.log(user2?.address?.city);


//?. = doesn't work on left hand side of assignment

// console.log(document.getElementById('header'));
document.getElementById('header').innerHTML ='My Application';
const headerValue = document.getElementById('header').innerHTML;
console.log(headerValue);