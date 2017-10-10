var expect = require("chai").expect;
var loops = require('../loops');

describe("Refactor loops", function(){
  describe('toSentence() function', function(){
    it('should make a sentence out of an array', function(){
      var arr1 = ['Sue','Will']
      var arr2 = ['Sue', 'Will', 'Rachel']
      expect(loops.toSentence(arr1)).to.equal('Sue and Will');
      expect(loops.toSentence(arr2)).to.equal('Sue, Will and Rachel')
    })
  })
  describe('arrayOfNumbers() function', function(){
    it('should return an array of all numbers from a given integer to 1', function(){
      var n1 = 1;
      var n2 = 3;
      expect(loops.arrayOfNumbers(n1)).to.deep.equal([1]);
      expect(loops.arrayOfNumbers(n2)).to.deep.equal([1,2,3]);
    })
  })
  describe('acronym() function', function(){
    it('should return an acronym made from the words in a given array', function(){
      var arr1 = ['Sue', 'Will']
      var arr2 = ['Java', 'Script', 'Object', 'Notation']
      expect(loops.acronym(arr1)).to.equal('SW');
      expect(loops.acronym(arr2)).to.equal('JSON');
    })
  })
  describe('replace() function', function(){
    it('should replace all numbers that match the given one with the other given number', function(){
      var arr1 = [1, 3, 2, 1, 3]
      var from1 = 1
      var to1 = 4
      expect(loops.replace(arr1, from1, to1)).to.deep.equal([4, 3, 2, 4, 3]);
    })
  })

})
