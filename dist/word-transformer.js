"use strict";
const reverseWord = (word) => word.split('').reverse().join('');
const capitalizeWord = (word) => word.toUpperCase();
const repeatWord = (word, times) => word.repeat(times);
// catered for swedish - feel free to change 😊
const countVowels = (word) => (word.match(/[aeiouyåäö]/gi) || []).length;
const transformWord = (operation, word, param) => {
    switch (operation) {
        case 'reverse':
            return reverseWord(word);
        case 'capitalize':
            return capitalizeWord(word);
        case 'repeat':
            if (param === undefined || isNaN(param)) {
                throw new Error("Param must be a valid number for 'repeat' operation.");
            }
            return repeatWord(word, param);
        case 'countVowels':
            return countVowels(word);
        default:
            return "Invalid operation";
    }
};
const runTransformation = () => {
    const wordInput = document.getElementById('word');
    const operationInput = document.getElementById('operation');
    const paramInput = document.getElementById('param');
    const resultContainer = document.getElementById('result');
    const word = wordInput.value;
    const operation = operationInput.value;
    const param = parseInt(paramInput.value);
    try {
        const result = transformWord(operation, word, param);
        resultContainer.textContent = `Result: ${result}`;
        resultContainer.classList.toggle('active', result !== '');
    }
    catch (error) {
        resultContainer.textContent = `Error: ${error.message}`;
        resultContainer.classList.add('error');
    }
};
// Show/hide param input based on selected operation
document.getElementById('operation').addEventListener('change', function () {
    const paramContainer = document.getElementById('paramContainer');
    paramContainer.classList.toggle('active', this.value === 'repeat');
});
// Event listener for transform button
document.getElementById('transformButton').addEventListener('click', runTransformation);
//# sourceMappingURL=word-transformer.js.map