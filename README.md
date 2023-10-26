# Random Quotes Machine

## Using React, this project is a Random Quotes Machine required for the [freecodecamp](https://www.freecodecamp.org)'s Front End Development Libraries certification.

## The project fetches an API which has some quotes stored and randomly displays one of them and the author. There are two buttons, one displays a new quote and the other opens a new tab for retweeting the quote.

**The tasks were:**
- The app needs a wrapper element with a corresponding `id="quote-box"`
- `#quote-box` must have an element with a corresponding `id="text"`
- `#quote-box` must have an element with a corresponding `id="author"`
- `#quote-box` must have a clickable element with a corresponding `id="new-quote"`
- `#quote-box` must have a clickable `a` element with a corresponding `id="tweet-quote"`
- On first load, the quote machine must display a random quote in the element with `id="text"`
- On first load, the quote machine must display the random quote's author in the element with `id="author"`
- When the `#new-quote` button is clicked, the quote machine should fetch a new quote and display it in the `#text` element
- The quote machine should fetch the new quote's author when the `#new-quote` button is clicked and display it in the `#author` element
- People can tweet the current quote by clicking on the `#tweet-quote` `a` element. This `a` element should include `"twitter.com/intent/tweet"` path in its `href` attribute to tweet the current quote
- The `#quote-box` wrapper element should be horizontally centered
