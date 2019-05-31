
// ............Flightbooking full name function .......
function getFullName(firstName,sureName){
    console.log(firstName + ' ' +sureName);
}
getFullName('Benjamin','Hughes');

 // second step (getFullName Function)
 const fullName1 ={
    firstName : 'Rasmus',
    sureName : 'Rasmusen',
};
const fullName2 ={
    firstName : 'Benjamin',
    sureName : 'Hughes',
};
 function getFullName(person){
    let name = person.firstName + ' '+ person.sureName;
     return name;
 }
 getFullName(fullName1); //(fullName1 or Fullname2)

 //Third Step (boolean)

 const fullName1 ={
    firstName : 'Rasmus',
    sureName : 'Rasmusen',
 };
 const fullName2 ={
     firstName : 'Benjamin',
     sureName : 'Hughes',
 };
 let useFormalName = true; // True or False (Choise)
 function getFullName (person){
     let name = person.firstName + ' ' + person.sureName;
     if (useFormalName === true){ 
         return 'Lord ' + name;
     }
     else {
         return name;
     }
 }
 getFullName (fullName1); // fullName1 or FullName2 (Choise).
