import React from "react";

export default function CmsText() {
  const DATA = [
    {
      title: "Landing page - New jobs section",
      input:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sem quam orci viverra risus pretium consequat tincidunt.",
    },
    {
      title: "Lorem ipsum dolor - sit amet",
      input:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sem quam orci viverra risus",
    },
    {
      title: "Landing page - New jobs section",
      input:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sem quam orci viverra risus pretium con",
    },
    {
      title: "Lorem ipsum dolor - sit amet",
      input: "Lorem ipsum dolor sit amet, consectesequat tincidunt.",
    },
  ];

  return (
    <>
      <div className="adminText">
        <div className="itemFlex">
          {DATA.map((item, index) => {
            return (
              <>
                <div className="selectionBox">
                  <div className="heading">{item.title}</div>
                  <input
                    type="text"
                    className="editInput"
                    placeholder={item.input}
                  />
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
