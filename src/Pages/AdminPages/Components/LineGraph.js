import React, { useState, useEffect } from "react";
import ChartistGraph from "react-chartist";
import "./LineGraph.css";

export default function LineGraph(props) {
  const [amoutindollar, setamountindollar] = useState(6589);
  var data = {
    labels: [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JULY",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC",
    ],
    series: [
      [1000, 2000, 4000, 3000, 2000, 1000, 4000, 3500, 5000, 2200, 3500, 2000],
    ],
  };

  var options = {
    stretch: true,
    // showArea: true,

    high: 9000,
    low: 0,
    // axisX: {
    //   labelInterpolationFnc: function (value, index) {
    //     return index % 2 === 0 ? value : null;
    //   },
    // },
    axisY: {
      labelInterpolationFnc: function (value) {
        if (value == 0) {
          return;
        }
        return "$" + value;
      },
    },
  };

  var type = "Line";

  return (
    <div className="lineBox" style={props.mainStyle}>
      <div className="heading">
        <div className="desc">
          <img src="/images/dollar.svg" alt="dollar" />
          Monthly Revenue
        </div>
        <div className="amount">
          Current Month Total Revenue: ${amoutindollar}
        </div>
      </div>
      <div className="graph">
        <ChartistGraph
          className={"ct-octave"}
          data={data}
          options={options}
          type={type}
        />
      </div>
    </div>
  );
}
