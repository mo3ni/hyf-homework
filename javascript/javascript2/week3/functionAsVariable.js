// Homework assignment function as a variable
// JavaScript 2 week 6
/**
 * Create an array with 3 items. All items should be functions. Iterate through the array and call all the functions.
 * Create a function as a const and try creating a function normally. Call both functions.
 * Create an object that has a key whose value is a function. Try calling this function.
 */ 

//(1)
let functionArray=[firstFucn,secondFunc,thirdFunc];
functionVar.forEach(element => {
    element();
});
function firstFucn(){
console.log("first function");
}
function secondFunc(){
    console.log("Second function");
}
function thirdFunc(){
    console.log("third function");
}

//(2)
const funConst= function funConst(){
    console.log("this is constant function");
}
function callBoth(){
    console.log("Calling both functions : ");
    return funConst();
}
callBoth();
//(3)
const objFunction = {
    key: function objKey(){
        console.log("this is a function called inside an object");
    },
}
objFunction.objKey();