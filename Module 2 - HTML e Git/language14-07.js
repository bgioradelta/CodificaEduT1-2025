const prompt = require('prompt-sync')();

function transformWords(input) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'y', 'A', 'E', 'I', 'O', 'U', 'Y'];
  
  return input.split(/\s+/).map(word => {
    let index = [...word].findIndex(letter => vowels.includes(letter));
    if (index === -1) return word + "ay"; // No vowel found
    let part1 = word.slice(0, index);
    let part2 = word.slice(index);
    return part2 + part1 + "ay";
  }).join(' ');
}

const userInput = prompt("Enter your words: ");
console.log(transformWords(userInput));
