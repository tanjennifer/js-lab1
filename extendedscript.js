// Write a script that starts with two variables: hours and wage. Then write the code to log the total paycheck based on the 
// hours worked and the wage ($ per hour). If the hours worked is over 40, give 150% pay for the extra hours worked. Try running 
// it with a few different values for hours and wage. Here are some examples…

// Next, if this person got the same paycheck every week, count how many weeks it would take them to earn $1,000,000. Give the 
// answer as a whole number. For example, with wage=10 and hours=50 it would take 1819 weeks.



//Write a script that starts with two variables: hours and wage.
const wage = 10;
const hours = 50;
let paycheckHW = null;

// If the hours worked is over 40, give 150% pay for the extra hours worked.
if(hours > 40){
    paycheckHW = wage * 40; // paycheck for normal wage, 40 hours
    
    // adds overtime pay for extra hours
    const extraHours = hours - 40;    
    const overTimePay = extraHours * wage * 1.5;
    paycheckHW += overTimePay;

}
else{
    paycheckHW = wage * hours;  // no overtime pay
}

//Then write the code to log the total paycheck based on the hours worked and the wage ($ per hour). 
console.log(paycheckHW);
const weeksToMillion = 1000000 / paycheckHW;
console.log(weeksToMillion)








