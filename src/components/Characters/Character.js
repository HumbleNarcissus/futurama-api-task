import React from "react";
import styles from "./Character.module.css";
import Modal from "../Modal/Modal";
import useModal from "../customHooks/useModal";

const Character = ({ character, image, quotes, randomQuote }) => {
  const { isShowing, toggle } = useModal();
  return (
    <div className={styles.character} onClick={() => toggle(true)}>
      <h1>{character}</h1>
      <img src={image} alt="" className={styles.image} />
      <p className={styles.quote}>"{randomQuote}"</p>

      <Modal
        isShowing={isShowing}
        toggle={toggle}
        character={character}
        quotes={quotes}
      />
    </div>
  );
};

export default Character;
