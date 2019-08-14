import React from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.css";

const Modal = ({ isShowing, toggle, quotes, character }) =>
  isShowing
    ? createPortal(
        <div className={styles.modal}>
          <div className={styles.modal_content}>
            <div className={styles.modal_header}>
              <h3>More {character}'s quotes:</h3>
              <span className={styles.close} onClick={() => toggle(false)}>
                &times;
              </span>
            </div>
            <ul>
              {/* show first 5 quotes */}
              {quotes.slice(0, 5).map(quote => (
                <li key={quote}>
                  <p>{quote}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>,
        document.body
      )
    : null;

export default Modal;
