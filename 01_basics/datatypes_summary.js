// Primitive Datatypes (call by value) like marksheet

// 7 types : String, Number , Boolean , null , undefined , Symbol(unique) ,BigInt

//const score=100 (we dont defined datatype of this in js)
//const score:number=100 (in Typescript)


// Non Primitive (Reference)

//Array , Objects , Functions

// const id1=Symbol('123')
// const id2=Symbol('123')

// console.log(id1===id2);

// const bigNumber=3457574839839893n
const outT=null;

// ARRAY
const heros=["shaktiman","doraemon","shinchan"];

//OBJECT
let obj={
    name:"abhinav",
    age=23;
}

//FUNCTION   // fn is like a variable
const myFunction=function(){
   // console.log("Hello World";)
}

console.log(typeof outT);

// typeof

// null=>object (Asked in Interviews)
// undefined=>undefined
// number=>number
// object =>function
