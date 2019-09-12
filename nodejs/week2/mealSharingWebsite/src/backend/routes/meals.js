const express = require("express");
const router = express.Router();

const meals = require("../data/meals.json");

router.get("/meals", function(req, res) {
 res.json(meals);
});




// week2 _______________________________________________________
router.get("/:id",function(req,res){
    const id= Number(req.params.id);
let filter;
const filteredId = meals.filter(meal => meal.id ===id);
if(filteredId.length <1){
    filter ="not in data base!";
} else{
    filter = filteredId;
}
    // res.render("meals",{
    //     js:getData(req.params.id)
    // });
    res.send("find By ID: "+ filter);
});
    // function getData (id) { 
    //     if(typeof id == "undefined") {
    //         return meals;
    //     }
    //     for(let i in json) { 
    //        if(meals[i].id == id) {
    //           return meals[id];
    //        }
    //     }
    //  }

    // console.log(req.params);
    // const UserId = req.params.id;
    // res.send("find By ID: "+ `${UserId}`);
// router.get("/meals/:id",function(req,res){
// meals.findAll().then((meals)=>{
//     res.send(`${req.params.id}`);
// });
// });

let requestedMeal = meals;

router.get("/",function(req,res,next){
    const arguemnets= {
        maxprice :req.query.maxprice,
        tilte :req.query.tilte,
        date: req.query.date,
        limit:req.query.limit
    }
    if(arguemnets.id === undefined){
        requestedMeal = "Undefined query, Please try again!"
    }
    if(arguemnets.length<1){
        res.status(400).send(" Bad requested! ")
    }
    if(arguemnets.tilte){
        requestedMeal = meals.filter(meal => meal.price< arguemnets.maxprice);
    }
    if(arguemnets.tilte){
        requestedMeal = meals.filter(meal=> meal.tilte.toLowerCase().trim()=== arguemnets.tilte.toLowerCase().trim());
    }
    if(arguemnets.date){
        requestedMeal = meals.filter (meal=>{
            return Date.parse(meal.createdAt)> Date.parse(arguemnets.date);
        });
    }
    if(arguemnets.limit){
        requestedMeal = meals.slice(0,arguemnets.limit);
        console.log(requestedMeal.length);
    }
    res.send(arguemnets);
});

module.exports = router;

