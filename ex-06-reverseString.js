
/**
 * Ex-09 : reverseString()
 *
 * Write a function called reverseString that takes a string as input
 * and returns a string with the characters in reverse order.
 * (note: can't use .reverse() method )
 *
*/

var reverseString = function(inputStr){

  var splitStr = inputStr.split('')
  var arr = []
  var revStr = arr.join("")

    for (var i = splitStr.length; i >= 0; i--) {

      arr.push(splitStr[i])

    }

    var revStr = arr.join("")
    return revStr
}


//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~
console.assert( reverseString('books') === 'skoob')
console.assert( reverseString('coolness') === 'ssenlooc')
console.assert( reverseString('bedtime') === 'emitdeb')
console.assert( reverseString('yah sure') === 'erus hay')
