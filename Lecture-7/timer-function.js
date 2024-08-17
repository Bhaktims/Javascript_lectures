// const timerId = setTimeout(()=>{
//     console.log('hello');
// },4000)

// setTimeout(()=>{
//     clearInterval(timerId);
//     console.log('Timer cleared')
// },2000)

// const timerId = setTimeout(()=>{
//     console.log('hello');
// },0)

// clearInterval(timerId);// in this situation we will not get any output

// set interval - it works for infinite time

const timerId2 =setInterval(()=>{
    console.log("Hello from setinterval")
},1000)

setTimeout(()=>{
    clearInterval(timerId2)
},5000)

