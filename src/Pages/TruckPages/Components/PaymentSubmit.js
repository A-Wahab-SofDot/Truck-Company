import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Dropdown } from "semantic-ui-react";

export default function PaymentSubmit() {
  const friendOptions = [
    {
      key: "Food",
      text: "Food",
      value: "Food",
    },
    {
      key: "Travel",
      text: "Travel",
      value: "Travel",
    },
  ];
  const DATA = {
    name: "John Doe",
    email: "driver@email.com",
  };
  return (
    <>
      <div className="driverContact">
        <div className="fixedInfo">
          <div className="title">Name</div>
          <div className="name">{DATA.name}</div>
        </div>
        <div className="fixedInfo">
          <div className="title">Email address</div>
          <div className="name">{DATA.email}</div>
        </div>
        <div className="dropDown">
          <Dropdown
            placeholder="Advertisement type"
            fluid
            selection
            options={friendOptions}
          />
        </div>
        <textarea className="messege" placeholder="Message"></textarea>
        <div className="buttonContainer">
          <button>Send</button>
        </div>
      </div>
    </>
  );
}
