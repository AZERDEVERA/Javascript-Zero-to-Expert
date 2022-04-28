// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/* const x = 23;

const calcAge = birthYear => 2037 - birthYear;
console.log(calcAge(1997)); */

/* const arr1 = [17, 21, 23];
const arr2 = [12, 5, -5, 0, 4];

const printForecast = arr => {
    let str = '';
    for (let i = 0; i < arr.length; i++) {
        str += `${arr[i]}C in ${i + 1}days...`;
    }
    console.log(`...${str}`);
};

printForecast(arr1); */

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 2];
const arr1 = [3, 4, 5, 6, 9, 8, 1, 2, 7, 0];

//(123) 456-789

const convertPhoneNumberFormat = arr => {
    let str = '(';
    for (let i = 0; i < arr.length; i++) {
        if (i === 2) {
            str += `${arr[i]}) `;
        } else if (i === 5) {
            str += `${arr[i]}-`;
        } else {
            str += `${arr[i]}`;
        }
    }
    return str;
};

console.log(convertPhoneNumberFormat(arr));
console.log(convertPhoneNumberFormat(arr1));