const numberProcessor = require('../src/numberProcessor');

test ('sumNumbers correctly sums numbers in a string', () => {
    const input = '1 2 3 4.5';
    const result = numberProcessor.sumNumbers(input);
    expect(result).toBe(10.5);
});

test ('highestAndLowest correctly identifies highest and lowest numbers', () => {
    const input = '3';
    const result = numberProcessor.highestAndLowest(input);
    expect(result).toEqual({ highest: 3, lowest: 3 });
});

test ('averageNumber correctly calculates the average of numbers', () => {
    const input = '';
    const result = numberProcessor.averageNumber(input);
    expect(result).toBeNaN(); // Expecting NaN for empty input
});

test ('sumNumbers throws error for non-string input', () => {
    expect(() => {
        numberProcessor.sumNumbers(123);
    }).toThrow('Input must be a string');
});