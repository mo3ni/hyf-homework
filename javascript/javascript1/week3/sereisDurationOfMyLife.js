// Series Duration of My life
const seriesDurations = [
  {
    title: 'Game of thrones',
    days: 3,
    hours: 1,
    minutes: 0,  
  },
  {
    title: 'Sopranos',
    days: 3,
    hours: 14,
    minutes: 0,
  },
  {
    title: 'The Wire',
    days: 2,
    hours: 12,
    minutes: 0,
  }
]
const averageYear = 80;

function lifeSpended(){
    const dayToYear = averageYear / (12*365);
    const hourToYear = averageYear / (12*365*24);
    const minutesToYear = averageYear / (12*365*24*60);
    let spendTime =0;
    for( let i=0; i< seriesDurations.length; i++){
    spendTime = (seriesDurations[i].days * dayToYear) + (seriesDurations[i].hours * hourToYear) + (seriesDurations[i].minutes * minutesToYear);
    const lifePercentage = (spendTime * 100) /averageYear;

    if(seriesDurations[i].title ==="Game of Thrones"){
        return seriesDurations[i].title +" took " + lifePercentage +" % of my life!"
       // const lifePercentage = (spendTime * 100) /averageYear;
        //return 
       //  " Game of thrones took " + lifePercentage +" % of my life!"
        //const me = "Great";
    }
    else {
        console.log("Wrong entry!")
    }
    
    return seriesDurations[i].title +" took " + lifePercentage +" % of my life!"
}
}
console.log(lifeSpended());
console.log(lifeSpended());
console.log(lifeSpended());


           

//console.log(lifeSpended());



/*
function lifeSpend(){
    let year =1;
    const inMonths = year * 12;
    const inDays = year * 356;
    const inHours = years * 365 * 24;
    const inMinutes = years * 365 * 24 * 60;
    //const inSeconds = years * 365 * 24 * 60 * 60;

    //const monthsToYear = year / 12;
    
     
    if ( seriesDurations.title === "Game of thrones"){

    }
    else{
        console.log ("Wrong value !!!");
    }
    return Game;
}
console.log (seriesDurations.title === "Game of thrones");
*/
