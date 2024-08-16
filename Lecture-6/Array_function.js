
let arr=[1,2,3,4,5,6];

// regular for
// for (let i=0;i < arr.length;i++){
//     console.log(arr[i])

// }

// for of

// for(let val of arr){
//     console.log(" for of",val)
// }

// for each

// arr.forEach(function(val){
//     console.log(val)
// })

// arr.forEach((val)=> console.log(val));

//even no
const nums = [1,2,3,4,5];
// arr1=[]

// for (let i of nums){
//     if (i%2 == 0){
//         arr1.push(i);
//     }
// }
// console.log("EVEN no",arr1)


// const evenarr = nums.filter(function(val){
//     if(val%2==0){
//         return true;
//     }else{
//         return false;
//     }
// })

// console.log(evenarr)

// const evenarr = nums.filter(val=> val%2 === 0)
// console.log(evenarr)

const product=[
    {
        id:1,
        name:'iphone',
        price:50000
    },
    {
        id:2,
        name:'Oppo',
        price:40000
    },
    {
        id:3,
        name:'Vivo',
        price:30000
    },
    {
        id:4,
        name:'htc',
        price:25000
    }
]
// console.log(products); // all products with price >40000
// console.log(products[0])
// console.log(products[1].name)

// console.log(product.price)
const maxprice = product.filter(product=>product.price>30000); // filter give the array, it will return two matching value if matches 2
// console.log(maxprice)

//map function

const result = nums.map(val => val * val * val);
// console.log(result)
// console.log(nums)

// find function 

const productid = product.find(p =>p.id===3)// find give the single value , it will return single value which matches first
console.log(productid)


