import ListRow from "./ListRow";
import ListRowCell from "./ListRowCell";

import ListHeader from "./ListHeader";
import ListHeaderCell from "./ListHeaderCell";

import styles from "./List.module.css";

const List = ({ rows, selectedCurrency, timestamps, onOrderSelect }) => {
  const updatedRows = rows.map((row) => {
    const id = row["&id"];
    const matchingTimestamp = timestamps.results.find((item) => item["&id"] === id);
    const orderSubmittedDate = matchingTimestamp?.timestamps.orderSubmitted || "";
    return { ...row, orderSubmittedDate };
  });
  return (
    <table className={styles.container}>
      <thead>
        <ListHeader>
          <ListHeaderCell>Order ID</ListHeaderCell>
          <ListHeaderCell>Buy/Sell</ListHeaderCell>
          <ListHeaderCell>Country</ListHeaderCell>
          <ListHeaderCell>Order Submitted</ListHeaderCell>
          <ListHeaderCell>Order Volume / {selectedCurrency}</ListHeaderCell>
        </ListHeader>
      </thead>
      <tbody>
        {updatedRows.map((row) => (
          <ListRow key={row["&id"]} onOrderSelect={() =>onOrderSelect(row)}>
            <ListRowCell>{row["&id"]}</ListRowCell>
            <ListRowCell>{row.executionDetails.buySellIndicator}</ListRowCell>
            <ListRowCell>{row.executionDetails.orderStatus}</ListRowCell>
            <ListRowCell>{row.orderSubmittedDate}</ListRowCell>
            <ListRowCell>{`${row.bestExecutionData.orderVolume[selectedCurrency]} ${selectedCurrency}`}</ListRowCell>
          </ListRow>
        ))}
      </tbody>
    </table>
  );
};

export default List;
