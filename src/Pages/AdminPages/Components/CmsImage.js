import React from "react";

export default function CmsImage() {
  const DATA = [
    {
      title: "Landing page - New jobs section",
      image: "/images/c1.svg",
      size: "768*566",
    },
    {
      title: "Lorem ipsum dolor - sit amet",
      image: "/images/c2.svg",
      size: "768*566",
    },
    {
      title: "Lorem ipsum dolor - sit amet",
      image: "/images/c3.svg",
      size: "768*566",
    },
    {
      title: "Landing page - New jobs section",
      image: "/images/c4.svg",
      size: "768*566",
    },
    {
      title: "Lorem ipsum dolor - sit amet",
      image: "/images/c5.svg",
      size: "768*566",
    },
    {
      title: "Lorem ipsum dolor - sit amet",
      image: "/images/c6.svg",
      size: "768*566",
    },
  ];

  return (
    <>
      <div className="adminImage">
        <div className="imageContainer">
          {DATA.map((item, index) => {
            return (
              <>
                <div className="imageItem">
                  <div className="sizeBox">{item.size}</div>
                  <div className="heading">{item.title}</div>
                  <img src={item.image} alt={item.image} className="image" />
                </div>
              </>
            );
          })}
        </div>
        <div className="buttonContainer">
          <button className="save">Save</button>
          <button className="reset">Reset</button>
        </div>
      </div>
    </>
  );
}
