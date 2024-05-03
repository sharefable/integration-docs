import React from "react";
import "./index.css";

const IntegrationDoc = (props) => {
  return (
    <section className="con-integration-doc">
      <div className="conBg">
        <div className="conWhy">
          <div className="conText">
            <div className="conTitle">
              <h2 className="title">{props.heading}</h2>
            </div>
            <p className="desc">{props.desc}</p>
            <a href="#">See documentation</a>
          </div>
          <div className="con-img">
            <img src={props.img} alt="integration-doc" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationDoc;
