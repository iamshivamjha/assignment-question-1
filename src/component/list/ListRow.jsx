import styles from "./ListRow.module.css";
import React from "react";
  const ListCell = ({ children, onOrderSelect }) => {
    return (
      <tr className={styles.cell} onClick={() => onOrderSelect(children)}>
        {children}
      </tr>
    );
  };

export default ListCell;
