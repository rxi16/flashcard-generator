//create ClozeCard constructor
var ClozeCard = function(front, back) {
	if (!error) {
		this.front = front;
		this.back = back;
	}
	else if (error) {
		console.log("error: " + error);
	}
};

//export ClozeCard constructor
module.exports = ClozeCard;

var parentheses = new ClozeCard(
	"According to PEMDAS, we perform the ___________ operation first.", "parentheses");
var y = new ClozeCard(
	"At the x-intercept, the _-coordinate must equal zero.", "y");
var vertical = new ClozeCard(
	"The __________ line test tells us whether a graph is a function or not.", "vertical");
var xintercept = new ClozeCard(
	"The point at which the graph crosses the x-axis is called the ___________?", "x-intercept");