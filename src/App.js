import React, { useState, useEffect } from "react";
import styles from "./App.module.css";
import Characters from "./components/Characters/Characters";

const App = () => {
  // test
  // add test 
  // add test 3
  // add test 4
  // add test 5
  const [characters, setCharacters] = useState([]);
  const [myCharacters] = useState([
    "Bender",
    "Leela",
    "Fry",
    "Dr-Zoidberg",
    "Professor-Farnsworth",
    "Amy",
    "Zapp-Brannigan",
    "Kif",
    "Hermes",
    "Lurr"
  ]);

  const getCharacter = async name => {
    const response = await fetch(
      `https://futuramaapi.herokuapp.com/api/characters/${name}`
    );
    const data = await response.json();

    // change the structure of data
    const newCharacter = {
      character: data[0].character,
      quotes: data.map(item => item.quote),
      image: data[0].image
    };

    setCharacters(characters => [...characters, newCharacter]);
  };

  useEffect(() => {
    myCharacters.forEach(item => getCharacter(item));
  }, [myCharacters]);

  return (
    <div className={styles.App}>
      <Characters characters={characters} />
    </div>
  );
};

export default App;
