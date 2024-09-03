// Immediately Invoked function Expressions

function self(){
    console.log(`DB Connected`);
}
self();  // we our function can get globally polluted but we dont want it to get, so we use IIFE 

(function self(){ ///It is an named iife as it has its specific name
    console.log(`DB Connected Two`);
} )();  //one iife must end with ';' so the another iife can be executed

// syntax: (whole function)()
((value) => {
    console.log(`DB Connected ${value}`);
} )(3); // what if the function expects a variable then we show give that variables value in the last ()
// syntax: (whole function)()