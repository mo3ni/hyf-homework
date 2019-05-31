//...... Weather Event......
const clothes = ['Jacket & Jeans','Pants & Overalls','raincoats & umbrella','Shorts & T-shirt'];

    function clothesToWear(temperature){
      if(temperature <=5 ){
       return clothes[0];
        }
        else if(temperature <=10 && temperature >5){
          return clothes[1];
        }
        else if(temperature <=20 && temperature >10){
          return clothes[2];
        }
        else if( temperature >20){
          return clothes[3];

        }
        else{
            return ('you should wear something!!!');

        }
  
    } 
    clothesToWear(3); 