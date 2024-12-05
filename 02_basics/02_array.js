const marvel_heros=["thor","Ironman","spiderman"]
const dc_heros=["superman","flash","batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);   // merge both arrays using push , op=>3 & 1 elements

// const allHeros=marvel_heros.concat(dc_heros)
// console.log(allHeros);  // merge array & single output array

// Merge using spread ...(glass break)    [*Most people use spread]
const all_new_heros=[...marvel_heros,...dc_heros]
console.log(all_new_heros);

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array=another_array.flat(Infinity)    // flat => array ke andr array sorted 
console.log(real_another_array);    

console.log(Array.isArray("Hitesh"));  // false as it is string
console.log(Array.from("Hitesh"));    // now it convert into array

console.log(Array.from({name:"hitesh"}));   //**Intersting for Interview => op=>[] as it is confuse to give key or value */


let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));   // provide values of array=>100,200,300













