//Homework : JavaScript 1 Week 3
// When will we be there ?

// declare object 
const travelInformation = {
    speed: 50, // 50 km per hour
    destinationDistance: 432,
  };
  console.log(travelInformation);
  const time = travelInformation.destinationDistance / travelInformation.speed;
  const inMinutes = time * 60; // convert it to minutes for calculation 
  //console.log(time);

// function 
  function timeConvert(n) {
    var num = n;
    var hours = (num / 60);
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    return " you will arrrive in : " + rhours + " hour(s) and " + rminutes + " minute(s).";
    }
    console.log(timeConvert(inMinutes));