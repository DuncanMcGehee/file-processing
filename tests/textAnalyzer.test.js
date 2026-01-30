const textAnalyzer = require('../src/textAnalyzer');

test ('countWords correctly counts words in a string', () => {
    const input = '';
    const result = textAnalyzer.countWords(input);
    expect(result).toBe(0);
});

test ('longestWord correctly identifies the longest word', () => {
    const input = 'The';
    const result = textAnalyzer.longestWord(input);
    expect(result).toBe('The');
});

test ('countLines correctly counts lines in a string', () => {
    const input = 'Line one\n \nLine three';
    const result = textAnalyzer.countLines(input);
    expect(result).toBe(3);
});