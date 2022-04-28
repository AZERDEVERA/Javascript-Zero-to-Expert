'use strict';


// //Function Declaration
// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }

// const age = calcAge1(1991);
// console.log(age);


// // Function Expression , Produce a value
// const calcAge2 = function(birthYear) {
//     return 2037 - birthYear;
// }

// const age2 = calcAge2(1991);

// console.log(age, age2);

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }


// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);
//     const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces}
//     pieces of oranges.`;
//     return juice;
// }

// console.log(fruitProcessor(2, 3));

// const calcAge = function(birthYear) {
//     return 2037 - birthYear;
// }


// const yearUntilRetirement = function(birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if (retirement > 0) {
//         return `${firstName} retires in ${retirement} years`;
//     } else {
//         console.log(`${firstName} has already retired`);
//         return -1;

//     }
// }

// console.log(yearUntilRetirement(1991, 'azer'));
// console.log(yearUntilRetirement(1950, 'jam'));


// const calAverage = (a, b, c) => (a + b + c) / 3;

// let scoreDolphins = calAverage(44, 23, 71);
// let scoreKoalas = calAverage(65, 54, 49);



// const checkWinner = function(avgDolphinsTeam, avgKoalasTeam) {
//     if (avgDolphinsTeam >= avgKoalasTeam * 2) {
//         console.log(`Dolphins win ${avgDolphinsTeam} vs ${avgKoalasTeam}`);
//     } else if (avgKoalasTeam >= avgDolphinsTeam * 2) {
//         console.log(`Koalas win ${avgKoalasTeam} vs ${avgDolphinsTeam}`);
//     } else {
//         console.log(`Draw`);
//     }
// }

// checkWinner(scoreDolphins, scoreKoalas);


// scoreDolphins = calAverage(85, 54, 41);
// scoreKoalas = calAverage(23, 34, 27);
// checkWinner(scoreDolphins, scoreKoalas);




// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = 'Peter';


// //literal syntax
// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);


// const years = new Array(1991, 1984, 2008, 2020);
// console.log(friends[0]);



// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(tips);

// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(total);

//object literal syntax


// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     job: 'teacher',
//     age: 2037 - 1991,
//     friends: ['Michael', 'Peter', 'Steven']
// }

// console.log(jonas.lastName);
// console.log(jonas['lastName']);

// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]);
// console.log(jonas['last' + nameKey]);

// const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastname, age, job, and friends');
// if (jonas[interestedIn]) {
//     console.log(jonas[interestedIn]);
// } else {
//     console.log('Wrong request !')
// }


// jonas.location = 'Portugal';
// jonas['twitter'] = '@jonasschmedtman';
// console.log(jonas);


// console.log(`${jonas['firstName']} has ${jonas.friends.length} 
// friends, and his best friend is called ${jonas.friends[0]}`);


/* const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    job: 'teacher',
    birthYear: 1991,
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: false,

    // calcAge: function(birthYear) {
    //     return 2037 - this.birthYear;
    // }

    getSummary: function() {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`
    },


    calcAge: function() {
        this.age = 2037 - this.birthYear;
        return this.age;
    }

}
console.log(jonas.calcAge()); 

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

console.log(jonas.getSummary()); */


/* const markMass = 95;
const markHeight = 1.88;
const johnMass = 85;
const johnHeight = 1.76;


const BMI = function(mass, height) {
    let result = (mass / height ** 2);
    return result.toFixed(2);
}


const markBMI = BMI(markMass, markHeight);
const johnBMI = BMI(johnMass, johnHeight);
console.log(markBMI, johnBMI);

const markHigherBMI = function(markBmi, johnBmi) {
    return (markBmi > johnBmi) ? `mark has higher BMI` : `john has higher BMI`;
}

console.log(`Marks weights ${markMass}kg and is ${markHeight}m tall, BMI: ${markBMI}. John weights ${johnMass}kg and is ${johnHeight}m tall, BMI: ${johnBMI}.`);
console.log(markHigherBMI(markBMI, johnBMI)); */


/* const mark = {
    fullname: 'Mark Miller',
    mass: 78,
    weight: 1.69,
    calcBMI: function() {
        this.bmi = (this.mass / this.weight ** 2).toFixed(2);
        return this.bmi;
    }
}

const john = {
    fullname: 'John Smith',
    mass: 92,
    weight: 1.95,
    calcBMI: function() {
        this.bmi = (this.mass / this.weight ** 2).toFixed(2);
        return this.bmi;
    }
}
john.calcBMI();
mark.calcBMI();

console.log(john.bmi, mark.bmi);

if (john.bmi > mark.bmi) {
    console.log(`${john.fullname}'s BMI(${john.bmi} is higher than ${mark.fullname}'s (${mark.bmi})`);
} else if (mark.bmi > john.bmi) {
    console.log(`${mark.fullname}'s BMI(${mark.bmi} is higher than ${john.fullname}'s (${john.bmi})`);
} else {
    console.log(`Equal`);
} */


/* const jonasArray = [
    'Jonas',
    'de Vera',
    2037 - 1991,
    'teacher', ['michael', 'peter', 'Steven'],
    true
];

const types = [];

for (let i = 0; i < jonasArray.length; i++) {
    //Reading form jonas array
    console.log(`${jonasArray[i]}`, typeof jonasArray[i]);
    //filling types array
    // types[i] = typeof jonasArray[i];

    types.push(typeof jonasArray[i]);

}

console.log(types);


const years = [1991, 2007, 1969, 2020];
const age = [];

for (let i = 0; i < years.length; i++) {
    age.push(2037 - years[i]);
}

console.log(age); */



const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
let totals = [];

const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(bills[i] + tip);
}

console.log(bills, tips, totals);



const calcAvarage = (arr) => {

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum / arr.length;
}

console.log(calcAvarage(totals));
console.log(calcAvarage(tips));