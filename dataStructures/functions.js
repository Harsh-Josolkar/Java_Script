// function addTwoNumbers(num1, num2){                    //parameters
//     return num1+num2;
// }
// console.log(addTwoNumbers(5,20));                    //arguments


// function loginUserMessage(username){
//     return `${username} just logged in`
// }
// console.log(loginUserMessage("Harsh"));

// function myCart(...num1) {
//    return num1;
// }
// console.log(myCart(100, 200, 300));


user= {
    name :"harsh",
    age : 20
}

function object(anyobject) {
    console.log(`Username is ${anyobject.name} and age is ${anyobject.age}`);
}

object(user);