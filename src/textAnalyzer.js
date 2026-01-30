const fs = require('fs');

// Read ALL files and analyze in seconds
for (let i = 1; i <= 100; i++) {
      const fileName = `sample-text${i.toString().padStart(3, '0')}.txt`;
      const content = fs.readFileSync(`./survey-responses/${fileName}`, 'utf8');
      // Process each response automatically
}

function countWords(text) {
    if (typeof text !== 'string') {
        throw new Error('Input must be a string');
    }
    return text.trim().split(/\s+/).length;
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

console.log('Counting lines in text', countLines(content));
console.log('Counting words in text', countWords(content));
console.log('Finding longest word in text', longestWord(content));