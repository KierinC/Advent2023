let calories = [];
let j = 0;

// Read input from file
const fs = require('fs');
let array = fs.readFileSync('input.txt').toString().split("\n");
for(i in array) {
  // console.log(array[i]);
  array[i] = parseInt(array[i].replace('\r',''));
  if (!(array[i] >= 0)) {
    // calories.push(elfTotal);
    j++;
    // console.log(j);
  }
  // elfTotal += array[i];
  calories[j] += array[i];
  // console.log(array[i]);
  // console.log(elfTotal);
}
console.log(calories);
// Get sum of groupings of numbers and add them to 'calories' array
// Sort array to get highest sum first
// Print calories[0]