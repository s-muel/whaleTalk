let input = 'turpentine and turtles';
const vowels = ['a', 'e', 'i', 'o', 'u'];
const resultArray = [];
// loop to iterate vowels
for(let i = 0; i < input.length; i++) {
  //loop to iterate input
  for(let j = 0; j < vowels.length; j++) {
    // comparing input and vowels for similar characters
    if (input[i] === vowels[j]) {
      resultArray.push( vowels[j]);
      // pushing e and u twice to array
        if (input[i] === 'e' || input[i] === 'u'){
    resultArray.push(input[i]);
  }
    }
  }
};
// log the output to the console
console.log(resultArray.join('').toUpperCase());
