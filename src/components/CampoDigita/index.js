import React from "react";
import styles from "./CampoDigita.module.css";

export default function CampoDigita({ value, setValue, onSubmit }) {
  return (
    <div className={styles.campoDigita}>
      <input
        type="text"
        placeholder="adicione uma tarefa"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={onSubmit}>
        <img src="./assets/icons/Arrow.png" alt="icon Arrow" />
      </button>
    </div>
  );
}
