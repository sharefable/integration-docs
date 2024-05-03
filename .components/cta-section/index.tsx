import React from "react";
import "./index.css";

const CTASection = (props) => {
  return (
    <div
      style={{
        ...props.style,
      }}
      className="cta-section"
    >
      <div className="con-cta">
        <div className="conCTA">
          <div className="conLeft">
            <div className="conText">
              <h2 className="title">{props.heading}</h2>
              <p className="desc">{props.desc}</p>
            </div>
          </div>
          <div className="conRight">
            <a url={props.url} style={{ cursor: "pointer" }} className="btn">
              {props.buttonText}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
