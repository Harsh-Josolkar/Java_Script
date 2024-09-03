//We can declare objests in two ways: litrals and constructors

//when an object is made by a constructor it is call as "Singleton" //=>>Object.create

//object literals
// const mySym = Symbol("key")
// const user = {
//     name: "harsh",
//     "fullname": "Harsh Santosh Josolkar",
//     [mySym] : "Chabhi",
//     age: 20,
//     email:" harsh@study.com",
//     isLoggedIn: false,
//     loginDays: ["Monday","wednesday","friday","Sunday"]
// }

// console.log(user.email);
// console.log(user["email"]);
// console.log(user["fullname"]);
// console.log(user[mySym]);
// console.log(typeof user[mySym]);

// user.email ="Harsh@chaicode.com";
// console.log(user["email"]);

// Object.freeze(user)

// user.email ="Harsh/chaicode.com";
// console.log(user);

// user.greeting = function(){
//     console.log("Hello, User");
// }
// user.greeting2 = function(){
//     console.log(`Hello, User ${this.name}`);
// }
// console.log(user.greeting);
// console.log(user.greeting());
// console.log(user.greeting2());


//****************************************************************************//

// const tweeterUser = new Object()
// tweeterUser.id ="123abc"
// tweeterUser.name ="Samarth"
// tweeterUser.isLoggedIn = true;
// console.log(tweeterUser);

// const regUser = {
//     email: "mail@mum.com",
//     fullname: {
//         userFullName: {
//             firstName: "harsh ",
//             lastname: "Samarth"
//         }
//     }
// }
// console.log(regUser.fullname.userFullName.lastname);

// const obj1 = {1: "a",2: "b"}
// const obj2 = {3: "a",4: "b"}
// const obj5 = {0: "a",9: "b"}

// const obj3 = {obj1, obj2}

// const obj3 = Object.assign({},obj1,obj2,obj5)                    //It combines two or more objects{Object.assign}
// const obj3 ={...obj1,...obj2,...obj5}                            //By spread method
// console.log(obj3);

//Data from data base

// const user =[

// {
//     id: 1,
//     email: "h@harsh.com"
// },
// {
//     id: 1,
//     email: "h@harsh.com"
// },
// {
//     id: 1,
//     email: "h@harsh.com"
// },
// {
//     id: 1,
//     email: "h@harsh.com"
// }
// ]

// user[1].email

// console.log(Object.keys(tweeterUser));                               //methods
// console.log(Object.values(tweeterUser));
// console.log(Object.entries(tweeterUser));

// console.log(tweeterUser.hasOwnProperty('ids'));
