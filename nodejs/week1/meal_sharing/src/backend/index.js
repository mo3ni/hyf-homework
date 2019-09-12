// const express = require('express');
// const call = express();

// const meal = require('./router/meal.js');
// const cheap_meals = require('./router/cheap_meals.js');
// const large_meals = require('./router/large_meals.js');
// const random_meal = require('./router/random_meal.js');
// const reservations = require('./router/reservations.js');
// const random_reservation = require('./router/random_reservation.js');

// const server = call.listen(8080,function(){
//     console.log('server listening to port 8080');
    
// });

const express = require('express');
const call = express();

const mealRouter = require('./router/meal.js');
call.get('/meal',mealRouter);
const cheap_mealsRouter = require('./router/cheap_meals.js');
call.get('cheap_meals',cheap_mealsRouter);
const large_mealsRouter = require('./router/large_meals.js');
call.get('large_meals',large_mealsRouter);
const random_mealRouter = require('./router/random_meal.js');
call.get('random_meal',random_mealRouter);
const reservationsRouter = require('./router/reservations.js');
call.get('reservations',reservationsRouter);
const random_reservationRouter = require('./router/random_reservation.js');
call.get('random_reservation',random_reservationRouter);

const server = call.listen(8080,function(){
    console.log('server is listening to port 8080');
});