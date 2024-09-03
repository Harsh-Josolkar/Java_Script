// const myArr =[0,1,2,3,4,5]
// console.log(myArr);
// const myFamily = ["Santosh","Smita","Samarth","Harsh"]
// console.log(myFamily);

// const arr2 = new Array(1,2,3,4)
// console.log(arr2[3]);

//Array methods

// arr2.push(5)
// console.log(arr2);

// arr2.pop()
// console.log(arr2);


// arr2.unshift(0)
// console.log(arr2);

// arr2.shift()
// console.log(arr2);
// console.log(arr2.includes(9));
// console.log(arr2.indexOf(4));

// const newArr = arr2.join()
// console.log(typeof(newArr));

//slice && splice

// console.log("A", arr2);

// const arr = arr2.slice(0,3);
// console.log(arr);
// console.log("B", arr2);
// const ar1 = arr2.splice(0, 3);
// console.log(ar1);
// console.log("C", arr2);


//02


// const engg = ["Computer engineering","Computer Science And Design Engineering","Artificial Inteligence and Data Science"]
// const inTake =[120 , 60 , 120]
// engg.push(inTake)
// console.log(engg);

// const dept = engg.concat(inTake)
// console.log(dept);

// const nhitm =[...engg, ...inTake]             //spread out //easy
// console.log(nhitm);

// const another_arr = [1,2,3,[4,5],[7,8,[9]]]
// const use_arr = another_arr.flat(Infinity)                                       //flat concept gives a new array will all of them in one
// console.log(use_arr);

//used in data scraping


// console.log(Array.isArray("Harsh"));
// console.log(Array.from("Harsh"));

// console.log(Array.from({name: "harsh",age: 20})); //intresting

// let marks1 = 8.5
// let marks2 = 8.9
// let marks3 = 9.2

// console.log(Array.of(marks1, marks2, marks3));