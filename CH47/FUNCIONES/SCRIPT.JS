//Return the value of what she should be paying. ejrcicio 1

/*function calcular(transactions, totalamount){
const fee = 3;
const interest = 0.01;

const totalcost = (totalamount * interest) + (transactions * fee );
return totalcost;}

let transactions = 20;
let totalamount = 500;
console.log (calcular(transactions, totalamount));*/

//exercise 2 part 1
/*function greet(name1, name2, name3) {
    console.log(`Hello ${name1}, ${name2}, ${name3}`);
}
greet("Karen", "Abigail", "Sánchez");

//part2
function Age(birth) {
    const current  = new Date().getFullYear();
    return current  - birth;
}
console.log(Age(1996,));*/

//part 3 no me salio esta parte

/**function greetWithAge(name, birth) {
    const Age = calculateAge(birth);
    console.log(`Welcome ${name}, you are ${Age}.`);
}

function greetWithAge(names, yearsbirth) {
    for (let i = 0; i < names.length; i++) {
        greetWithAge(names[i], yearsbirth[i]);
    }
}
let names = ["Karen", "Abigil", "Sánchez"];
let yearsbirth = [1996, 1997, 1998];
greetWithAge(names, yearsbirth)*/

//exercose 3 part1
/*function happens(score) {
    return score >= 5;
}
console.log(happens(10));
console.log(happens(3)); */

//part 2
function score(studentScore) {
    if (studentScore > 8) {
        console.log("Excellent");
    }
    return studentScore >= 5;
}
console.log(score(10)); 
console.log(score(6)); 

function PerfectScore(studentScore) {
    if (studentScore === 11) {
        console.log("Perfect");
    }
    return studentScore >= 5;
}
console.log(PerfectScore(11)); 
