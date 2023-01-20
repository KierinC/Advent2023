let calories = [];
let temp = 0;

// Read input from file
const fs = require('fs');
let array = fs.readFileSync('input.txt').toString().split("\n");
for(i in array) {
  array[i] = parseInt(array[i].replace('\r',''));
  if ((Number.isNaN(array[i]))) {
    calories.push(temp);
    temp = 0;
  } else {
    temp += array[i];
  }
  
  // calories[j] += array[i];
  // console.log(array[i]);
  // console.log(elfTotal);
}

  
// console.log(array);
console.log(calories);
calories.sort(compareNumbers);
console.log(calories[calories.length - 1] + calories[calories.length - 2] + calories[calories.length - 3]);
// Get sum of groupings of numbers and add them to 'calories' array
// Sort array to get highest sum first
// Print calories[0]

function compareNumbers(a, b) {
  return a - b;
}