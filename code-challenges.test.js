// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

describe('shuffleArray', () => {
  it('takes in an array, removes the first item from the array and shuffles the remaining content.', () => {
    const colors1 = ["purple", "blue", "green", "yellow", "pink"]
    const colors2 = [
  "chartreuse",
  "indigo",
  "periwinkle",
  "ochre",
  "aquamarine",
  "saffron"
]
    expect(shuffleArray(colors1)).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]));
    expect(shuffleArray(colors2)).toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]));
  });
});

// Fail 
// ReferenceError: shuffleArray is not defined

// b) Create the function that makes the test pass.
// Psedocode
// input: array
// output: an array with the first item removed and the remaining contents shuffled
// process: I will create a function called shuffleArray that will shift the array to remove the first value, then shuffle the array using the Fisher-Yates Shuffle that I researched. The Fisher-Yates Shuffle algorithm performs swapping a random element in the array with the last element in the array over and over again. It selects a random index number in the given array and swaps that element with the last index element. It does it again, but leaves the previous element out of selection.

const shuffleArray = (array) => {
  array.shift()
  let currentIndex = array.length, randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = 
    [array[randomIndex], array[currentIndex]]
  }
  return array
}
// PASS  ./code-challenges.test.js
// shuffleArray
// ✓ takes in an array, removes the first item from the array and shuffles the remaining content. (3 ms)

// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.
describe("sumValues", () => {
  it("takes in an object that contains up votes and down votes and returns the end tally.", () => {
    const votes1 = { upVotes: 13, downVotes: 2 }
    // Expected output: 11
    const votes2 = { upVotes: 2, downVotes: 33 }
    // Expected output: -31

    expect(sumValues(votes1)).toEqual(11)
    expect(sumValues(votes2)).toEqual(-31)
  })
})

// Fail
// ReferenceError: sumValues is not defined

// b) Create the function that makes the test pass.
// Pseudocode
// input: objects of upvotes and downvotes
// output: the sum of the upvotes and downvotes
// process: I will create a function called sumValues that takes in the values of an object and returns the end tally. I will first use Object.values() to get an array of the object's values. Then I will use .reduce() to iterate over the array. I will subtract because I want the difference between the upvotes and downvotes.

const sumValues = (object) => {
  return Object.values(object).reduce((value1, value2) => {
    return value1 - value2
  })
}

// PASS  ./code-challenges.test.js
// sumValues
// ✓ that takes in an object that contains up votes and down votes and returns the end tally. (1 ms)

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

describe("newArray", () => {
  it("takes in two arrays as arguments and returns one array with no duplicate values.", () => {
    const dataArray1 = ["array", "object", "number", "string", "Boolean"]
    const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
    // Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]
    expect(newArray(dataArray1, dataArray2)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
  })
})

// Fail
// ReferenceError: newArray is not defined

// b) Create the function that makes the test pass.
// Pseudocode
// input: two arrays
// output: one array with no duplicate values
// process: I will create a function called newArray that will take in two arrays as arguments. Then I will create a variable called combinedArray that will add two arrays to a Set object using the spread operator. Since Set does not allow duplicates, only unique values get added into the combinedArray.

const newArray = (arr1, arr2) => {
  const combinedArray = [...new Set ([...arr1, ...arr2])]
  return combinedArray
}

// PASS  ./code-challenges.test.js
// newArray
// ✓ takes in two arrays as arguments and returns one array with no duplicate values.
