import React from "react";
import "./index.css";

const About = (props) => {
  return (
    <section className="con-content-block">
      <div className="conBg">
        <div className="conWhy">
          <div className="conText">{props.children}</div>
        </div>
      </div>
    </section>
  );
};

export default About;
