let points = 0

// Read input from file
const fs = require('fs')
let array = fs.readFileSync('input.txt').toString().split("\n")

// Part 1

// A = Rock 1
// B = Paper 2
// C = Scissors 3

// X = Rock 1
// Y = Paper 2
// Z = Scissors 3

// Loss = 0
// Tie = 3
// Win = 6

/*
for(i in array) {
  array[i] = array[i].replace('\r','')
  console.log(array[i])

  if (array[i] === 'A X') {
    points += 4
  }

  if (array[i] === 'A Y') {
    points += 8
  }

  if (array[i] === 'A Z') {
    points += 3
  }

  if (array[i] === 'B X') {
    points += 1
  }

  if (array[i] === 'B Y') {
    points += 5
  }

  if (array[i] === 'B Z') {
    points += 9
  }

  if (array[i] === 'C X') {
    points += 7
  }

  if (array[i] === 'C Y') {
    points += 2
  }

  if (array[i] === 'C Z') {
    points += 6
  }
}
*/


// Part 2

// A = Rock 1
// B = Paper 2
// C = Scissors 3

// X = Loss
// Y = Tie
// Z = Win


for(i in array) {
  array[i] = array[i].replace('\r','')
  console.log(array[i])

  if (array[i].includes('X')) {
    points += 0

    if (array[i].includes('A')) {
      points += 3
    }
    if (array[i].includes('B')) {
      points += 1
    }
    if (array[i].includes('C')) {
      points += 2
    }
  }

  if (array[i].includes('Y')) {
    points += 3

    if (array[i].includes('A')) {
      points += 1
    }
    if (array[i].includes('B')) {
      points += 2
    }
    if (array[i].includes('C')) {
      points += 3
    }
  }

  if (array[i].includes('Z')) {
    points += 6

    if (array[i].includes('A')) {
      points += 2
    }
    if (array[i].includes('B')) {
      points += 3
    }
    if (array[i].includes('C')) {
      points += 1
    }
  }
}

console.log('Total Points: ' + points)