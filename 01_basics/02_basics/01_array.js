// array

const myArr=[0,1,2,3,4,5]
const myHeros=["shaktiman","naagraj"]

const myArr2=new Array(1,2,3,4)  // direct values no[]
// console.log(myArr[0]);

// Array methods

// myArr.push(7)
// console.log(myArr);
// myArr.pop()   // remove last value like 7
// console.log(myArr);

// myArr.unshift(9)   // shift first place and add 9 in starting of array
// myArr.shift()      // remove unshift


// console.log(myArr.includes());
// console.log(myArr.indexOf(3));

const newArr=myArr.join()   // convert Array->string
// console.log(myArr);
// console.log(newArr);

// slice, splice [IMP Q FOR INTERVIEW WHAT IS DIFF BW BOTH]

console.log("A",myArr);  // orginal array A

const myn1=myArr.slice(1,3)   // OP->1,2 & 3 not included

console.log(myn1);

console.log("B",myArr);   // B

const myn2=myArr.splice(1,3)    
console.log("C",myArr);    // C wla ab => op->0,4,5 as it remove 1,2,3 so original array manipulate
console.log(myn2);    

// so main difference between slice and splice => splice manipulate in original array (as it remove some part but slice give some part)







