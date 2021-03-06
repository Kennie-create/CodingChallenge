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

/*
Write a function that calculates which of 
these states had the greatest number of registered voters in 2020
*/


const data = [
  ["Arizona",2016,"Jan",25852 ],
  ["Arizona",2016,"Feb",51155 ],
  ["Arizona",2016,"Mar",48614 ],
  ["Arizona",2016,"Apr",30668 ],
  ["Arizona",2020,"Jan",33229 ],
  ["Arizona",2020,"Feb",50853 ],
  ["Arizona",2020,"Mar",31872 ],
  ["Arizona",2020,"Apr",10249 ],
  ["California",2016,"Jan",87574 ],
  ["California",2016,"Feb",103377 ],
  ["California",2016,"Mar",174278 ],
  ["California",2016,"Apr",185478 ],
  ["California",2020,"Jan",151595 ],
  ["California",2020,"Feb",238281 ],
  ["California",2020,"Mar",176810 ],
  ["California",2020,"Apr",38970 ],
  ["Colorado",2016,"Jan",17024 ],
  ["Colorado",2016,"Feb",20707 ],
  ["Colorado",2016,"Mar",25627 ],
  ["Colorado",2016,"Apr",22204 ],
  ["Colorado",2020,"Jan",20260 ],
  ["Colorado",2020,"Feb",33374 ],
  ["Colorado",2020,"Mar",18990 ],
  ["Colorado",2020,"Apr",6034 ],
  ["Delaware",2016,"Jan",3007 ],
  ["Delaware",2016,"Feb",3629 ],
  ["Delaware",2016,"Mar",5124 ],
  ["Delaware",2016,"Apr",3818 ],
  ["Delaware",2020,"Jan",3276 ],
  ["Delaware",2020,"Feb",3353 ],
  ["Delaware",2020,"Mar",2535 ],
  ["Delaware",2020,"Apr",589 ],
  ["District of Columbia",2016,"Jan",2840 ],
  ["District of Columbia",2016,"Feb",2954 ],
  ["District of Columbia",2016,"Mar",4706 ],
  ["District of Columbia",2016,"Apr",4157 ],
  ["District of Columbia",2016,"May",5714 ],
  ["District of Columbia",2020,"Jan",3334 ],
  ["District of Columbia",2020,"Feb",3348 ],
  ["District of Columbia",2020,"Mar",2225 ],
  ["District of Columbia",2020,"Apr",1281 ],
  ["District of Columbia",2020,"May",1925 ],
  ["Florida",2016,"Jan",50231 ],
  ["Florida",2016,"Feb",87351 ],
  ["Florida",2016,"Mar",73627 ],
  ["Florida",2016,"Apr",52508 ],
  ["Florida",2020,"Jan",77466 ],
  ["Florida",2020,"Feb",109859 ],
  ["Florida",2020,"Mar",54872 ],
  ["Florida",2020,"Apr",21031 ],
  ["Georgia",2016,"Jan",34952 ],
  ["Georgia",2016,"Feb",40976 ],
  ["Georgia",2016,"Mar",44150 ],
  ["Georgia",2016,"Apr",37028 ],
  ["Georgia",2020,"Jan",38573 ],
  ["Georgia",2020,"Feb",55386 ],
  ["Georgia",2020,"Mar",26284 ],
  ["Georgia",2020,"Apr",15484 ],
  ["Illinois",2016,"Jan",44040 ],
  ["Illinois",2016,"Feb",99674 ],
  ["Illinois",2016,"Mar",52782 ],
  ["Illinois",2016,"Apr",76098 ],
  ["Illinois",2020,"Jan",44443 ],
  ["Illinois",2020,"Feb",68455 ],
  ["Illinois",2020,"Mar",47899 ],
  ["Illinois",2020,"Apr",21332 ],
  ["Maryland",2016,"Jan",19580 ],
  ["Maryland",2016,"Feb",29122 ],
  ["Maryland",2016,"Mar",40497 ],
  ["Maryland",2016,"Apr",26655 ],
  ["Maryland",2016,"May",5828 ],
  ["Maryland",2020,"Jan",21532 ],
  ["Maryland",2020,"Feb",20708 ],
  ["Maryland",2020,"Mar",23864 ],
  ["Maryland",2020,"Apr",10061 ],
  ["Maryland",2020,"May",23488 ],
  ["North Carolina",2016,"Jan",35213 ],
  ["North Carolina",2016,"Feb",84357 ],
  ["North Carolina",2016,"Mar",58272 ],
  ["North Carolina",2016,"Apr",73341 ],
  ["North Carolina",2016,"May",29374 ],
  ["North Carolina",2020,"Jan",111990 ],
  ["North Carolina",2020,"Feb",54053 ],
  ["North Carolina",2020,"Mar",54807 ],
  ["North Carolina",2020,"Apr",35484 ],
  ["North Carolina",2020,"May",23517 ],
  ["Texas",2016,"Jan",132860 ],
  ["Texas",2016,"Feb",143795 ],
  ["Texas",2016,"Mar",170607 ],
  ["Texas",2016,"Apr",143199 ],
  ["Texas",2016,"May",91205 ],
  ["Texas",2020,"Jan",134559 ],
  ["Texas",2020,"Feb",130080 ],
  ["Texas",2020,"Mar",129424 ],
  ["Texas",2020,"Apr",34694 ],
  ["Texas",2020,"May",35678 ],
  ["Virginia",2016,"Jan",20032 ],
  ["Virginia",2016,"Feb",36911 ],
  ["Virginia",2016,"Mar",44171 ],
  ["Virginia",2016,"Apr",20460 ],
  ["Virginia",2016,"May",26239 ],
  ["Virginia",2020,"Jan",25934 ],
  ["Virginia",2020,"Feb",29507 ],
  ["Virginia",2020,"Mar",31492 ],
  ["Virginia",2020,"Apr",5467 ],
  ["Virginia",2020,"May",8239 ]
]
 
 function largestNumber(arr) {

  let allStates = [];
  let filteredData = arr.filter(row => row[1] === 2020 );

  filteredData.forEach(function(row){
   
    let state = row[0]
    let voters = row[3]
    let match = allStates.find(item => item.state === state)
      if(match){
      match.voters += voters
      }
      else {
     allStates.push({state: state, voters: voters})
      } 
  })
    let  max = allStates.reduce(function(result, current) {
    return (result.voters > current.voters) ? result : current
})  
  console.log(max)
  
}

largestNumber(data);
