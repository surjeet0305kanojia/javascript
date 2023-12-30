// singleton object 
const user =new Object();
// non singleton  no any internal difference betweemn both objects 
const user2={};
user.id="uc001"
user.email="anythin@gmail.com"
user.fullname={
    firstname:"Surjeet",
    lastname:"kanojia",
    middlename:"kumar"
};
console.log(user.fullname.lastname);

// merge two objects ....
const obj1={1:"a",2:"b"}
const obj2={3:"v",4:"g"}
const obj3={5:"fgd",6:"fd"};

// using assign method
const obj4=Object.assign({},obj1,obj2,obj3)
console.log(obj4);
// using spread method
const obj5={...obj1,...obj2,...obj3}
console.log(obj5);

console.log(Object.keys(obj5));
console.log(Object.values(obj5));
console.log(Object.entries(obj5));