// require files and node package managers
var clozeCards = require('./clozeCards.js');
var inquirer = require('inquirer');

// create ClozeCard constructor
var ClozeCard = function(full, cloze) {
  // two declarations and one if statement below verify that cloze text is contained in full text
  var fullLower = full.toLowerCase();
  var clozeLower = cloze.toLowerCase();
  if (!fullLower.includes(clozeLower)) {
    console.log('error: ' + cloze + ' does not appear within full text.');
    return;
  }
  this.full = full;
  this.cloze = cloze;
  this.partial = full.replace(cloze, '_____');
}

// declares variable to hold the clozeCards
var clozeCardsArray = [];

// populate the clozeCards array
// clozeCards is a module imported from clozeCards.js. It contains the full and cloze strings
for (var i = 0; i < clozeCards.length; i++) {
  // does q get updated with every iteration?
  // change q to a word or words, eventually
  var q = new ClozeCard(clozeCards[i].full, clozeCards[i].cloze);
  clozeCardsArray.push(q);
}

// assign a default index (wrt clozeCardsArray)
var clozeCardIndex = 0;
// assign number of correct clozeCards to zero
var correct = 0;
// assign number of incorrect clozeCards to zero
var incorrect = 0;

// function to display deck of cloze-deleted cards
function displayClozeCards() {
  inquirer.prompt([
    {
      type: 'input',
      message: clozeCardsArray[clozeCardIndex].partial + '\nMy answer: ',
      name: 'userInput'
    }
  ]).then(function (response) {

    // grade userInput and provide user with feedback
    if (response.userInput.trim().toLowerCase() === clozeCardsArray[clozeCardIndex].cloze.toLowerCase()) {
      console.log('Correct!');
      correct++;
    } else {
      console.log('Sorry. The correct answer is ' + clozeCardsArray[clozeCardIndex].cloze + '.');
      incorrect++;
    }

    // Advance to the next cloze card
    if (clozeCardIndex < clozeCardsArray.length - 1) {
      clozeCardIndex++;
      displayClozeCards();
    } 
    else {
      console.log('You have exhausted the deck of cloze cards.');
      console.log('Correct Answers: ' + correct);
      console.log('Incorrect Answers: ' + incorrect);
    }
  })
}
displayClozeCards();