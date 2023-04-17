import React from "react";
import styles from "./Rodape.module.css";

export default function Rodape() {
  return (
    <footer className={styles.rodape}>
      <ul>
        <li>
          <button>
            <img src="./assets/icons/github.png" alt="icon Git Hub" />
          </button>
        </li>
        <li>
          <button>
            <img src="./assets/icons/linkedin.png" alt="icon linkedin" />
          </button>
        </li>
      </ul>
      <p>Todos os direitos reservados</p>
    </footer>
  );
}
