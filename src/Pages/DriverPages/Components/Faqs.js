import React, { useState } from "react";

export default function Faqs() {
  const DATA = [
    {
      text: "Lorem ipsum dolor sit amet",
      detail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue eget lorem nisl pellentesque nulla massa eget eu eu. Libero eu sed maecenas sapien amet. Viverra vel in nec nisi id eleifend nunc non. Elementum, neque, proin adipiscing nisl pellentesque. Orci malesuada ac quis mauris. Congue sapien arcu, neque gravida quisque neque in imperdiet. Id id at tellus aliquam sed ornare commodo sodales dui. Mauris porta eget mattis sed aliquam risus morbi habitant dolor. ",
    },
    {
      text: "Lorem ipsum dolor sit amet",
      detail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue eget lorem nisl pellentesque nulla massa eget eu eu. Libero eu sed maecenas sapien amet. Viverra vel in nec nisi id eleifend nunc non. Elementum, neque, proin adipiscing nisl pellentesque. Orci malesuada ac quis mauris. Congue sapien arcu, neque gravida quisque neque in imperdiet. Id id at tellus aliquam sed ornare commodo sodales dui. Mauris porta eget mattis sed aliquam risus morbi habitant dolor. ",
    },
    {
      text: "Lorem ipsum dolor sit amet",
      detail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue eget lorem nisl pellentesque nulla massa eget eu eu. Libero eu sed maecenas sapien amet. Viverra vel in nec nisi id eleifend nunc non. Elementum, neque, proin adipiscing nisl pellentesque. Orci malesuada ac quis mauris. Congue sapien arcu, neque gravida quisque neque in imperdiet. Id id at tellus aliquam sed ornare commodo sodales dui. Mauris porta eget mattis sed aliquam risus morbi habitant dolor. ",
    },
    {
      text: "Lorem ipsum dolor sit amet",
      detail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue eget lorem nisl pellentesque nulla massa eget eu eu. Libero eu sed maecenas sapien amet. Viverra vel in nec nisi id eleifend nunc non. Elementum, neque, proin adipiscing nisl pellentesque. Orci malesuada ac quis mauris. Congue sapien arcu, neque gravida quisque neque in imperdiet. Id id at tellus aliquam sed ornare commodo sodales dui. Mauris porta eget mattis sed aliquam risus morbi habitant dolor. ",
    },
    {
      text: "Lorem ipsum dolor sit amet",
      detail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue eget lorem nisl pellentesque nulla massa eget eu eu. Libero eu sed maecenas sapien amet. Viverra vel in nec nisi id eleifend nunc non. Elementum, neque, proin adipiscing nisl pellentesque. Orci malesuada ac quis mauris. Congue sapien arcu, neque gravida quisque neque in imperdiet. Id id at tellus aliquam sed ornare commodo sodales dui. Mauris porta eget mattis sed aliquam risus morbi habitant dolor. ",
    },
    {
      text: "Lorem ipsum dolor sit amet",
      detail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue eget lorem nisl pellentesque nulla massa eget eu eu. Libero eu sed maecenas sapien amet. Viverra vel in nec nisi id eleifend nunc non. Elementum, neque, proin adipiscing nisl pellentesque. Orci malesuada ac quis mauris. Congue sapien arcu, neque gravida quisque neque in imperdiet. Id id at tellus aliquam sed ornare commodo sodales dui. Mauris porta eget mattis sed aliquam risus morbi habitant dolor. ",
    },
  ];

  return (
    <>
      <div className="driverfaqs">
        {DATA.map((item, index) => {
          return EachItem(item);
        })}
      </div>
    </>
  );
}

function EachItem(item) {
  const [detailActive, setDetailActive] = useState(false);
  return (
    <>
      <div
        className="faqsJobs"
        onClick={() => {
          setDetailActive(!detailActive);
        }}
      >
        <div className="title">{item.text}</div>
        <img
          src={
            detailActive === true
              ? "/images/collapse.svg"
              : "/images/expand.svg"
          }
          alt="arrowDown"
        />
      </div>
      {detailActive && (
        <>
          <div className="details">{item.detail}</div>
        </>
      )}
    </>
  );
}
