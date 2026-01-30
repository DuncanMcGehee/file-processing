const fs = require('fs');

// Read ALL files and analyze in seconds

const fileName = `sample-numbers.txt`;
const content = fs.readFileSync(`./data/${fileName}`, 'utf8');
// Process each response automatically

function sumNumbers(text) {
    if (typeof text !== 'string') {
        throw new Error('Input must be a string');
    }
    return text.trim().split(/\s+/).reduce((sum, num) => sum + parseFloat(num), 0);
}

function highestAndLowest(text) {
    if (typeof text !== 'string') {
        throw new Error('Input must be a string');
    }
    const numbers = text.trim().split(/\s+/).map(num => parseFloat(num));
    return {
        highest: Math.max(...numbers),
        lowest: Math.min(...numbers)
    };
}

function averageNumber(text) {
    if (typeof text !== 'string') {
        throw new Error('Input must be a string');
    }
    const numbers = text.trim().split(/\s+/).map(num => parseFloat(num));
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
}

/*console.log('Summing numbers in text', sumNumbers(content));
console.log('Finding highest and lowest numbers in text', highestAndLowest(content));
console.log('Calculating average of numbers in text', averageNumber(content));
*/
module.exports = {
    sumNumbers,
    highestAndLowest,
    averageNumber
};