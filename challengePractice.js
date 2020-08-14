/*
Explanation
Your function will be called char_freq/charFreq/CharFreq and you will get passed a string,
 you will then return a dictionary (object in JavaScript) with as keys the characters, 
 and as values how many times that character is in the string. You can assume you will be given valid input.
 Example : charFreq("I like cats") returns {'a': 1, ' ': 2, 'c': 1, 'e': 1, 'I': 1, 'k': 1, 'l': 1, 'i': 1, 's': 1, 't': 1}
*/

function charFreq(message) {

  let letters = {}
  let messageArray = message.split("")
  
  for(let i = 0; i < messageArray.length; i++){
    let currentLetter = messageArray[i]
    if (letters[currentLetter]){
      letters[messageArray[i]] += 1
    }
    else {
      letters[currentLetter] = 1 
    }  
  }
   return (
      letters
    )
}
