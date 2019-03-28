/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/*The array of object that will be be randomly rotating.
  Each quote will eventually show up, It all depends on the number that is returned by the getRandomQuote().
*/
const quotes = [
  {
    quote:
      "You know you’re in love when you can’t fall asleep because reality is finally better than your dreams.", //
    source: "Dr.Suess"
  },
  {
    quote: "Fate Fell Short This Time, Your Smile Fades In The Summer.",
    source: "Mark Hoppus, blink-182",
    citation: "Feeling This",
    year: "2003"
    //
  },
  {
    quote: "A friend is someone who gives you total freedom to be yourself.",
    source: "Jim Morrison",
    citation: "The Lords and the New Creatures",
    year: "1969" //
  },
  {
    quote: "Life Would Be Tragic If It Weren't Funny.",
    source: "Stephen Hawking",
    citation: "The Science of Second-Guessing",
    year: "2004" //
  },
  {
    quote:
      "And love is an act of surrender to another person. Total abandonment. I give myself to you. Take me. Do anything you like with me. See. So, that's quite mad because you see, it's letting things get out of control.",
    source: "Alan Watts",
    citation: "Falling Into Love"
    //
  }
];

/*
  getRandomQuote() pulls a random quote along with source, citation and year from the quotes array.

  Depending on the randomNumber that is pulled, it will return said quote, along with other properties if the quote has that information, such as citation and year.
*/

function getRandomQuote() {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}

/* 
  getRandomColor() takes 3 variables. Each variable has a Math.random function that loads a different number between 0 and 256.
  Those numbers from the variables will be places inside another variable that will produce a different background color eachtime depending on what the first 3 variables get returned.
  Finally it returns a style for the body tag which will be a different color each time.
*/

function getRandomColor() {
  let randomBackgroundColor1 = Math.floor(Math.random() * 256) + 1;
  let randomBackgroundColor2 = Math.floor(Math.random() * 256) + 1;
  let randomBackgroundColor3 = Math.floor(Math.random() * 256) + 1;
  let backgroundColor = `rgb(${randomBackgroundColor1}, ${randomBackgroundColor2}, ${randomBackgroundColor3})`;
  return (document.body.style.background = backgroundColor);
}
getRandomColor();

/*
  printQuote() loads the html and background color for each random quote that is shown.
  There is at least a quote and a source of who said the quote.
  Not every quote has a citation and or a year so there are two if statements that will go off if there is a citation and year.
  If its true, then the citiation or year will be added to the html.
  If not, they wont show, nbut the quote will be added to the html regardless.
  the last line in the function grabs the "quote-box" id from index.html, and prints the final html to the screen.
*/
function printQuote() {
  let randomQuote = getRandomQuote();
  let html = "";
  html += ` <p class="quote">${randomQuote.quote}</p>`;
  html += `<p class="source">${randomQuote.source}`;
  if (randomQuote.citation) {
    html += `<span class="citation">${randomQuote.citation}</span>`;
  }
  if (randomQuote.year) {
    html += `<span class="year">${randomQuote.year}</span>`;
  }
  html += `</p>`;

  document.getElementById("quote-box").innerHTML = html;
}

/*The showRandomQuote variable, sets an interval of 3 seconds that sets off the printQuote function. It loads a different quote without having to click the button.
 */
let showRandomQuote = setInterval(printQuote, 3000);

/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document
  .getElementById("loadQuote")
  .addEventListener("click", printQuote, false);
