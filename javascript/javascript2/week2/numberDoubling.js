// JavaScript2 week5 Homework
// doubling of number 
//
// write a program to double the odd number in an array and throws away the even number
//and than rewrite the program using map and filter by using arrow function.

let numbers =[1,2,3,4];
let newNumber =[];
for (let i=0; i<numbers.length; i++){
    if(numbers[i]%2 !==0){
        newNumber[i] = numbers[i]*2;
    }
}
console.log("the doubling numbers in new array are: ",newNumber);

//and than reweite the program using map and filter by using arrow function.

// finding odd number using filter 
const oddNumber = numbers.filter(numbers => numbers%2 ==0);
console.log(oddNumber);

// doubling odd number using .map
const mapDoubleNumber = oddNumber.map(numbers => numbers*2);
console.log(mapDoubleNumber);

