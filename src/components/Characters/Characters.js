import React from "react";
import Character from "./Character";

const Characters = ({ characters }) => {
  return characters.map(item => {
    // get random quote here, because Character component re-render each time modal is open or closed
    const randomQuote =
      item.quotes[Math.floor(Math.random() * item.quotes.length)];
    return (
      <Character
        image={item.image}
        character={item.character}
        quotes={item.quotes}
        randomQuote={randomQuote}
        key={item.character}
      />
    );
  });
};

export default Characters;
