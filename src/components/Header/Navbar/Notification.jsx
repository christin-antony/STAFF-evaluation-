import React from "react";

const Notification = ({ name, sentence, img, time }) => {
  return (
    <>
      <a className="dropdown-item" >
        <div className="d-flex align-items-center">
          <div className="user-online">
            <img src={img} className="msg-avatar" alt="user avatar" />
          </div>
          <div className="flex-grow-1">
            <h6 className="msg-name">
              {name}
              <span className="msg-time float-end">{time}</span>
            </h6>
            <p className="msg-info">{sentence}</p>
          </div>
        </div>
      </a>
    </>
  );
};

export default Notification;
