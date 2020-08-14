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
