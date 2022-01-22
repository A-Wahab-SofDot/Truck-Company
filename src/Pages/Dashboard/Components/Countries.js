import React from "react";

export default function Countries() {
  const DATA = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "West Virginia",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "Wisconsin",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "Washington DC",
    "Wyoming",
  ];

  return (
    <>
      <div className="Countries">
        <div className="truckBg">
          <img src="/images/truckBg.svg" alt="trueBg" />
        </div>
        <div className="partner">
          <div className="heading">TruckinLink Job Outlook</div>
        </div>
        <p>
          According to the U.S. Department of Labor, overall job opportunities
          look favorable for truck drivers, especially for long haul drivers. In
          addition to occupational growth, numerous job openings will occur as
          experienced truck drivers leave this large occupation to retire, or
          leave the labor force all together.
        </p>
        <p style={{ paddingTop: "20px", paddingBottom: "80px" }}>
          Truck drivers and driver/sales workers comprise of one the largest
          occupations in the United States, holding 3.5 million jobs. The number
          of heavy and tractor trailer drivers is expected to grow 5% between
          2014 - 2024 according to the department of labor.
        </p>
        <div className="partner">
          <div className="heading adjustHeading">
            Truck Driver Job Listing Near You
          </div>
        </div>
        <div className="listCountry">
          {DATA.map((item, index) => {
            return (
              <div key={index} className="nameCountry">
                {item}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
