// Return the quotient of x and y.
// Ex.:
//   divide(10, 2);
//   => 5
function divide(x, y) {

  return x / y 

}

const divideTotal = divide(2,2)


// Return the average of x and y.
// Here, the average of x and y is the *mean* of x and y. In other words, it's
// computed by dividing the sum of x and y by 2.
// Ex.:
//   average(10, 2);
//   => 6
function average(x, y) {

  return (x + y) / 2

}
const averagetotal = average(4, 4)

// Return true if x and y are mostly equivalent up to a tolerance of 0.001.
// In other words, return true if the aboslute value of x - y is less than 0.001.
// Ex.:
//   approximatelyEqual(10.001, 10);
//   => true
let tolerance = .001
function approximatelyEqual(x, y){
  let tolerance = .001
  return Math.abs(x - y)<tolerance 

}





// const almostRight = (
//   n1, n2, epsilon = .001
// ) => Math.abs(n1-n2)<epsilon;


// function approximatelyEqual(x, y) {
//   let n1= x
//   let n2 = y

//   return almostRight
// }




// Given a first name and last name, return a full name in the format "FIRST LAST"
// Ex.:
//   fullName('John', 'Doe');
//   => 'John Doe'


function fullName(lastName, firstName) {

return `${lastName} ${firstName}`


} 






// Generate the sentence "PERSON was drinking BEVERAGE at LOCATION" using the
// person, beverage and location provided.
// Ex.:
//   generateSentence('Kay', 'coffee', 'the local cafe');
//   => 'Kay was drinking coffee at the local cafe.'
function generateSentence(person, beverage, location) {
{person: 'Kay'}
{beverage: 'coffee' }
{Location: 'the local cafe'}

return `${person} was drinking ${beverage} at ${location}.`

}

// Return the given string with all vowels replced with '*' characters.
// Ex.:
//   censorVowels('javascript');
//   => 'j*v*scr*pt'
function censorVowels(str) {
return str.replace(/[aeiou]/gi,'*')
 
}
const result1 = censorVowels('javascript')

// Return the given string in sticky case.
// Ex.:
//   stickyCase('hello world');
//   => 'hElLo wOrLd'
function stickyCase(inputString) {
  
  const resultWords = [];

  for (let i = 0; i < words.length; i++) {
    
    if (i % 2 === 0) {
      resultWords.push(words[i].toUpperCase());
    } else {
      resultWords.push(words[i]);
    }
  }

  
  const resultString = resultWords.join(' ');

  return resultString;
}


// Return the given string in leetspeak. Leetspeak is a modified version of
// English where characters are replaced by numbers or symbols. For this
// version of leetspeak, replace the following characters:
//   a => 4
//   e => 3
//   i => 1
//   o => 0
//   s => 5
//   t => 7
// Ex.:
//   leetspeak('javascript');
//   => 'j4v45cr1p7'
function leetspeak(inputString) {
  const leetMapping = {
    'a': '4',
    'e': '3',
    'i': '1',
    'o': '0',
    's': '5',
    't': '7'
  };

  let result = '';

  for (let i = 0; i < inputString.length; i++) {
    const char = inputString[i].toLowerCase(); 
    const replacement = leetMapping[char] || inputString[i]; 
    
   
    if (inputString[i] === inputString[i].toUpperCase()) {
      result += replacement.toUpperCase();
    } else {
      result += replacement;
    }
  }

  return result;
}



export {
  approximatelyEqual,
  average,
  censorVowels,
  divide,
  fullName,
  generateSentence,
  leetspeak,
  stickyCase,
};
