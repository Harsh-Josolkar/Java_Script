// The Promise object represents the eventual complition(or failure) of an asynchronous operation and its resulting value

//Examples where the promise is used is cryptography, fileSystem, Networking, mobile(sound, etc)

// There are 3 states in Promise : {pending: initial state, fulfilled: meaning of the op was completed, rejected: meaning that the operation failed.}

const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    //DB calls, cryptography, network

    setTimeout( ()=>{
        console.log("Async task completed");
        resolve()
    } , 1000)
})
promiseOne.then(()=>{
    console.log("Promise consumed");
})

// promiseTwo

new Promise(function(resolve, reject){
    setTimeout( ()=>{
        console.log("task completed again");
        resolve()
    } ,1000)
}).then(()=>{
    console.log("Consumed Again");
    
})


const promiseThree = new Promise(function(resolve, reject){
    setTimeout( ()=>{
        resolve({
            username: "Harsh",
            email: "Harsh@name.com"
        })
        
    } ,1000)
})
promiseThree.then((user)=>{
    console.log(user.username);
})

promiseFour = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let error = true;
        if(!error){
            resolve({
                username: "harsh",
                password : "QAZWSX"
            })
        }else{
          reject("E: Something Went wrong")  
        }
    })
}, 1000)
promiseFour
.then((per)=>{
   return per.username
}).then((name)=>{
    console.log(name);
    
}).catch((error)=>{
    console.log(error);
    
}).finally(()=>{
    console.log("The promise is either resolved or rejected");
})

const promiseFive = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let error = true;
        if(!error){
            resolve({
                username: "JavaScript",
                password : "ABCD"
            })
        }else{
          reject("E: JS Went wrong")  
        }
    })
})


async function consumePfive(){
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePfive();


// async function GitHUb(){
//   try{
//     const response=  await fetch('https://api.github.com/users/hiteshchoudhary')
//   const data =  await response.json() ///it will also take time to execute
//   console.log(data); 
// }catch(error){
//  console.log("E: ", error);
// }
// }
// GitHUb()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data.followers);
    
})
.catch((error)=>{
    console.log("E: ",error);
    
})
