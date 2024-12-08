// let a=10
// const b=20
// var c=30


// {}    // =>scope of that program

// var c=900     // GLOBAL SCOPE SO let is global scope(bhar wla) and var is only blocked scope
let a=300

if(true){
    let a=10
    const b=20   // BLOCK SCOPE
    // var c=30
//    console.log("INNER VALUE: ",a);
    
    
}

// FOR INTERVIEWS : global scope is different for console browser and node
              

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username="hitesh"

    function two(){
        const website="youtube"
        console.log(username);
        
    }
    // console.log(website);   // iska scope andr khtm ho gya sir
   // two()
    
}
//one()

if(true){
    const username="hitesh"
    if(username==="hitesh"){
        const website ="youtube"
      //  console.log(username+ website);
        
    }
  //  console.log(website);   // error ayegi as it is block scope 
    
}
//console.log(username);



// +++++++++++++++++ interesting +++++++++++++++++++++++


console.log(addone(5))  // op=>6


function addone(num){     // declare function 
    return num+1
}
// console.log(addone(5))  // op=>6

addTwo(5)   // give error that addTwo cant be access befoe initilization as we use variable to store the function

const addTwo=function(num){   // store function in some varaible and give error(due to hoisting)
    return num+2
}
// console.log(addTwo(5))