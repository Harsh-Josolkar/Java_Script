const user ={
    username: "Harsh",
    loginCount: 8,
    signedIn : true,

    getUseDetails : function(){
        // console.log("Got user details");
        // console.log(`Username: ${this.username}`);
        console.log(this);
        
    }
}

// console.log("user", user.username);
// console.log(user.getUseDetails());



//Constructor Function

// const promiseOne = new Promise()

function User(username, loginCount, isloggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isloggedIn = isloggedIn

    this.user = () => {
        console.log(`User: ${this.username()}`);
        
    }

    return this
}

const userOne = new User("harsh", 21, true)
const userTwo = new User("Samarth", 22, false)
console.log(userOne.constructor);
// console.log(userTwo);      // empty obj named as instance 1. new obj 2. Constructor function call hota hai 3.all this things will get injected in This keyWord 4. We get the function


// Consturctor is the refrence of its own
