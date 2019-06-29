/**
 * Warmup excersie JavaScript2 Week6.
 * Log out the text Called after 2.5 seconds 2.5 seconds after the script is loaded.
Create a function that takes 2 parameters: delay and stringToLog. Calling this function should log out the stringToLog after delay seconds. Call the function you have created with some different arguments.
Create a button in html. When clicking this button, use the function you created in the previous task to log out the text: 3.5 seconds after button is clicked 3.5 seconds after the button is clicked.
Create two functions and assign them to two different variables. One function logs out Earth, the other function logs out Saturn. Now create a new third function that has one parameter: planetLogFunction. The only thing the third function should do is call the provided parameter function. Try call the third function once with the Earth function and once with the Saturn function.
Create a button with the text called "Log location". When this button is clicked the location (latitude, longitude) of the user should be logged out using this browser api
Optional Now show that location on a map using fx the Google maps api
Create a function called runAfterDelay. It has two parameters: delay and callback. When called the function should wait delay seconds and then call the provided callback function. Try and call this function with different delays and different callback functions
Check if we have double clicked on the page. A double click is defined by two clicks within 0.5 seconds. If a double click has been detected, log out the text: "double click!"
Create a function called jokeCreator that has three parameters: shouldTellFunnyJoke - boolean, logFunnyJoke - function and logBadJoke - function. If you set tellFunnyJoke to true it should call the logFunnyJoke function that should log out a funny joke. And vice versa.
 */

//   (1)
   setTimeout(() => { 
       console.log('Called after 2.5 Seconds...')
   }, 2500);
 
// //(2)
  function stringShow(delay,stringToLog){
     // delay = setTimeout(()=>{
     //     console.log('text')
     // },4000);
     delay = setTimeout(() => {
         stringToLog = console.log('the text by clikcing after 3.5 seconds');
     },3500);
     // delay = setTimeout(() => {
     // }, timeout);
     // stringToLog ='';
     return delay;
     // // stringToLog ='';
 }
stringShow();

 //(3)
 const btn = document.querySelector('button');
  btn.addEventListener('click',stringShow);

//  (4)

  const earth = function(){
      console.log('this is earth');
  }
 // earth();
  const saturn = function(){
      console.log(' this is saturn');
  }
 // saturn();
  function planet(planetLogFunction){
      console.log('this is planet log: ');
      if (planetLogFunction === earth){
         earth();
      }else{
          saturn();
      }
     //  earth();
     //  saturn();
     return planetLogFunction;
  }
  // changeable to earth and saturn
 planet(saturn);

 //(5)
 const laLong = document.getElementById('location');
 function getLocation(){
     if (navigator.geolocation){
         navigator.geolocation.getCurrentPosition(showPosition);
     }else{
         laLong.innerHTML= "Not supported!";
     }
 }
 function showPosition(position) {
     laLong.innerHTML = "Latitude: " + position.coords.latitude + 
     "<br>Longitude: " + position.coords.longitude;
   }

//(6)

//(7)
 function runAfterDelay(delay,callback){
         alert( delay + ', ' + callback );
       }
       setTimeout(runAfterDelay, 5000, "5 second delay time ", "showed this message");

//(8)

 const double = function(){console.log(this.id + ' double')},
     single = function(){console.log(this.id + ' single')};

 document.getElementById('btnVanilla').addEventListener('click', makeDoubleClick(double, single));

 function makeDoubleClick (doubleClickCallback, singleClickCallback) {
     return (function () {
         var clicks = 0,
             timeout;
         return function () {
             var me = this;
             clicks++;
             if (clicks == 1) {
                 singleClickCallback && singleClickCallback.apply(me, arguments);
                 timeout = setTimeout(function () {
                     clicks = 0;
                 }, 400);
             } else {
                 timeout && clearTimeout(timeout);
                 doubleClickCallback && doubleClickCallback.apply(me, arguments);
                 clicks = 0;
             }
         };
     }());
 }

 single_double_click = function(single_click_callback, double_click_callback, timeout) {
   return this.each(function(){
     var clicks = 0, self = this;
     jQuery(this).click(function(event){
       clicks++;
       if (clicks == 1) {
         setTimeout(function(){
           if(clicks == 1) {
             single_click_callback.call(self, event);
           } else {
             double_click_callback.call(self, event);
           }
           clicks = 0;
         }, timeout || 300);
       }
     });
   });
 }

 ('#btnjQuery').single_double_click(single, double);