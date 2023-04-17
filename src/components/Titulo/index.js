import React from "react";
import styles from "./Titulo.module.css";

// import iconTitle from "./assets/icons/Paper.png";

export default function Titulo() {
  return (
    <div className={styles.titulo}>
      <img src="./assets/icons/Paper.png" alt="Icon" />
      <h1>todoList</h1>
    </div>
  );
}
