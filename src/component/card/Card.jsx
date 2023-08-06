
import styles from "./Card.module.css";
import React from "react";
const Card = ({ cardData, title }) => {
  if (!cardData || Object.keys(cardData).length === 0) return null;
  console.log('cardData', cardData)
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      {Object.entries(cardData).map(([k, v]) => (
        <div className={styles.cell}>
          <div className={styles.value}>{k}</div>
          <div className={styles.value}>{v}</div>
        </div>
      ))}
    </div>
  );
};

export default Card;
