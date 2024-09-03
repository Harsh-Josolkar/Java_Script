//This keyword tell us about the current context
// const user = {
//      username : "Harsh",
//      age : 20,

//      welcome : function () {
//         console.log(`${this.username}, welcome to chaicode`);
//         console.log(this);
//      }
// }
// user.welcome()
// user.username= "SAMARTH"
// user.welcome()
// console.log(this); //refers to node env/context

// const user = {
//      username : "Harsh",
//      age : 20,

//      welcome : function () {
//         console.log(`${username}, welcome to chaicode`);
//      }
// }
// user.welcome()
// user.username= "SAMARTH"
// user.welcome()

//**********************************************ArrowFunction******************************************//

// function test() {
//     const username = "Histesh"
//     console.log(this.username);  //So the this function cannot be used in functions but oonly in objects
// }
// test()

// const test= () => {
//     const username = "Histesh"
//     console.log(this)
// }
// test()

// const addTwo =(num1, num2)=>{
//     return num1+num2
// }//basic syntax of arrow function


// const addTwo = (num1, num2) =>   num1+num2 ;//Implicitly return
// const addTwo = (num1, num2) => (num1+num2) ;//when return is in Parenthesis no need to write return also to rteurn objects 
//const addTwo = (num1, num2) => ({username : "Harsh"})
//Return only comes when there are curly braces
// console.log(addTwo(5,20));