const accountId=1234
let accountName="ram"
var accountEmail="surjeet0305kanojia@gmail.com"
city="chandigarh"

// accountId=8934  // we canot change the value of const variable;
/*  never use var keyword for declaration 
becoz the block scope and functional scope issue*/
console.log(accountId);
// way to print multiple items in tabular form \

console.table([accountId,accountName,accountEmail,city])