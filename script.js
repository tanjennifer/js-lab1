"use strict";

const fullName = "Jennifer Tan";
// console.log(fullName);
let age = 29;
const birthday = "March 31";
const pineapplePizza = false;
const lifeEvents = [
    "Went to my first concert in 2014", 
    "Had 15 ear piercings at one point.",
    "Got braces in my mid 20s.", 
    "Finally visited Las Vegas in 2023."]


// used back ticks and ${ } for template literal
//else only - all other conditions failed
if (pineapplePizza === true) {
    console.log(`My name is ${fullName} and I like pineapples on pizze. 
    I am currently ${age} years old and my birthday is on ${birthday}.`);
} else {
    console.log(`My name is ${fullName} and I'm not into pineapples on pizza. 
    I am currently ${age} years old and my birthday is on ${birthday}.`);
}


// for (let i = 0; i < 4; i++) {} --- length
// if (i === 0);
// console.log(lifeEvent[0]);   --- console.log(lifeEvents[i]);
// array : length; up to that number and one less than it; last index is always one less than the length
for (let i = 0; i < lifeEvents.length; i++) {
    console.log(lifeEvents[i]);
  }





    //if random # is not equal to 5; !==
let counter = 0;
while (true) {
    //Math.floor(Math.random()*(max-min+1))+min
    //in our case; range/max=10, min=1
    //math.floor rounds things
    //declaring randomNumber to a random integer of 1-10
    //while loop while its true
    //reminder to have "break" somewhere since this is an infinite loop
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    console.log(randomNumber);
    if (randomNumber !== 5) {
        // counter = counter + 1
        // counter += 1
        counter++;
        // console.log("randomNumber !== 5");
        console.log(`${randomNumber} !== 5`);
    } else {
        // means that randomNumber === 5
        counter++;
        console.log(`5 === 5. It took ${counter} iterations to randomly generate the number 5.`);
        break;
    }

}




