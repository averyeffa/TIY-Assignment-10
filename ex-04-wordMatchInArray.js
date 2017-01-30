
/**
 * Ex-04 : wordMatchInArray()
 *
 * Write a function called `wordMatchInArray` that takes 2 inputs: a string, and an array.
 * The function should return a boolean value if that word is found in the array.
 *
*/

var wordMatchInArray = function(inputStr, inputArray){
  if (inputArray.indexOf(inputStr) >= 0){
    return true;
  } else {
    return false;
  }
}

//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~
var sampleWordsArray = ["because", "girls", "just", "want", "to", "have", "fun"]

console.assert(wordMatchInArray('girls', sampleWordsArray) === true)
console.assert(wordMatchInArray('fun', sampleWordsArray) === true)
console.assert(wordMatchInArray('boys', sampleWordsArray) === false)

var sampleWordsArray2 = ["boys", "there", "is", "no", "way", "out", "of", "here"]
console.assert(wordMatchInArray('boys', sampleWordsArray2) === true)
console.assert(wordMatchInArray('girls', sampleWordsArray2) === false)
