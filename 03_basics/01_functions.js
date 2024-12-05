// function sayMyname(){
//     console.log("H");
//     console.log("I");
//     console.log("T");
//     console.log("E");
//     console.log("S");
//     console.log("H");
    
// }
// sayMyname() //->execution of function
// //sayMyname //-> reference of fn (fn vaha rehta hai)

// // function addTwonumbers(number1,number2){   // during fn defintion =>parameters
// //    console.log(number1 +number2);
// // }
// // const result = addTwonumbers(3,5)    // during fn call =>arguments

// // console.log("result: ",result);

// function addTwonumbers(number1,number2){   // during fn defintion =>parameters
    
//     // let result=number1 +number2
//     // return result
//     // console.log("hitesh");  //not print after result
    
//     return number1 +number2  // direct return 
//  }
//  const result = addTwonumbers(3,5)    // during fn call =>arguments
 
//  // console.log("result: ",result);
 
//  function loginUserMessage(username="sam"){   // parameter liye
//     if(username === undefined){  // or (!username) as ! is false =undefined
//         console.log("Please enter a username");
//         return // ab iske aage kam nhi krega

//     }
//     return `${username} just logged in`
//  }
// // console.log(loginUserMessage("abhinav"))  
//  console.log(loginUserMessage("hitesh"));   // interviewer ask : what happen when no arguments are passed =>undefined as output
   
function calculateCartPrice(val1,val2,...num1){    // rest operator not spread 
    return num1
}
// console.log(calculateCartPrice(200,400,500,2000));   // convert into array by rest operator

const user={
    username:"hitesh",
    price:199
}
function handleObject(anyobject){
   // console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
// handleObject(user)
// handleObject{
//     username: "sam",
//     price:799
}

const myNewArray=[200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));

