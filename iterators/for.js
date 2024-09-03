// for

// for (let i = 0; i < 10; i++) {
//     console.log(`${i}`);
// }


// for (let i = 1; i <= 10; i++) {
//     console.log(`***************`);
//     for (let j = 1; j <= 10; j++) {
//     // console.log(`inner loop : ${j} && outer loop : ${i}`);
//     console.log(`${i} * ${j} = ${i*j}`);
     
//     }
// }

// let arr = ["Harsh", "Santosh", "Josolkar"]
// console.log(arr.length);
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     console.log(element);
    
// }


//break and continue

for(let i = 1; i<=20; i++){
    if(i == 5){
        console.log(`Detected 5`);
        continue;
    }
    
    console.log(`Value of i is ${i}`);
    
}