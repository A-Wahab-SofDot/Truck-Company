import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Jobs() {
  const DATA = [
    {
      text: "Lorem ipsum dolor sit amet",
      aboutDetail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus maecenas arcu luctus elementum. Lacus, gravida enim, scelerisque molestie. Id facilisis dui rhoncus interdum adipiscing. Tincidunt quis facilisis penatibus proin enim.",
      jobDetail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus maecenas arcu luctus elementum. Lacus, gravida enim, scelerisque molestie. Id facilisis dui rhoncus interdum adipiscing. Tincidunt quis facilisis penatibus proin enim.",
      qualificationOne: "Lorem ipsum dolor sit amet.",
      qualificationOTwo: "Lorem ipsum dolor sit amet.",
      experienceOne: "Lorem ipsum dolor sit amet.",
      experienceOTwo: "Lorem ipsum dolor sit amet.",
    },
    {
      text: "Lorem ipsum dolor sit amet",
      aboutDetail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus maecenas arcu luctus elementum. Lacus, gravida enim, scelerisque molestie. Id facilisis dui rhoncus interdum adipiscing. Tincidunt quis facilisis penatibus proin enim.",
      jobDetail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus maecenas arcu luctus elementum. Lacus, gravida enim, scelerisque molestie. Id facilisis dui rhoncus interdum adipiscing. Tincidunt quis facilisis penatibus proin enim.",
      qualificationOne: "Lorem ipsum dolor sit amet.",
      qualificationOTwo: "Lorem ipsum dolor sit amet.",
      experienceOne: "Lorem ipsum dolor sit amet.",
      experienceOTwo: "Lorem ipsum dolor sit amet.",
    },
    {
      text: "Lorem ipsum dolor sit amet",
      aboutDetail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus maecenas arcu luctus elementum. Lacus, gravida enim, scelerisque molestie. Id facilisis dui rhoncus interdum adipiscing. Tincidunt quis facilisis penatibus proin enim.",
      jobDetail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus maecenas arcu luctus elementum. Lacus, gravida enim, scelerisque molestie. Id facilisis dui rhoncus interdum adipiscing. Tincidunt quis facilisis penatibus proin enim.",
      qualificationOne: "Lorem ipsum dolor sit amet.",
      qualificationOTwo: "Lorem ipsum dolor sit amet.",
      experienceOne: "Lorem ipsum dolor sit amet.",
      experienceOTwo: "Lorem ipsum dolor sit amet.",
    },
    {
      text: "Lorem ipsum dolor sit amet",
      aboutDetail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus maecenas arcu luctus elementum. Lacus, gravida enim, scelerisque molestie. Id facilisis dui rhoncus interdum adipiscing. Tincidunt quis facilisis penatibus proin enim.",
      jobDetail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus maecenas arcu luctus elementum. Lacus, gravida enim, scelerisque molestie. Id facilisis dui rhoncus interdum adipiscing. Tincidunt quis facilisis penatibus proin enim.",
      qualificationOne: "Lorem ipsum dolor sit amet.",
      qualificationOTwo: "Lorem ipsum dolor sit amet.",
      experienceOne: "Lorem ipsum dolor sit amet.",
      experienceOTwo: "Lorem ipsum dolor sit amet.",
    },
    {
      text: "Lorem ipsum dolor sit amet",
      aboutDetail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus maecenas arcu luctus elementum. Lacus, gravida enim, scelerisque molestie. Id facilisis dui rhoncus interdum adipiscing. Tincidunt quis facilisis penatibus proin enim.",
      jobDetail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus maecenas arcu luctus elementum. Lacus, gravida enim, scelerisque molestie. Id facilisis dui rhoncus interdum adipiscing. Tincidunt quis facilisis penatibus proin enim.",
      qualificationOne: "Lorem ipsum dolor sit amet.",
      qualificationOTwo: "Lorem ipsum dolor sit amet.",
      experienceOne: "Lorem ipsum dolor sit amet.",
      experienceOTwo: "Lorem ipsum dolor sit amet.",
    },
    {
      text: "Lorem ipsum dolor sit amet",
      aboutDetail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus maecenas arcu luctus elementum. Lacus, gravida enim, scelerisque molestie. Id facilisis dui rhoncus interdum adipiscing. Tincidunt quis facilisis penatibus proin enim.",
      jobDetail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus maecenas arcu luctus elementum. Lacus, gravida enim, scelerisque molestie. Id facilisis dui rhoncus interdum adipiscing. Tincidunt quis facilisis penatibus proin enim.",
      qualificationOne: "Lorem ipsum dolor sit amet.",
      qualificationOTwo: "Lorem ipsum dolor sit amet.",
      experienceOne: "Lorem ipsum dolor sit amet.",
      experienceOTwo: "Lorem ipsum dolor sit amet.",
    },
  ];
  return (
    <>
      <div className="truckJobs">
        <div className="jobsHeader">
          <div className="titles">
            <Link to="/truck/job/posted">
              <div className="name borderBottomBlue">Posted jobs</div>
            </Link>
            <Link to="/truck/job/applied">
              <div className="name">Applications received</div>
            </Link>
          </div>
          <Link to="/truck/postjob">
            <button className="newJob">
              <img src="/images/plus.svg" alt="plus" />
              <span className="d-none d-sm-inline">Post new job</span>
            </button>
          </Link>
        </div>
        <div className="detailsContainer">
          <>
            {DATA.map((item, index) => {
              return EachItem(item, index);
            })}
          </>
        </div>
      </div>
    </>
  );
}

function EachItem(item) {
  const [detailActive, setDetailActive] = useState(false);
  return (
    <>
      <div className="mainContainerJobs">
        <div
          className="appliedJobs"
          onClick={() => {
            setDetailActive(!detailActive);
          }}
        >
          <div className="title">{item.text}</div>
          <img
            src={
              detailActive === true
                ? "/images/arrowUp.svg"
                : "/images/arrowDown.svg"
            }
            alt="arrow"
          />
        </div>
        {detailActive && (
          <>
            <div className="jobDescription">
              <div className="desc">
                <div className="title">About us</div>
                <div className="details">{item.aboutDetail}</div>
                <div className="title">Job description</div>
                <div className="details">{item.aboutDetail}</div>
                <div className="title">Qualification</div>
                <div className="detailList">
                  <ul>
                    <li>{item.qualificationOne}</li>
                    <li>{item.qualificationOTwo}</li>
                  </ul>
                </div>
                <div className="title">Experience</div>
                <div className="detailList">
                  <ul>
                    <li>{item.experienceOne}</li>
                    <li>{item.experienceOTwo}</li>
                  </ul>
                </div>
              </div>
              <div className="buttonContainer">
                <button>Edit</button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
