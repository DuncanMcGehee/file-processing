const fs = require('fs');

// Read ALL files and analyze in seconds

const fileName = `sample-text.txt`;
const content = fs.readFileSync(`./data/${fileName}`, 'utf8');
// Process each response automatically

function countWords(text) {
    if (typeof text !== 'string') {
        throw new Error('Input must be a string');
    }
    const trimmed = text.trim();
    if (trimmed === '') return 0;
    return trimmed.split(/\s+/).length;
}

function longestWord(text) {
    if (typeof text !== 'string') {
        throw new Error('Input must be a string');
    }
    const words = text.trim().split(/\s+/);
    return words.reduce((longest, word) => word.length > longest.length ? word : longest, '');
}

function countLines(text) {
    if (typeof text !== 'string') {
        throw new Error('Input must be a string');
    }
    return text.trim().split('\n').length;
}
/*
console.log('Counting lines in text', countLines(content));
console.log('Counting words in text', countWords(content));
console.log('Finding longest word in text', longestWord(content));
*/

module.exports = {
    countWords,
    longestWord,
    countLines
};