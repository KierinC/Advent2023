let sum = 0
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
let usedLetter = ''

// Read input from file
const fs = require('fs')
const array = fs.readFileSync('input.txt').toString().split("\n")
console.log(array.length)

const ltrPriority = (letter) => {
  return letters.indexOf(letter) + 1
}

for (i in array) {
  array[i] = array[i].replace('\r','')
  console.log(array[i])

  let firstHalf = array[i].substring(0, array[i].length / 2)
  let secondHalf = array[i].substring(array[i].length / 2)

  usedLetter = ''

  for (j in firstHalf) {
    if (secondHalf.includes(firstHalf[j]) && !usedLetter.includes(firstHalf[j])) {
      sum += ltrPriority(array[i][j])
      // console.log('First letter:', array[i][j], 'Second letter:', array[i][l])
      console.log('Sum:', sum)
      usedLetter += firstHalf[j]
    }
  }
}

// for (i in array) {
//   array[i] = array[i].replace('\r','')
//   console.log(array[i])
//   usedLetter = ''
//   for (j = 0; j < (array[i].length / 2) - 1; j++) {
//     for (l = (array[i].length / 2); l < array[i].length; l++) {
//       if (array[i][j] === array[i][l] && !usedLetter.includes(array[i][j])) {
//         sum += ltrPriority(array[i][j])
//         console.log('First letter:', array[i][j], 'Second letter:', array[i][l])
//         console.log('Sum:', sum)
//         usedLetter += array[i][j]
//       }
//     }
//   }
// }

// for (i in letters) {
//   console.log(letters[i], ': ', ltrPriority(letters[i]))
// }

console.log('Sum of all priorities:', sum)