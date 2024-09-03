//for of
// ["","",""]
//[{},{},{}]

const arr = [1,2,3,4,5]

for (const a of arr) {
    // console.log(a);
    
}

const fullname = "Harsh santosh josolkar"                      //.replace(/ /g, '-')
// console.log(fullname);

for (const name of fullname) {
    if(name == " "){
        continue;
    }
    // console.log(`Each character in the name is ${name}`);
       
}

//Maps

const map = new Map()             //Same as object has an key and its value but the diffence also remembers the order output will be in order
//NO duplicate valuues
 map.set("IN", "INDIA")
 map.set("AUS", "AUSTRALIA")
 map.set("ENG", "ENGLAND")
 map.set("WI", "WEST-INDIES")

//  console.log(map);
 
for (const value of map) {  //prints in the form of array so we use destructing
    // console.log(value);
    
}
for (const [key, value] of map) {  
    // console.log(key, '-> ', value);
    
}

obj = {
    'In' : 'India',
    'Aus' : 'Australia',
    'Eng' : 'England',
}
for (const key of obj) {            //non itrarble
    // console.log(obj);
}
