// function Hello(){
//     console.log(" Hello everyone")
// }

// Hello()

// function expression - anonymous
// const greet = function(){
//     console.log("Hello from anonymous function")
// };

// greet();

// in anonymous function we can not access function before intializiation
// in regular function it is possible

//callback function - cb is call back function - it is passed as a parameter to another function which we will be called after Sometime
// function to which a callback function is passed (fun2) is higher order function

function fun1(){
    console.log("fun1")
}

function fun2(cb){
    console.log("fun2")
    cb()
}

fun2(fun1)


function ask(question,yes,no){
    const answer = confirm(question)
    if (answer){
        yes();
    }else{
        no();
    }
}
function showOk(){
    console.log("OK")
}
function showCancel(){
    console.log("Cancelled")
}

// ask("Are you Happy?",showOk,showCancel)

ask("Are you married?",
    function(){console.log("Yes Yes Yes")},
    function(){console.log("Never")},
)