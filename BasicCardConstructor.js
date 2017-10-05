// require files and node package managers
var basicCards = require('./basicCards.js');
var inquirer = require('inquirer');

// create BasicCard constructor
var BasicCard = function(front, back) {
    this.front = front;
    this.back = back;
}

// declares variable to hold the clozeCards
var basicCardsArray = [];

// populate the basicCards array
// basicCards is a module imported from basicCards.js
for (var i = 0; i < basicCards.length; i++) {
  // does q get updated with every iteration?
  // change q to a word or words, eventually
  var q = new BasicCard(basicCards[i].front, basicCards[i].back);
  basicCardsArray.push(q);
}

// assign a default index (wrt basicCardsArray)
var basicCardIndex = 0;
// assign number of correct basicCards to zero
var correct = 0;
// assign number of incorrect basicCards to zero
var incorrect = 0;

// function to display deck of basic cards
function displayBasicCards() {
  inquirer.prompt([
    {
      type: 'input',
      message: basicCardsArray[basicCardIndex].front + '\nMy answer: ',
      name: 'userInput'
    }
  ]).then(function (response) {

    // grade userInput and provide user with feedback
    if (response.userInput.toLowerCase() === basicCardsArray[basicCardIndex].back.toLowerCase()) {
      console.log('Correct!');
      correct++;
    } else {
      console.log('Sorry. The correct answer is ' + basicCardsArray[basicCardIndex].back + '.');
      incorrect++;
    }

    // Advance to the next basic card
    if (basicCardIndex < basicCardsArray.length - 1) {
      basicCardIndex++;
      displayBasicCards();
    } 
    else {
      console.log('You have exhausted the deck of basic cards.');
      console.log('Correct Answers: ' + correct);
      console.log('Incorrect Answers: ' + incorrect);
    }
  })
}
displayBasicCards();