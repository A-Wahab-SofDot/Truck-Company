import React from "react";
import LineGraph from "./LineGraph";

export default function Dashboard() {
  const DATA = [
    {
      title: "registered Drivers",
      amount: "11",
      color: "#0F71BA",
    },
    {
      title: "reg. Trucking Companies",
      amount: "46",
      color: "#150E56",
    },
    {
      title: "registered advertisements",
      amount: "56",
      color: "#00CAEA",
    },
    {
      title: "revenue generated from ads",
      amount: "$6,946.98",
      color: "#3FE225",
    },
  ];
  return (
    <>
      <div className="adminDashboard">
        <div className="cardFlex">
          {DATA.map((item, index) => {
            return (
              <div
                className="cardItems"
                style={{ backgroundColor: item.color }}
              >
                <div>
                  <div className="title">Total</div>
                  <div className="title">{item.title}</div>
                </div>
                <div className="amount">{item.amount}</div>
              </div>
            );
          })}
        </div>
        <div className="graphContainer">
          <LineGraph />
        </div>
      </div>
    </>
  );
}
