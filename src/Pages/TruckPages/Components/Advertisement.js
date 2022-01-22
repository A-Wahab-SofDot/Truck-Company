import React from "react";
import { Item } from "semantic-ui-react";

export default function Advertisement() {
  const DATA = [
    {
      package: "basic",
      source: "/images/basic.svg",
      color: "#0F71BA",
      amount: 395,
      feature: [
        {
          title: "Logo on banner.",
        },
        {
          title: "Company profile page.",
        },
        {
          title: "1 job listing.",
        },
        {
          title: "$25/mo FB ad spend.",
        },
        {
          title: "1 FB/Insta & story posts/mo.",
        },
      ],
    },
    {
      package: "starter",
      source: "/images/starter.svg",
      color: "#150E56",
      amount: 595,
      feature: [
        {
          title: "Logo on banner.",
        },
        {
          title: "Company profile page.",
        },
        {
          title: "1 job listing.",
        },
        {
          title: "$25/mo FB ad spend.",
        },
        {
          title: "1 FB/Insta & story posts/mo.",
        },
      ],
    },
    {
      package: "pro",
      source: "/images/pro.svg",
      color: "#00CAEA",
      amount: 695,
      feature: [
        {
          title: "Logo on banner.",
        },
        {
          title: "Company profile page.",
        },
        {
          title: "1 job listing.",
        },
        {
          title: "$25/mo FB ad spend.",
        },
        {
          title: "1 FB/Insta & story posts/mo.",
        },
      ],
    },
    {
      package: "enterprise",
      source: "/images/enterprise.svg",
      color: "#000000",
      amount: 995,
      feature: [
        {
          title: "Logo on banner.",
        },
        {
          title: "Company profile page.",
        },
        {
          title: "1 job listing.",
        },
        {
          title: "$25/mo FB ad spend.",
        },
        {
          title: "1 FB/Insta & story posts/mo.",
        },
      ],
    },
  ];
  return (
    <>
      <div className="truckAdvertisement">
        {DATA.map((item, index) => {
          return (
            <>
              <div className="advertisementCard">
                <img src={item.source} alt="package" className="package" />
                <div className="heading">${item.amount}</div>
                <div className="overview">
                  <img src="/images/overview.svg" alt="over" className="main" />
                  <div className="list">
                    <ul>
                      {item.feature.map((item, index) => {
                        return (
                          <>
                            <li>{item.title}</li>
                          </>
                        );
                      })}
                    </ul>
                  </div>
                </div>
                <div className="buttonContainerAdvertisement">
                  <button style={{ backgroundColor: item.color }}>
                    Shop Now
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
