//if

// if (true(2==2)) {
    
// }

const isUserLoggedIn = true
const temperature =40
if (temperature < 50){
    // console.log(`The tempreature is less than 50 i.e${temperature}`);
    
}             // <, >, <=, >=, ==(for checking), !=, ===(also checks the type), !==

else{
    // console.log(`The tempreature more than  50`);
    
}

const score = 200
if (score>100){
    const power ='Fly'
    // console.log(`user has the power to ${power}`);
    
}


// shorthand notation

const balance = 1000
 if (balance >500) //console.log('test'), console.log('test2');   ///Avoid this as it is not appropriate to use it, called as implicite scope

if(balance < 500){
    // console.log('The balance is less than 500');
}
else if (balance<750){
    // console.log('The balance is less than 750');
}
else if (balance<900){
    // console.log('The balance is less than 900');
}
else {
    // console.log('The balance is less than 1200');
    
}

const userLoggedIn = true;
const debitCard =true;
const loggedFromGoogle = false;
const loggedinFromEmail = true;
//For mutiple conditions

if(userLoggedIn && debitCard  ){  //`&&` operator is for having both conditions true
    // console.log('Allow to buy course ');
    
}
if(loggedFromGoogle || loggedinFromEmail){
    // console.log('User logged in');
    
}






