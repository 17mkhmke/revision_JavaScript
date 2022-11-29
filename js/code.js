//math method
// console.log("pow(2,5) or 2^5: ", Math.pow(2,5));
// Array
// let data = [7, 3, 2, "Mkhura", 17,  21];
//data.splice(3,1); use it if only one string 
// let numbersOnly = data.filter(Number); //use this if there is more than one string
// console.log("Max: ",Math.max(...numbersOnly));
// let size = data.length - 1;
// console.log("Array size: ", size);
// console.log("Element ", data[size]);  
// console.log("alt(): ", data.at(-1));
// console.log(data);
// let middleElement=Math.trunc((data.length-1)/2);
// if(middleElement % 2 == 0){
//     console.log("esphakathini : ", data.slice(middleElement, middleElement + 2)); //only the number
// }else{
//     console.log("Middle Element: ", middleElement);
// } 


//display string only
// let stringOnly= data.filter(item =>{
//     if (typeof item != 'number')
//     return item
// }); 
// console.log(stringOnly);

//string methods
// let sentence = "I love programming";
// console.log(sentence[0]);//display the first letter
// console.log(sentence.split('')); //separates everything 
// console.log(sentence.split(' ')); //separates words that are separated by spaces

//date method
// let myDate = new Date("2022/11/28");   //displaying yesterday's date
// console.log("My date: ", myDate.toLocaleDateString());

//if statement
// let age =17;
// if(age >= 17) {
//     console.log("Smash");
// }else {
//     console.log("don't smash");
// }

//Nested if statement
// let age = 21;
// let salary = 5000;
// if(age > 17){
//     if(salary >= 5000){
//         console.log("well done");
//     }
//     else{
//         console.log("You're not qualified");
//     }
// }
// if((age > 17) || (salary>5000)) {           //make use of logical operators 
//     console.log("well done");
// }else {
//     console.log("Thank you for coming.");
// }

//switch statement
// let monthInt = 5;
// switch(monthInt) {
//     case 1:
//         console.log("January");
//     break;
//     case 2:
//         console.log("February");
//     break;
//     default:
//         console.log(1 + 2);
// }
let grade = 35;
switch(true) {
    case grade == 100:
        console.log("You are awesome");
        break;
    case (grade >= 90) &&(grade <=99):
        console.log("well done");
        break;
    case (grade >=75)&&(grade<=89):
        console.log("Distinction");
        break;
    case (grade >=50)&&(grade<=74):
        console.log("pass");
        break;
    case (grade<=49):
        console.log("dom nhai");
        break;
    default:
        console.log("Out of order");
}