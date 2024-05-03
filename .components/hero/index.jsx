import React from "react";
import "./index.css";

const Hero = (props) => {
  return (
    <div className={"container"}>
      <div className={"container__hero conHero"}>
        <div className="heading-con">
          <h1 className={"heading"}>{props.heading}</h1>
          <div className="starIllus">
            <img
              src={"https://www.sharefable.com/design/outlined-star-illus.svg"}
              alt="Fable"
              width={60}
              height={100}
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
        <p className={"container__hero-desc"}>{props.desc}</p>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            marginTop: "2rem",
          }}
        >
          <a
            style={{ color: "white" }}
            className={"container__hero-button"}
            href={props.button.url}
          >
            {props.button.label}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
