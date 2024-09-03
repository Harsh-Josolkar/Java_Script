//The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const nos = nums.reduce( (acc, curr) => acc + curr, 0 )

// console.log(nos);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const mycartValue = shoppingCart.reduce( (acc, item) => (acc + item.price),0)
// console.log(mycartValue);


//Convert Array to Obj

const arr = ['a','b','c','d'];

let obj = arr.reduce(
    (acc,itt,i)=>(
        {...acc, [i]:itt }
    ),{}
)
// console.log(obj);


const myArr = (Object.values(obj))
console.log(myArr);

