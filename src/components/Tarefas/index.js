import React from "react";
import styles from "./Tarefas.module.css";

export default function Tarefas({ dados, onClick, onDelete }) {
  return (
    <div className={styles.itensContainer}>
      {dados.map((item) => (
        <div key={item.id} className={styles.itens}>
          <p
            className={item.checked ? styles.checked : ""}
            onClick={() => onClick(item)}
          >
            {item.title}
          </p>
          <div>
            {item.checked && <img src="./assets/icons/done.png" alt="iCON" />}
            <img
              onClick={() => onDelete(item)}
              src="./assets/icons/del.png"
              alt="ICON"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
