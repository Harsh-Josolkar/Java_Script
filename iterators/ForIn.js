//Forin
const myobj = {
    In : 'India',
    Aus : 'Australia',
    Eng : 'England',
}

for (const key in myobj) {
    // console.log(`${key} shortform of ${myobj[key]}`);   
}

const arr = ["Harsh", "Santosh", "Josolkar"]
for (const key in arr) {
    console.log(arr[key]);
    
}
//for In loop does not work on map
//for of loop for array and map //here array will be directly give key in loop
//for in loop for objects and array //here array will not give directly key values for keys we have to show name[key]




