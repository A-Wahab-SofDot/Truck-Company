import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

export default function JobsApplied() {
  const DATA2 = [
    {
      text: "Lorem ipsum dolor sit amet",
      count: 4,
    },
    {
      text: "Lorem ipsum dolor sit amet",
      count: 4,
    },
    {
      text: "Lorem ipsum dolor sit amet",
      count: 4,
    },
    {
      text: "Lorem ipsum dolor sit amet",
      count: 4,
    },
    {
      text: "Lorem ipsum dolor sit amet",
      count: 4,
    },
    {
      text: "Lorem ipsum dolor sit amet",
      count: 4,
    },
  ];

  return (
    <>
      <div className="truckJobs">
        <div className="jobsHeader">
          <div className="titles">
            <Link to="/truck/job/posted">
              <div className="name">Posted jobs</div>
            </Link>
            <Link to="/truck/job/applied">
              <div className="name borderBottomBlue">Applications received</div>
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
            {DATA2.map((item, index) => {
              return EachItemTwo(item, index);
            })}
          </>
        </div>
      </div>
    </>
  );
}

function EachItemTwo(item, index) {
  function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  const useStyles = makeStyles((theme) => ({
    paper: {
      position: "absolute",
      width: "95%",
      backgroundColor: "white",
      border: "none",
      boxShadow: "2px 4px 15px rgba(0, 0, 0, 0.07)",
      padding: 0,
      borderRadius: "10px",
    },
  }));
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const myModel = (
    <div style={modalStyle} className={classes.paper}>
      <div className="modalContainer">
        <img
          onClick={() => {
            handleClose();
            console.log("close in model is being clicked");
          }}
          src="/images/close.svg"
          alt=""
          className="close"
        />
        <div className="modalImageContainer">
          <img src="/images/userGirl.svg" alt="userGirl" />
        </div>
        <div className="modalInfoContainer">
          <div className="boxInfo">
            <img src="/images/name.svg" alt="svg" />
            <div className="title">Marie Star</div>
          </div>
          <div className="boxInfo">
            <img src="/images/message.svg" alt="svg" />
            <div className="title">applicant@email.com</div>
          </div>
          <div className="boxInfo">
            <img src="/images/phone.svg" alt="svg" />
            <div className="title">+95 265 14875469</div>
          </div>
        </div>
        <div className="modalCvContainer">
          <div className="cvData">
            <div className="title">CV</div>
            <div className="attachment">
              <img src="/images/paperClip.svg" alt="svg" />
              my_CV_Driver.docx
            </div>
          </div>
          <div className="cvData">
            <div className="title">Cover Letter</div>
            <div className="attachment">
              <img src="/images/paperClip.svg" alt="svg" />
              my_CoverL_Driver.docx
            </div>
          </div>
        </div>
        <div className="modalButtonContainer">
          <button className="reject">Reject</button>
          <button className="contact">Contact</button>
        </div>
      </div>
    </div>
  );
  const [detailActiveTwo, setDetailActiveTwo] = useState(false);
  return (
    <>
      <Modal
        open={open}
        onClose={() => {
          handleClose();
        }}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {myModel}
      </Modal>
      <div key={index} className="applicatantContainer">
        <div
          className="appliedJobs noBoxShadow"
          onClick={() => {
            setDetailActiveTwo(!detailActiveTwo);
          }}
        >
          <div className="title">
            {item.text}
            <div className="count">({item.count} applications received)</div>
          </div>
          <img src="/images/arrowDown.svg" alt="arrowDown" />
        </div>
        {detailActiveTwo && (
          <>
            <div className="applicants">
              <div
                className="title"
                onClick={() => {
                  handleOpen();
                }}
              >
                Marie Star
              </div>
              <div
                onClick={() => {
                  handleOpen();
                }}
                className="title"
              >
                John Doe
              </div>
              <div
                onClick={() => {
                  handleOpen();
                }}
                className="title"
              >
                David James
              </div>
              <div
                onClick={() => {
                  handleOpen();
                }}
                className="title"
              >
                Adam Smith
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
