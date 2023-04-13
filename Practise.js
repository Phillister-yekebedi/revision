
  //multiplication
  let num= [3,5,1,2,8,10,20,30]
  let multi=2
  for(p=0;p<num.length;p++){
    multi*= (num[p])
  }
  console.log(multi)

  let colours=['red','green','yellow','brown','maroon'];
for(let col=0; col<colours.length; col++){
    console.log (colours[col]+" is my favorite color")
}

//Write a function that takes in an array of numbers and returns an array that has all
//elements multiplied by 4.
let numArray = [12,87,45,75,23,64,73]

function arraynum(numArray){
  for(let k= 0;k<numArray.length; k++){
 
  let mult = numArray[k]*4
  console.log(mult)
  }
 
  }
  arraynum(numArray)

//Write a function that takes in an array of strings and returns an array with 
//every element turned into a number
//let number = [“10”,”24”,”45”,”56”,”67”]
let number=["10,", "24","45","56","67"]

function convertToNumbers(arr) {
  return arr.map(str => Number(str));
}

const strings = ["10", "24", "45", "56", "67"];
const numbers = convertToNumbers(strings);
console.log(numbers)


function numbe(arry){
  arry.map(value=>{
    return arry.toString(value)
  })
  // return arry.map(numbers => arry.toString(arry))

}
const arry= [10,24,45,56,67]
 console.log(numbe(arry))