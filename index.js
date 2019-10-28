// Code your solutions in this file
function writeCards(names, eventName) {
  let cards = []
  for (const name of names){
    cards.push(`Thank you, ${name}, for the wonderful ${eventName} gift!`)
  }
  return cards
}

function countDown(startNumber) {
  let currentNumber = startNumber
  while (currentNumber > -1){
    console.log(currentNumber)
    currentNumber -= 1
  }
}