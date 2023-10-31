//  conversion to numbers

let score ="33ans"

// console.log(typeof score);
score1=Number(score)
// console.log(typeof score1);
// console.log(score1);   
// NaN -> when a string is converted to number but actually its not a number then NaN is introduced
// str="asdfg"-> NaN
// if value is null -> 0
// if undefined -> NaN
// true-> 1; false -> 0

/* conversion to Boolean*/
let value=" ";
let boolvalue=Boolean(value)
// console.log( typeof boolvalue);
// console.log( boolvalue);

/* if 0-> false else true for any number
Nan -> false
null-> false
"" empty string-> false
" " space -> true
"asdf" -> true
*/ 


/* conversion to string */
let str=NaN
string=String(str);
// console.log( typeof string);
// console.log(  string);



// ----------------------------operations----------------------------------

console.log(1+"2");
console.log("1"+2);  
console.log(1+1+"2"+"3"); // if string is last arg the operations will execute before conversion
console.log("1"+2+3);  //if first arg is string all arg converted to string
console.log(+true); // 1
console.log(-true);
console.log(+""); // 0




