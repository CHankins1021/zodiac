// Require the success-motivational-quotes module
const quotes = require('success-motivational-quotes');

// Display all the Quotes for Category - Learning
console.log("Quotes for Category - Learning:");
console.log(quotes.filterByCategory('Learning'));

// Display all the Quotes by Author - Thomas Jefferson
console.log("Quotes by Author - Thomas Jefferson:");
console.log(quotes.filterByAuthor('Thomas Jefferson'));

// Display the Quote from today
console.log("Quote from today:");
console.log(quotes.getQuoteOfTheDay());

// Display the Quote from Quote ID = 357
console.log("Quote with ID 357:");
console.log(quotes.getQuoteById(357));
