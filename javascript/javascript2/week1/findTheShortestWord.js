//  Homework assignment JavaScript 2 Week1 
// Finding the shortest word from an array 

const danishWords = ['bil', 'plante', 'kaffe', 'bog', 'ø', 'planetarium'];

// finding the shortest work through reducing method
const minWord = danishWords.reduce(function(a, b) {
return a.length <= b.length ? a : b;
 })
console.log (minWord);

//min(danishWords); // returns 'ø'