const arr = [10,20,50,60,80];


// const[first,second,,fourth]=arr;
// console.log(fourth);

//... - rest operator - when 3 dots are at left side of the assignment
//... - spread opertor - when this are right side of the assignment

const[first,second,...all]=arr;
// console.log(second); //20
// console.log(all); //50,60,80


const obj={
    temp1:20,
    temp2:30,
    temp3:40,
    temp4:60,
    temp5:100
}

const {temp1,temp2,...etc}=obj;

// console.log(etc);

function fun1(val1,...args){
    console.log(val1);
    console.log(args);
}
// fun1(10,20,30);


// spread operator

const Student = etc; // not a clone/copy
// console.log(Student);
// console.log(etc);
// Student.temp3 = 85;
// console.log(Student);
// console.log(etc);

const student ={...etc,gender:"Male",temp5:45} // copy/clone- referring a new memory ( here temp5 will get override and gender get add new)
student.temp4 =8000;
// console.log("student",student);
// console.log("Etc",etc);

const arr1=[8,9,3,6,9];
const arr2 = [...arr1];
arr2[6] = 893
// console.log(arr1);
// console.log(arr2);

const arr3 = [40,50];
const arr4 = [100,...arr1,96,...arr3,8996,9963];
// console.log(arr4);