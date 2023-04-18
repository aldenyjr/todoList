import React from "react";
import styles from "./Tarefas.module.css";

export default function Tarefas({ dados, onClick, onDelete }) {
  return (
    <div className={styles.itensContainer}>
      {dados.map((item) => (
        <div key={item.id} className={styles.itens}>
          <div onClick={() => onClick(item)}>
            <p className={item.checked ? styles.checked : ""}>{item.title}</p>
          </div>
          <div>
            {item.checked && <img src="./assets/icons/done.png" alt="iCON" />}
            <img
              className={styles.iconeDelete}
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
