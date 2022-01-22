import React from "react";

export default function PostJob() {
  return (
    <>
      <div className="truckPost">
        <div className="itemFlex">
          <input type="text" placeholder="Job title" />
          <textarea
            placeholder="Job description"
            cols="30"
            rows="10"
          ></textarea>
          <textarea placeholder="Qualification" cols="30" rows="10"></textarea>
          <textarea placeholder="Experience" cols="30" rows="10"></textarea>
        </div>
        <div className="buttonContainer">
          <button>Submit</button>
        </div>
      </div>
    </>
  );
}
