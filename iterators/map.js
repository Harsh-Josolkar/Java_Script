//maps 

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const nos =nums.map( (num) => {
//     return num+10
// })
// console.log(nos);

// nums.forEach( (num) => {
//     console.log(num+10);
    
// } )

const nos = nums
                .map( (num) => num*10 )
                .map( (num) => num/2 )
                .filter( (num) => num%10 === 0)
console.log(nos);


