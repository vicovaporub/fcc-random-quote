import { useState, useEffect } from "react"

export const QuoteMachine = () => { 
  
    const [quote, setQuote] = useState('')
    const [author, setAuthor] = useState('')
    
    useEffect(() => {
      getQuotes()
    }, [])
    
    const getQuotes = () => {
      let quotesUrl = `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`
      fetch(quotesUrl)
      .then(res => res.json())
      .then(data => {
        let dataQuotes = data.quotes
        
        let randomNum = Math.floor(Math.random() * dataQuotes.length)
        let randomQuote = dataQuotes[randomNum]
  
        setQuote(randomQuote.quote)
        setAuthor(randomQuote.author)
      })
    }
  
    const handleClick = () => {
      getQuotes()
    }
  
    return (
    <>
      <main id="main">
        <div id="quote-box">
            <div id="text">
                <h3>{quote}</h3>
            </div>
            <div id="author">
              <p>{author}</p>
            </div>
            <div className="buttons">
                <button className="button" id="new-quote" onClick={handleClick}>New Quote</button>
                  <a className="tweetButton" href={`https://twitter.com/intent/tweet?text=${quote} - ${author}`} target="_blank" id="tweet-quote">Tweet Quote</a>
            </div>
        </div>
        </main>
    </>
    )
  
  }
  