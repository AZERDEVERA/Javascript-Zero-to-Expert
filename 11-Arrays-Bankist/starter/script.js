'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
};

const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};

const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};

const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements

const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function(movements) {
    containerMovements.innerHTML = '';
    movements.forEach(function(mov, i) {
        const type = mov > 0 ? 'deposit' : 'withdrawal';
        const html = ` 
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__value">${mov}€</div>
        </div>
        `;
        containerMovements.insertAdjacentHTML('afterbegin', html);
    });
};

displayMovements(account1.movements);

const createUsernames = function(acc) {
    acc.forEach(function(acc) {
        acc.username = acc.owner
            .toLowerCase()
            .split(' ')
            .map(name => name[0])
            .join('');
    });
};

createUsernames(accounts);
console.log(accounts);
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
    ['GBP', 'Pound sterling'],
]);

//foreach for maps
currencies.forEach(function(value, key, map) {
    console.log(`${key}: ${value}`);
});

//foreach for sets
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function(value, key, map) {
    console.log(`${key}: ${value}`);
});

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log('\n============FOR OF================\n');

for (const [i, movement] of movements.entries()) {
    movement > 0 ?
        console.log(`You deposited [${i}]${movement}`) :
        console.log(`You withdrew [${i}]${Math.abs(movement)}`);
}

console.log(
    '\n === === === FOREACH HIGHER ORDER FUNCTION === === === === === ===  \n'
);

movements.forEach(function(element, index, array) {
    if (element > 0) {
        console.log(`[for each] You deposited [${index}]:${element}`);
    } else {
        console.log(`[for each] You withdrew [${index}]:${Math.abs(element)}`);
    }
});
/////////////////////////////////////////////////

const juliaData = [3, 5, 2, 12, 7];
const kateData = [4, 1, 15, 8, 3];

// const juliaCorrectedData = juliaData.slice(1, 3);
// console.log(juliaCorrectedData);

// const juliaAndKateData = [...kateData, ...juliaCorrectedData];
// console.log(juliaAndKateData);

// juliaAndKateData.forEach(function(value, key) {
//     const dog =
//         value >= 3 ?
//         `${key} is an adult, and is ${value} years old` :
//         `${key} is still a puppy`;
//     console.log(`Dog number ${dog}`);
// });

const checkDogs = function(juliaDogs, kateDogs) {
    const juliaDogsCorrected = juliaDogs.slice();
    juliaDogsCorrected.splice(0, 1);
    juliaDogsCorrected.splice(-2);
    const juliaAndKateDogs = juliaDogsCorrected.concat(kateDogs);

    juliaAndKateDogs.forEach(function(dogAge, i) {
        const dog =
            dogAge >= 3 ?
            `${i} is an adult, and is ${dogAge} years old` :
            `${i} is still a puppy`;
        console.log(`Dog number ${dog}`);
    });
};

checkDogs(juliaData, kateData);

//data transformation using map
const eurToUsd = 1.1;
const newArray = movements.map(element => element * eurToUsd);
console.log(newArray);

const movementsDescriptions = movements.map(
    (mov, i) =>
    // return mov > 0 ?
    // console.log(`You deposited [${i + 1}]${mov}`) :
    // console.log(`You withdrew [${i + 1}]${Math.abs(mov)}`);

    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);

console.log(movementsDescriptions);

//using filter
const deposits = movements.filter(mov => mov > 0);
console.log(deposits);

//using for of
const depositFor = [];
for (const mov of movements)
    if (mov > 0) depositFor.push(mov);
console.log(depositFor);

const widrawals = movements.filter(mov => mov < 0);
console.log(widrawals);

// THIRD DATA TRANSFORMATION METHOD/HIGH ORDER FUNCTION

console.log(movements);
//accumulator is like a snowball
const balance = movements.reduce((acc, curr, i, arr) => acc + curr, 0);
console.log(balance);