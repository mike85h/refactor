
// TODO: refactor the following functions to use native methods: forEach, map, reduce, filter, etc.

function toSentence(arr) {
  return arr.reduce(function(sentence, name, index, names) {
    if (index === names.length - 2) {
      sentence += name + " and "
    } else if (index === names.length - 1) {
      sentence += name
    } else {
     sentence += name + ", "
    }
     return sentence
  }, "")
}

function arrayOfNumbers(num) {
  return Array.from(Array(num+1).keys()).filter(num=>{return num!==0})
}

function acronym(arr) {
  var result = ''
  arr.forEach((word)=>{result+=(word.charAt(0))})
  return result
}

function replace(arr, from, to) {
  return arr.map(item=>{return item===from? item=to : item=item})
}

// TESTS are in test folder. ''$ npm test' to test on CLI

module.exports = {toSentence, arrayOfNumbers, acronym, replace};
