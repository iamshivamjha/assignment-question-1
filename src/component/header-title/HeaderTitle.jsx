import styles from "./HeaderTitle.module.css";
import data from "../../assets/data.json";
const getOrderCount = () => {
  return data.header.returnedHits;
}
const HeaderTitle = ({ primaryTitle }) => {
  return (
    <div className={styles.container}>
      <h1>{primaryTitle}</h1>
      <div>{getOrderCount()}</div>
    </div>
  );
};

export default HeaderTitle;
