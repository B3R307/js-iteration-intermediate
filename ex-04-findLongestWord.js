/**
 * findLongestWord()
 *
 * Write a function that takes a string of words and returns the longest word.
 * i.e. findLongestWord("a book full of dogs") should return "book"
 *
**/

function findLongestWord(strWord){
  // var max =
  var moreLongWord = ''
  var strNoSimb = ''

  // var noSimb = strWord.split(" ")
  // console.log(noSimb);

  for( var i = 0; i < strWord.length; i ++){
    var wordEl = strWord[i].replace("'",'');
    strNoSimb += wordEl
   }
   // console.log(strNoSimb);
   strNoSimb = strNoSimb.split(" ");

  // console.log(strNoSimb);

for( var i = 0; i < strNoSimb.length; i ++){
  var charLength = strNoSimb[i]
  // console.log(charLength)
  if(charLength.length > moreLongWord.length){
    moreLongWord = charLength
  }
}
console.log(moreLongWord)
return moreLongWord

  }




// NO SOLVING


console.group('JS Iterations Week');
  console.log('%cFunction: findLongestWord', 'background-color: green; color: white')
  // console.groupCollapsed('Should return "baskets" from "I have baskets full of lemons"');
    console.assert(findLongestWord('i have baskets full of lemons') === 'baskets')
  console.groupEnd();

  // console.groupCollapsed('Should return "Alexander" from "Alexander shouldn’t talk anymore"');
    console.assert(findLongestWord("Alexander shouldn't talk anymore") === 'Alexander')
  console.groupEnd();

  // console.groupCollapsed('Should return "Texas" from "don’t mess with Texas"');
    console.assert(findLongestWord("don't mess with Texas") === 'Texas')
  console.groupEnd();

  // console.groupCollapsed('Should return "time" from "a time to act."');
    console.assert(findLongestWord('a time to act.') === 'time')
  console.groupEnd();
console.groupEnd();
