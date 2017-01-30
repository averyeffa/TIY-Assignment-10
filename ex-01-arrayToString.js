/**
 * Ex-01 : arrayToString()
 *
 * Write a function called `arrayToString` that takes
 *  an array of values and combines them into one large string.
 *
 * You must use a for-loop to solve this problem.
 **/


var arrayToString = function(newstring){
  var string = '';

  for (var i = 0; i < newstring.length; i++) {
    string = string + newstring[i]
  }
 return string;
}



//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~
var output1 = arrayToString(["Hello", "how", "are", "you"])

var coolArr = ['cool', 'great', 'nice', 'awesome', 'sweet']
var output2 = arrayToString(sugArr)

console.assert( output1 === "Hellohowareyou" )
console.assert( output2 === 'coolgreatniceawesomesweet' )
