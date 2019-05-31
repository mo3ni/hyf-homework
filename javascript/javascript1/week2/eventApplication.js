// ......Event Application......
const weekDays =['Saturday','Sunday','Monday','Tuesday','Wednsday','Thursday','Friday'];
const day= new Date();
function getEventWeekDay (eventHeldDay){
    const eventDay = (eventHeldDay + day.getDate()) % 7;
    return weekDays[eventDay];
}
console.log('Selected event will be held in : '+ getEventWeekDay(9));