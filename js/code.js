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
// let grade = 65;
// switch(true) {
//     case grade == 100:
//         console.log("You are awesome");
//         break;
//     case (grade >= 90) &&(grade <=99):
//         console.log("well done");
//         break;
//     case (grade >=75)&&(grade<=89):
//         console.log("Distinction");
//         break;
//     case (grade >=50)&&(grade<=74):
//         console.log("pass");
//         break;
//     case (grade<=49):
//         console.log("dom nhai");
//         break;
//     default:
//         console.log("Out of order");
// }
// if (grade == 100){
//     console.log("You are awesome");
// }else if(grade >=100 && grade <=99){
//     console.log("well Done!");
// } else if(grade >=75 && grade <=89){
//     console.log("Distinction");
// }else if(grade >=50 && grade<=74){
//     console.log("Pass");
// }else if(grade<=49){
//     console.log("fail");
// }else {
//     console.log("Dom nhai");
// }

//Loops
// let numbers =[8, 9, 3, 12, 34];
// for(let numb in numbers){
//    console.log(numb); //display the positions
// }
// let people = {
//     fName : 'Mkhuseli',
//     surname : 'Mkeyiya',
//     email : '17mkhmke@gmail.com'
// }
// for (let p in people) {
//     console.table((`${p} = ${people[p]}`));
// }

//for of
// for (let numb of numbers){
//     console.log(numb);
// }
// console.table(numbers); //display the numbers stored in the array

//for loop
// for (let i=0; i<=10; i++){
//    document.write("Well Done"+"<br/>")
// }

// let cnt = 0;
// while(cnt < numbers.length){
//     console.log(`Step: ${numbers[cnt]}`);
//     cnt++;
// }
// do{
//     console.log(`Step: ${numbers[cnt]}`);
//     cnt++;
// }while(cnt < numbers.length);

//functions
// function addition(numb1, numb2){
//     console.log(`Sum of ${numb1} + ${numb2} = ${numb1 + numb2}`);
// }
// addition(2, 7);
// addition(3, 4);
// addition(5, 7);
// let addition = function calc(numb1, numb2) {
//     console.log(`calculate: ${numb1} + ${numb2} = ${numb1 + numb2}`);
// }
// addition(5, 3);
// addition(5, 7);
// addition(5, 12);
// let subtraction = function (numb1, numb2){
//     return numb1 - numb2;
    
// }
// console.log(subtraction(7,3));

// Ternary operator
// let appearance = 'big bhunda';
// console.log(appearance == 'big bhunda' ? "Smash" : "Pass");



//rest operator
// function sumOf(...args){
//     return args.reduce( (a,b)=>{
//       return  a + b
//     })
// }
// console.log(sumOf(1, 2, 3, 4, 5));

//Constructor function
// function Person(...details){                         //rest operator used 
//     this.firstName = details[0];
//     this.lastName = details[1];
//     this.email = details[2];
//     this.cellNum = details.at(-1)

// }
// let person1 = new Person("Avela", "Ntlangano", "17aventl@gmail.com", "0672094209")
// console.table(person1);

// constructor function
// function PersonDets () {
//     this.firstName = 'Mkhuseli',
//     this.lastName = 'Mkeyiya',
//     this.email = '17mkhmke@gmail.com'

// }

// // create an object
// const person1 = {
//     firstName : 'ntokozo',
//     get getName(){
//         return this.firstName;
//     }
    
//     firstName : 'ntokozo',
//     get getName(){
//         return this.firstName;
//     }
  
    
// }
// Solution2 getters and setters
// function PersonDetails(firstName, lastName, 
//     email) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.email = email;

//     this.getFirstName = ()=> {
//         return this.firstName
//     }
//     this.setFirstName = (value) =>{
//         this.firstName = value;
//     }
//     this.getLastName = ()=> {
//         return this.lastName
//     }
//     this.setLastName = (value) =>{
//         this.lastName = value;
//     }
//     this.getEmail = ()=> {
//         return this.email
//     }
//     this.setEmail = (value) =>{
//         this.email = value;
//     }    
    
//     this.display = ()=> {
//         return `
//         Name: ${this.getFirstName()}
//         Surname: ${this.getLastName()}
//         Email: ${this.getEmail()}`;
//     }
// } 
// let person1 = new PersonDetails("Peter", "Henk",
// "peter@gmail.com");
// console.log(person1.display());
// console.log("=============");
// person1.setFirstName("Sarah");
// person1.setLastName("James");
// person1.setEmail("sarah@gmail.com");
// console.log(person1.display());

//onclick
// function addition(e){
//     e.preventDefault();
//     let numb1 = document.querySelector("#numb1").value;
//     let numb2 = document.querySelector("#numb2").value;
//     // document.querySelector('#output').innerText = eval(`${numb1} + ${numb2}`);
//     document.querySelector('#output').innerText = 
//     parseInt(numb1) + parseInt(numb2);
// }

//addEventListener
let btnAddition = document.querySelector('button');
btnAddition.addEventListener('click', (e)=>{
    e.preventDefault();
    let numb1 = document.querySelector("#numb1").value;
    let numb2 = document.querySelector("#numb2").value;
    document.querySelector('#output').innerText = parseInt(numb1) + parseInt(numb2);
})