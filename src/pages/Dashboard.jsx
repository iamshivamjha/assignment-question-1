import React, { useState , useEffect } from "react";

// Data
import mockData from "../assets/data.json";
import timestamps from "../assets/timeStamps.json";

// Components
import Dropdown from "../component/dropdown/Dropdown";
import HeaderTitle from "../component/header-title/HeaderTitle";
import Search from "../component/search/Search";
import List from "../component/list/List";


// Styles
import styles from "./Dashboard.module.css";
import Card from "../component/card/Card";

const Dashboard = () => {
  const [currency, setCurrency] = useState("EUR");
  const [searchText, setSearchText] = useState("");
  const [filteredRows, setFilteredRows] = useState([]);
  const [selectedOrderDetails, setSelectedOrderDetails] = useState({});
  const [selectedOrderTimeStamps, setSelectedOrderTimeStamps] = useState({});


  // const handleOrderSelection = (orderId) => {
  //   // Find the selected order details from the data
  //   const selectedOrder = mockData.results.find((order) => order["&id"] === orderId);
  //   setSelectedOrderDetails(selectedOrder);

  //   // Find the selected order timestamps from the timestamps data
  //   const selectedTimestamps = timestamps.results.find((item) => item["&id"] === orderId);
  //   setSelectedOrderTimeStamps(selectedTimestamps);
  // };

  useEffect(() => {
    // Filter the rows based on the search text
    const filteredRows = mockData.results.filter((row) =>
      row["&id"].toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRows(filteredRows);
  }, [searchText]);

  return (
    <div>
      <div className={styles.header}>
        <HeaderTitle primaryTitle="Orders"/>
        <div className={styles.actionBox}>
          <Search
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Dropdown
            options={["GBP", "USD", "JPY", "EUR"]}
            onChange={(e) => setCurrency(e.target.value)}
            selectedItem={currency}
          />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.section}>
          <Card
            cardData={selectedOrderDetails}
            title="Selected Order Details"
          />
          <Card
            cardData={selectedOrderTimeStamps}
            title="Selected Order Timestamps"
          />
        </div>
        <List 
        rows={filteredRows} 
        selectedCurrency={currency}
        timestamps={timestamps}
        onOrderSelect={(orderId) => {

          console.log('orderId', orderId)
          const obj = {
            orderRecieved: orderId.orderSubmitted,
            orderStatusUpdated: orderId.orderSubmitted,
            orderSubmitted: orderId.orderSubmitted,
          }
          console.log('obj', obj)
          setSelectedOrderDetails(orderId.executionDetails || {});
          setSelectedOrderTimeStamps(obj || {});
        }}
        />
      </div>
    </div>
  );
};

export default Dashboard;
