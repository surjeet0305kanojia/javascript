let name ="surjeet"
let age ='21'

console.log("my name is "+name+". I am "+age+" years old.")
// modern way to console using backtics.....String impotalation
console.log(`my name is ${name} and I'm ${age} years old`);

// another method to declare string
let string = new String('Surjeet');
console.log(string.toLocaleUpperCase());
console.log(string.indexOf('j'));
console.log(string.substring(0,5));
console.log(string.slice(4,7));

let s1='    suru   '
console.log(s1);
console.log(s1.trim());
console.log(s1.replace("u",'x'));
let s=`this is surjeet kanojia`
console.log(s.split(" "));