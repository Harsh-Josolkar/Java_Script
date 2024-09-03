//var c = 300
//When {} comes with an function or if else it is call scope

//let a = 200

// if (true) {                // this is a block scope everything beyond this is global scope
//     let a = 10
//     const b= 20
//     console.log("inner: ",a);
//     //var c = 30
//}
//console.log(a);
// console.log(b);
//console.log(c);


//Nested scope and clouser(basic)
// the inner function can ask the values from outer but the visa versa is not present
function one() {
    const username = "Harsh"

    function two (){
        const website ="chaicode"
        console.log(username);
    }
    // console.log(website);
    two()
}

// one()

if (true) {
   const username ="Harsh"
    if (true) {
        const website = " at chaicode.com"  
        //console.log(username + website); 
    }
    // console.log(website);
}
// console.log(username);

//**************************************************//
console.log("BY ONE ",addOne(6));  //will execute as it is an pure function

function addOne (num){
    return num +1
}
console.log("BY TWO ",addTwo(5)); //will not print as the variable of the function addTwo is not declared yet it the concept of hosting

const addTwo = function (num) {                  //Expression as the variable is holding a function
    return num +2
}
