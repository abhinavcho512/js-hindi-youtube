const name="abhinav"
const repoCount=50;

console.log(name+ repoCount+" value");  // not recommended to use + to concate

console.log(`Hello my name is${name} and my repo count is ${repoCount}`);   // better way to inject name or concate name

const gameName=new String('hitesh-ch-com')

console.log(gameName[0]);
console.log(gameName.__proto__);   // op->{}

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString=gameName.substring(0,4);  // op->hite([0,3])
console.log(newString);

const anotherString=gameName.slice(-8,4)    // slice
console.log(anotherString);   // op->ite(negative se start kiya)

const newStringOne="       hitesh ch     "
console.log(newStringOne.trim());     // trim ->remove unnessary space or trailing space

const url="https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'))    // replace

console.log(url.includes('hitesh'))  // includes 

console.log(gameName.split('-'));

   