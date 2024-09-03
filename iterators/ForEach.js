//+++++++++++++++++++++++++++++++++++++++++++++++FOREACH+++++++++++++++++++++++++++++++++++++++++++++++//

const name = ["Harsh", "Santosh", "Josolkar"]
// name.forEach( function (key) {
//     console.log(key);
    
// } )

// name.forEach( (key) => {
//     console.log(key);
    
// });

function printMe(key){
    // console.log(key);
    
}
// name.forEach(printMe)

// name.forEach((key, index, array) => {
//     // console.log(key, index, array);
    
// });

const myCoding = [
    {
        name : 'Harsh',
        Dept : 'CSD'
    },
    {
        name : 'Naman',
        Dept : 'IT'
    },
    {
        name : 'Rohit',
        Dept : 'COMPS'
    },

]

myCoding.forEach((key) => {
    // console.log(key.Dept);
    
})

const dept = ['Comps', 'Csd', 'IT', 'Aids']

// const values = dept.forEach((item)=>{
//     // console.log(item);
//     return item;
// })
// console.log(values);//does not return anything

//filters (Works on array to get specific value & to access them we need to store them in a variable)

const nos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const myNums = nos.filter( (nums) => {
//     return nums>4;
// } )

// const newNums = []

// nos.forEach((nums) => {
//     if(nums>4){
//         newNums.push(nums)
//     }
// })

// console.log(newNums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  books.forEach( (book) => {
    if(book.genre == 'Fiction' && book.edition > 2005 ){
        // console.log(book);
        
    }
  } )

  let find = books.filter( (bk) => {
     return bk.genre == "History" && bk.edition >= 1995
  } )
//   console.log(find);
  