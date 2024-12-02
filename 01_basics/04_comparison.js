// console.log(3>1);

// console.log("2">1);
// console.log("02">1)   // js convert into number by default but typescript dont convert as it is strict

//Confusion now

console.log(null>0);   
console.log(null==0);
console.log(null>=0);    // (exception)  treating it as 0 as it convert->number  //equality and comparison work differently but there they are same

console.log(undefined==0);   // undefined always gives false
console.log(undefined>=0);

// Strict check ===

console.log("2"===2);  //false as it dont convert 
