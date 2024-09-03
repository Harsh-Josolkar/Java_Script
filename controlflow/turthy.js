const userEmail = []//if we dont compare and assume its true aur false

if (userEmail) {
    console.log('Got user Eamil ');
    
}else{
    console.log("Don't have user email");
    
}


//falsy values
//false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values

//"0", "false", " ", [], {}, function(){}

// if(userEmail.length == 0){
//     console.log(`Array is empty`);
    
// }
// const emptyObj ={}
// if(Object.keys(emptyObj).length === 0){
//     console.log(`object is empty`);
    
// }

//Nullish Coalescing Operator (??) : null undefined

// let val1 ;
// // val1 = 5 ?? 10
// val1 = null ?? 10
// console.log(val1);

//terniary Operator

//Condition ? true : false

const iceCream =100
iceCream<=80 ? console.log('less than 80'): console.log("more than 80")
