//............. Student Manager........
const class07Students = [];

function addStudentToClass(studentName) {
    
    let massage = '';
     if (getNumberOfStudents() > 6) {
         massage =' More than 6 person is not allowed ';
     } 
     else if (studentName === "queen") {
        class07Students.push("queen");
        massage =' Seat for queen is always avialable ';
    }
     else if (studentName === "") {
         massage = ' not empty value is allowed ! ';
    } 
    else if (duplicateValue(studentName)) {
        massage = ' There is the same name in Stock !! ';
    } 
    else {
        class07Students.push(studentName);
        massage = studentName + ' Added to class !';
      
    }
    return massage;
}
function getNumberOfStudents() {
    return class07Students.length;
}

function duplicateValue(studentName) {
    for (let i = 0; i < getNumberOfStudents(); i++) {
        if (class07Students[i] === studentName) {
            return true;
        } else {
            return false;
        }
    }
}

console.log(addStudentToClass("Benjamin"));
console.log(addStudentToClass("Rasmus"));
console.log(addStudentToClass("Rasmus"));
console.log(addStudentToClass(""));

