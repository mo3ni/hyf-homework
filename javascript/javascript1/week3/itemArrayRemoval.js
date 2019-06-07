// Homework : JavaScript 1 Week 3
// Item Array Removal 

const  names = ['Peter', 'Ahmad', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala'];
const nameToRemove = 'Peter';
// first method: removing by index number
//const removed = names.splice(1,1); //1= index number array 1= how many elements should be deleted.

// 2nd method:  removving using value "recommended" 
/*
for( let i=0; i< names.length; i ++){
    if(names[i] === nameToremove){
        names.splice(i,1)
    }
}
*/
// 3rd method: removing using function 
const removed = names.filter(function(remove){
    return remove !== nameToRemove;
    //return (names)
})
console.log(removed); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']

