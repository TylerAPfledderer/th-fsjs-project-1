/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * `quotes` array
 ***/

const quotes = [
	{
		quote:
			"Change involves carrying out an activity against the habit of life.",
    source: "F.M. Alexander",
    tags: [
      "Health",
      "Philosophy",
      "Psychology"
    ]
	},
	{
		quote:
			"The true test of character is not how much we know how to do, but how we behave when we don't know what to do.",
		source: "John Holt",
		citation: "How Children Fail",
    year: 1964,
    tags: [
      "Education",
      "Psychology"
    ]
	},
	{
		quote:
			"Relaxation happens only when allowed, not as a result of 'trying' or 'making'.",
		source: "W. Timothy Gallwey",
		citation: "The Inner Game of Tennis",
    year: 1974,
    tags: [
      "Psychology",
      "Philosophy"
    ]
	},
	{
		quote:
			"If your mind is empty, it is always ready for anything, it is open to everything. In the beginner's mind there are many possibilities, but in the expert's mind there are few.",
		source: "Shunryu Suzuki",
		citation: "Zen Mind, Beginner's Mind",
    year: 1970,
    tags: [
      "Religion",
      "Spiritual"
    ]
	},
	{
		quote:
			"Each morning we are born again. What we do today is what matters most.",
    source: "Buddha",
    tags: [
      "Religion",
      "Spiritual"
    ]
	},
];


/***
 * `getRandomQuote` function
 ***/

// Function to grab a random quote from the passed in array
const getRandomQuote = (quotes) => {
	// Grab a random number against the length of the passed in array, and round down to include 0 but not the length value.
	const randomIndex = Math.floor(Math.random() * quotes.length);

	// Return a value from the array based on the random index
	return quotes[randomIndex];
};

/***
 * `bgColorChange` function
 ***/

 // Function to generate a random number for one of the rgb value params
 const rgbVal = () => {
   return Math.floor(Math.random() * 256);
 };

/***
 * `printQuote` function
 ***/

 // To store an ID for the setInterval
 let intervalID;

 // To trigger setInterval method
 const autoChange = (func) => {
   intervalID = setInterval(func, 5000);
 }

 // To trigger the stopping of the setInterval method
 const stopAutoChange = () => {
   clearInterval(intervalID);
 }

// Function to inject the random quote into the DOM
const printQuote = (event) => {

  // If an event triggered this function, stop the auto interval if it is still running
  if (event) {
    stopAutoChange();
  }

	// Grab ".container" div that store the quote block
	const container = document.querySelector(".container");

	// Ensure it is empty before showing a new quote
  container.innerHTML = "";

	// Store random quote to access it's properties with deconstructed object
	const { quote, source, citation, year, tags } = getRandomQuote(quotes);

	/* Creation of the quote content below
	 * <div id="quote-box" class="quote-box">
	 *  <p class="quote">${quote}</p>
	 *  <p class="source">${source}<span class="citation">${citation}</span><span class="year">${year}</span></p>
	 * </div>
	 */

  /* 
   * For practice in injection security, creating each piece of the injected content
   *    to be appended to the '.container' div
   */
	const quoteBox = document.createElement("div"); // Container for the quote content
    quoteBox.setAttribute("id", "quote-box");
    quoteBox.setAttribute("class", "quote-box");
  
  /*
   * Function to create an new element and text content from an object property
   * @param {string} objProperty - the object property
   * @param el - the element tag to be created
   * @param {string} className - the associated className to the object property (optional)
   */

  const extraObjInject = (objProp, el, className) => {
    if (objProp) {
      return `<${el} ${className ? `class="${className}"` : ''}>${objProp}</${el}>`;
    }
    return "";
  }

  container.innerHTML = `
    <div id="quote-box" class="quote-box">
      ${extraObjInject(tags, "span")}
      <p class="quote">${quote}</p>
      <p class="source">${source}${extraObjInject(citation, "span", "citation")}${extraObjInject(year, "span", "year")}</p>
    </div>
  `;

  // Generate new background color
  document.body.style.backgroundColor = `rgb(${rgbVal()}, ${rgbVal()}, ${rgbVal()})`;
};

printQuote(); // Supply a quote on load...
autoChange(printQuote); // ...then run the interval!

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
	.getElementById("load-quote")
	.addEventListener("click", printQuote, false);

  	/* Creation of the quote content below
	 * <div id="quote-box" class="quote-box">
	 *  <p class="quote">${quote}</p>
	 *  <p class="source">${source}<span class="citation">${citation}</span><span class="year">${year}</span></p>
	 * </div>
	 */

  /*
   * container.innerHTML = `
   *  <div id="quote-box" class="quote-box">
   *    ${extraObjInject(tags, span)}
   *    <p class="quote">${quote}</p>
   *    <p class="source">${source}${extraObjInject(citation, span, "citation")}${extraObjInject(year, span, "year")}</p>
   *  </div>
   * `;
   * 
   */