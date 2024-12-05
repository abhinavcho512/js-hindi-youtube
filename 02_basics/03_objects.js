// // singelton (only created using constructor)
// Object.create


//object literals

//const mySym=Symbol("key1")

const JsUser={
    name:"Abhinav",
   // "full name" :"Abhinav Choudhary"
    //  age:23,
   // mySym:"key1"    // Interview asked what is typeof this mysymbol ->string
   // [mySym]:"mykey1" ,  // now this a way to add symbol in object
    email:"abhinav@google.com",
    isLoggedIn :false,
    lastLoginDays:["Monday","Saturday"]
}

// ratta marte h bche ye
// console.log(JsUser.email);  // direct access (ratta mar)
// console.log(JsUser["email"]);   // email->string
// console.log(JsUser["full name"]);   // best tarika 


// console.log(JsUser[mySym]);

// JsUser.email="Abhinav@chatgpt.com"    // chtgpt ab freeze ho gya h Object.freeze se ab nhi change hoga
// Object.freeze(JsUser)
// JsUser.email="hitesh@microsoft.com"
// console.log(JsUser);

// +++++++++ FUNCTION +++++++++

JsUser.greeting=function(){
    console.log("Hello Js user");
}

JsUser.greetingTwo=function(){
    console.log(`Hello Js user , ${this.name}`);
    
}
console.log(JsUser.greeting()); //   =>HELLO JS USER     undefined
// console.log(JsUser.greeting);   // Function returned back
console.log(JsUser.greetingTwo());






