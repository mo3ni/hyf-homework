// Assignment JavaScript 2 Week1 
// Differnce between Median and Average 

// Make a function that takes an array as parameter and returns the average of that parameter
// Make a function that takes an array as parameter and returns the median of that parameter
// Now create a function that calculates the median and the average and returns these two value in an object.
//Now render the prices and the average and median in a web page.

const housePrices = [3000000, 3500000, 1300000, 40000000, 100000000, 8000000, 2100000];

// (1)
function average (housePrices){
    let sum = 0;
    for ( let i = 0; i< housePrices.length; i++){
        sum += housePrices[i];
    }
    return sum / housePrices.length;
}
// average (housePrices);
console.log(average(housePrices));

//(2)
function median (housePrices){
    let median =0;
    const arrayLenght = housePrices.length;
    // if we want to first sort and than find the median or directly look after median 
    // housePrices.sort();
    if( arrayLenght % 2 === 0){ // if the lenght of array is even than 
        median = (housePrices[arrayLenght/ 2-1]+ housePrices[arrayLenght/ 2])/2; // average of two middle element 
    } else { // if its odd than 
        median = housePrices [(arrayLenght-1)/2]; // output the middle number only
    }
    return median;
}
console.log(median(housePrices));

//last step
function myFunction(){
document.getElementById("average").value = average(housePrices);
document.getElementById("median").value = median(housePrices);
}
