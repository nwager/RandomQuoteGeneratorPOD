var quotes = [     //array of quotes -- strings separated by commas
"The purpose of school: to prepare you for life. The purpose of life: meaningful work, a person to love, a cause to embrace.",
"Ability is incremental.",
"You have to give up trying to help everyone feel better, you are not chocolate!",
"It is our choices that show what we truly are, far more than our abilities."
];

document.getElementById("quoteButton").addEventListener("click", RandomQuote); //button click runs function

function RandomQuote () {
	var selectedQuote = quotes[Math.floor(Math.random() * quotes.length)] //pick a random index in quotes
	document.getElementById("quoteElement").innerHTML = selectedQuote;    //display quote
}