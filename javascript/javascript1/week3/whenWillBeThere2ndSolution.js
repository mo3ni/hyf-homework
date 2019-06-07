// when willbe there second slution
const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};
// creating fuunction for calling
function time(){
    // get the hour using formula bellow
const hour = Math.floor(travelInformation.destinationDistance / travelInformation.speed);
    // get the minutes using formula bellow 
const minutes = Math.floor((travelInformation.destinationDistance%travelInformation.speed)/travelInformation.speed*60);
return "You will arrive in: " + hour + " hour (s) and " + minutes + " Minute (s)";
}
console.log(time()); // 8 hours and 38 minutes


