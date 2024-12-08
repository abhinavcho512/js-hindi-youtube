const user={
    username: "hitesh",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);    // this refer to current context
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()

// console.log(this);   // op=>{}

    // ** interview => browser ke andr sbse jyada global object hai vo [window object] hai   **//
// vese ab node bun dino chl rhe h js engine k liye

// function chai(){
//     let username="abhinav"
//     console.log(this.username);   // op=>undefined as this is only used with object{} but not with fn()
    
// }
// chai()

// const chai=function chai(){
//     let username="abhinav"
//     console.log(this.username);   // op=>undefined as this is only used with object{} but not with fn()
    
// }
// chai()

const chai = () =>{     //  () => {}  arrow function
    let username="abhinav"
    console.log(this);   // op=>undefined as this is only used with object{} but not with fn()
    


}
chai()

// const addTwo=(num1,num2 ) => {
//     return num1+num2
}

// const addTwo=(num1,num2) => (num1+ num2)   // Dhyn rko for react if no {} then no return direct (num1+num2)

// IMPLICIT STATEMENT (no use of RETURN)

// const addTwo=(num1,num2) => ({ username :"hitesh"})

// console.log(addTwo(3,4));


