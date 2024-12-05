// // const tinderUser= new Object()  // singleton object (made using constructor)
//  const tinderUser={}           // non-singelton object

// tinderUser.id="123abc"
//  tinderUser.name="Sammy"
//  tinderUser.isLoggedIn= false

// // console.log(tinderUser);

// const regularUser={
//     email:"some@gmail.com",
//     fullname:{
//         userfullname:{
//             firstname:"Abhinav",
//             lastname:"Choudhary"
//         }
//     }
// }
// console.log(regularUser.fullname.userfullname.firstname);   // chaining
// // console.log(regularUser.fullname?firstname.lastname);   aage use

// // ++++++ Merge values in object
// const obj1={1:"a",2:"b"}
// const obj2={3:"a",4:"b"}

// //const obj3={obj1,obj2}   // problem like array
// //const obj3=Object.assign({},obj1,obj2)   // {}-> optional but use as target and other obj1,obj2 act as source


// // now we use our best method to merge objects like array -> ... spread 
// const obj3={...obj1,...obj2}   // 90% we use this concept

// console.log(obj3);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));   // op=> [id, name, isLoggedIn]   [m.imp]
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));   // provide key value pair

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));   // true

const course={
    coursename :"js in hindi",
    price:"999",
    courseInstructor :"hitesh"
}
//course.courseInstructor

const{courseInstructor:instructor}=course  // value extract  [Destructure hora h]

// console.log(courseInstructor);  
console.log(instructor);   // object ko de-structure kr diya(change kr diya)

// ++++++++++       API : APNA kaam dusro ke sr dalna (backend se value lake dega)     +++++++++++++

// JSON is like object but no name
// {
//     "name":"hitesh",
//     "coursename":"js in hindi",
//     "price":"free"
// }

[   // Array
    {},   // uske andr objects which make an api with json
    {},
    {}
]





