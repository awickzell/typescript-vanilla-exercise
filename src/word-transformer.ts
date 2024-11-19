const reverseWord = (word: string) => word.split('').reverse().join('');

const capitalizeWord = (word: string): string => word.toUpperCase();

const repeatWord = (word: string, times: number): string => word.repeat(times);

// catered for swedish - feel free to change 😊
const countVowels = (word: string) => (word.match(/[aeiouyåäö]/gi) || []).length;

type Operation = 'reverse' | 'capitalize' | 'repeat' | 'countVowels';

const transformWord = (operation: Operation, word: string, param?: number): string | number => {
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

const runTransformation = (): void => {
  const wordInput = document.getElementById('word') as HTMLInputElement;
  const operationInput = document.getElementById('operation') as HTMLSelectElement;
  const paramInput = document.getElementById('param') as HTMLInputElement;
  const resultContainer = document.getElementById('result') as HTMLDivElement;

  const word = wordInput.value;
  const operation = operationInput.value as Operation;
  const param = parseInt(paramInput.value);

  try {
    const result = transformWord(operation, word, param);
    resultContainer.textContent = `Result: ${result}`;
    resultContainer.classList.toggle('active', result !== '');
  } catch (error) {
    resultContainer.textContent = `Error: ${(error as Error).message}`;
    resultContainer.classList.add('error');
  }
};

// Show/hide param input based on selected operation
document.getElementById('operation')!.addEventListener('change', function () {
  const paramContainer = document.getElementById('paramContainer') as HTMLDivElement;
  paramContainer.classList.toggle('active', (this as HTMLSelectElement).value === 'repeat');
});

// Event listener for transform button
document.getElementById('transformButton')!.addEventListener('click', runTransformation);
