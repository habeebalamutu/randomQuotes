import React, { useState } from "react";
import quotes from "./quotes.json";
import "./RandomQuote.css";

function RandomQuote() {
  const [quote, setQuote] = useState(quotes[0]);
  const [animate, setAnimate] = useState(false);

  const getRandomQuote = () => {
    setAnimate(true);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setQuote(quotes[randomIndex]);
      setAnimate(false);
    }, 500);
  };

  return (
    <div className="container">
      <div className={`quote-box ${animate ? "fade-out" : "fade-in"}`}>
        <p className="quote-text">"{quote.text}"</p>
        <p className="quote-author">- {quote.author}</p>
        <button className="quote-button" onClick={getRandomQuote}>
          New Quote
        </button>
      </div>
    </div>
  );
}

export default RandomQuote;
