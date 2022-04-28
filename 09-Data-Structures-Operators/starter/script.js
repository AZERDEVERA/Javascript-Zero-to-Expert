'use strict';

// Data needed for a later exercise
const flights =
    '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
    [weekdays[3]]: {
        open: 12,
        close: 22,
    },
    [weekdays[4]]: {
        open: 11,
        close: 23,
    },
    [weekdays[5]]: {
        open: 0, // Open 24 hours
        close: 24,
    },
};
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    // ES6 enhanced object literals
    openingHours,
};

const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

//1.
for (const [i, player] of game.scored.entries())
    console.log(`Goal ${i + 1}: ${player}`);

//2.
let odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) {
    console.log(odd);
    average += odd;
}
average /= odds.length;
console.log(average);

//3.
for (const [team, odd] of Object.entries(game.odds)) {
    const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
    console.log(`Odd of ${teamStr} ${odd}`);
}

//--------------------SETS-----------------------

const ordersSet = new Set([
    'Pasta',
    'Pizza',
    'Pizza',
    'Risotto',
    'Pasta',
    'Pizza',
]);
console.log(ordersSet);
console.log(ordersSet.size);
console.log(new Set('Azer'));
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.add('Garlic Breed'));

for (const order of ordersSet) console.log(order);

//Example main use of set is to remove duplacated values in array
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

//How many different letter in my name
console.log(new Set('AzerHeginadeVera').size);

//---------------------------MAPS---------------------------------
//note: Maps are a lot more usefull than sets
//->map is a datastucture that we can use to map values to keys
//->just like in objects data is stored in key value pairs in maps
//-> the big difference is that in maps, the keys can have any type, in objects the keys is always string
//->in maps we can have any type of keys that can be OBJECTs or ARRAys or OTHER MAPS

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));
rest
    .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
    .set('open', 11)
    .set('close', 23)
    .set(true, 'We are open :D')
    .set(false, 'We are closed :(');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest);

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
console.log(rest.has('categories'));
rest.delete(2);
console.log(rest);
console.log(rest.size);
// rest.clear();

//USE ARRAY AS MAPS KEYS
const arr = [1, 2];
rest.set(arr, 'Test');
//USE OBJECT AS MAPS KEYS
// rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.get(arr));

//new way of populating maps
const question = new Map([
    ['question', 'What is the best programming language in the world?'],
    [1, 'C'],
    [2, 'Java'],
    [3, 'Javascript'],
    ['correct', 3],
    [true, 'Correct 🎉'],
    [false, 'Try again!'],
]);

console.log(question);

// CONVERT OBJECT TO MAPS
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// MAP IS ITERABLE
console.log(question.get('question'));
for (const [key, value] of question) {
    if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

// const answer = Number(prompt('Your answer'));
// console.log(question.get(question.get('correct') === answer));

// CONVERT MAP TO ARRAY
console.log(...question);
console.log(question.entries());
console.log(...question.keys());
console.log(...question.values());

//WHERE SHOULD I USE MAP? OBJECT?
//WHICH DATA STRUCTURE TO USE?

//CODING CHALLENGE
const gameEvents = new Map([
    [17, '⚽️ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽️ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🔶 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽️ GOAL'],
    [80, '⚽️ GOAL'],
    [92, '🔶 Yellow card'],
]);
//1.
const eventArray = gameEvents.values();
const uniqueEventArray = [...new Set(eventArray)];
console.log(uniqueEventArray);

//2.
gameEvents.delete(64);
console.log(gameEvents);

//3
const totalTime = [...gameEvents.keys()].pop();
console.log(totalTime);
console.log(`An event happend, on average, every ${totalTime / gameEvents.size} minutes`);


//4
for (const [key, value] of gameEvents) {
    const half =
        key <= 45 ? 'FIRST' : 'SECOND';
    console.log(`[${half} HALF] ${key}: ${value}`);
}