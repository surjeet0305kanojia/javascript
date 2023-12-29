// object literals

const mysim=Symbol("key1")

const obj={
    name:"surjeet",
    "full name": "Surjeet kumar kanojia",
    age:21,
    email:"surjeet0305kanojia@gmail.com",
    role:"research analyst",
    [mysim]:"keyvalue1"
}

// access object methods
// console.log(obj.role);
// console.log(obj["full name"]);
// console.log(obj);
// Object.freeze(obj)
// obj.name="ajay";
// console.log(obj);

// functions in object
obj.greetings= function(){
    console.log("helllo Javascrict lerner");
}

obj.greetings2=function(){
    console.log(`hello, dear ${this["full name"]} welcome to tutorial`)
}

console.log(obj.greetings());
console.log(obj.greetings2());