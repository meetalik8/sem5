// conditional
let age = (Math.floor(Math.random() *100));
if(age >=18){
    console.log("Eligible to vote");
} else {
    console.log(`Not eligible wait for ${18-age} years`);
}

let choice = (Math.floor(Math.random()*4));
switch (choice) {
  case 1:
    console.log("choice number 1");
    break;
  case 2:
    console.log("choice number 2");
    break;
  case 3:
    console.log("choice number 3");
    break;
  case 4:
    console.log("choice number 4");
    break;
}
// loops
for(let i=1; i<=3; i++){
    console.log(`Loop ran ${i} times`);
}
let people = ["Taylor", "Ella", "Jude", "Gio", "Kacey"];
for(let i in people){
    console.log(`${people[i]} is in the array`);
}
for(let person of people){
    console.log(`${person} is a celebrity`);
}

let money = [12,23,54,190], sum=0;
const earning = (paid)=>{
    sum+=paid;
}
money.forEach(earning);
console.log(`${sum} is the total earning`);
let i=1
do {
    console.log(`${i} time the loop ran`);
    i++;
} while (i<4)

//functions
function greet (name){
    console.log(`Hello ${name}!`)
}
greet("Meetali");
const add =(num1,num2)=>{
    let sum=num1+num2;
    return sum;
}
console.log(add(12,12));
const celeb = (...args)=>{
    console.log(args);
}
celeb(people);

const iterator = people[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

function *gen(){
    console.log("Meetali");
    yield 200;
    console.log("Taylor");
    yield 100;
}
