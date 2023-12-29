const arr=[1,2,3,4,5,6];
const myarr =["ironamn","dr.strange","wanda"]
const dc_hero=["superman","flash","batman"]
const num=new Array(1,2,3,4,5,6,7)

// console.log(myarr[1]);
// console.log(num[1]);

// array methods
// num.push(10)  // to add new value
// console.log(num);

// slice -> to get data from array for given range 
// console.log("a", num);
// const myn1=num.slice(1,5)
// console.log(myn1)
// splice -> manipulate the array and cuts the array for given range 
// const myn2=num.splice(1,5)
// console.log("b", num);

// mergE TWO ARRAY
const all=myarr.concat(dc_hero)
console.log(all);

const all2=[...dc_hero,...myarr]
console.log(all2);
