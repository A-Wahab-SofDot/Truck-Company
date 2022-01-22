import React from "react";

export default function PaymentMethod() {
  const DATA = {
    name: "John Doe",
    number: "*** **** *** *789",
    date: "**/**",
    type: "Mastercard",
  };

  return (
    <>
      <div className="truckMethod">
        <div className="cardFlex">
          <img
            src="/images/creditCardB.svg"
            alt="CreditCrad"
            className="card"
          />
          <div className="cardInfo">
            <div className="name">
              <div className="title">Name on card</div>
              <div className="info">{DATA.name}</div>
            </div>
            <div className="name">
              <div className="title">Card number</div>
              <div className="info">{DATA.number}</div>
            </div>
            <div className="name">
              <div className="title">Expiry date</div>
              <div className="info">{DATA.date}</div>
            </div>
            <div className="name">
              <div className="title">Card type</div>
              <div className="info">{DATA.type}</div>
            </div>
            <button>Edit details</button>
          </div>
        </div>
        <div className="addPayment">
          <div className="heading">Add payment method</div>
          <input type="text" className="bInput" placeholder="Name on card" />
          <input type="text" className="bInput" placeholder="Card number" />
          <input type="text" className="sInput" placeholder="Expiry date" />
          <input type="text" className="sInput marginFour" placeholder="CVV" />
          <div className="buttonContainer">
            <button>Add method</button>
          </div>
        </div>
      </div>
    </>
  );
}
