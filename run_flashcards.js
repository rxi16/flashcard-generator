// require files and node package managers
var BasicCard = require('./BasicCard.js');
var fs = require('fs');
var inquirer = require('inquirer');
//var basic = require('./basic.txt');

var parentheses = new BasicCard(
	"What operation do we perform first according to PEMDAS?", "parentheses");
var y = new BasicCard(
	"Which coordinate must equal zero at the x-intercept?", "y");
var vertical = new BasicCard(
	"Does the vertical or horizontal line test tell us whether a graph is a function?", "vertical");
var xintercept = new BasicCard(
	"What do we call the point at which the graph crosses the x-axis?", "x-intercept");

// Prompt the user to provide response to flashcard front
inquirer.prompt([
  {
    type: "input",
    name: "userInput",
    message: parentheses.front
  },
  {
    type: "input",
    name: "userInput",
    message: y.front
  },
    {
    type: "input",
    name: "userInput",
    message: vertical.front,
    choices: ["vertical", "horizontal"]
  },
    {
    type: "input",
    name: "userInput",
    message: xintercept.front
  }

// After the prompt, store the user's response in a variable called usersResponse (is this necessary?)
]).then(function(usersResponse) {
	console.log(usersResponse.userInput);
	if (usersResponse.userInput === BasicCard.back) {
		console.log("Correct!");
	}
	else if (usersResponse.userInput !== BasicCard.back) {
		console.log("Sorry. Correct answer is " + BasicCard.back);
	}
	});