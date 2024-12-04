// Dates

// let myDate=new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString);
// console.log(myDate.toISOString);
// console.log(myDate.toJSON);
// console.log(myDate.toLocaleDateString);
// console.log(myDate.toLocaleString);

// console.log(typeof myDate);   // op-> object (Asked in Interviews)

// let myCreatedDate =new Date(2023,0,23)    // month starts from 0=>january
// console.log(myCreatedDate.toString());

// let myCreatedDate1= new Date(2024,11,4,5,3)
// console.log(myCreatedDate1.toString());

// let myCreatedDate1= new Date("2024-12-04")   // (YY-MM-DD  OR MM-DD-YY)
// console.log(myCreatedDate1.toString());

let myCreatedDate1= new Date("2024-12-04") 
let myTimeStamp=Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate1.getTime());

// console.log(Math.floor(Date.now()/1000));    // INTERVIEW Q: Can you find the no days from 1971 to now in milliseconds(ms)

let newDate=new Date()
console.log(newDate.getMonth());   // op-> 11 (december start from 0)

// newDate.toLocaleString('default'{    // customarise date and time zone
//     weekday:"long",
//     timeZone:""
// })









