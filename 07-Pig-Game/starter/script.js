'use strict';

/* const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const phoneNumberFormat = arr => {
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

console.log(phoneNumberFormat(arr)); */

function alphabetPosition(text) {
    const alphabet = [
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'm',
        'n',
        'o',
        'p',
        'q',
        'r',
        's',
        't',
        'u',
        'v',
        'w',
        'x',
        'y',
        'z',
    ];
    let str = "'";

    for (let j = 0; j < text.length; j++) {
        alphabet.find(element => {
            if (element.includes(text[j])) {
                for (let i = 0; i < alphabet.length; i++) {
                    if (alphabet[i] === text[j]) str += `${i + 1} `;
                }
            }
        });
    }

    return str;
}

console.log(alphabetPosition("the sunset sets at twelve o' clock."));