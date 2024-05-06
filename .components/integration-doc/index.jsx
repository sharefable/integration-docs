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
            {props?.btnText && (
              <div className="conBtn desktop">
                <a className="btn" href={props.url}>
                  {props.btnText}
                </a>
              </div>
            )}
          </div>
          <div className="con-img">
            <img src={props.img} alt="integration-doc" />
            {props?.btnText && (
              <div className="conBtn mobile">
                <a className="btn" href={props.url}>
                  {props.btnText}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationDoc;
