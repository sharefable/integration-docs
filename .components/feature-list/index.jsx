import React, { useState } from "react";
import "./index.css";
import Card from "./components/card";

const Carousel = (props) => {
  const [currentCard, setCurrentCard] = useState(0);
  const prev = () => {
    setCurrentCard((prv) => (prv === 0 ? props.features.length - 1 : prv - 1));
  };
  const next = () => {
    setCurrentCard((prv) => (prv === props.features.length - 1 ? 0 : prv + 1));
  };
  return (
    <div className="con-carousel">
      <div className="con-highlight">
        <div className="conText">
          <div className="conTitle">
            <h2 className="title">{props.heading}</h2>
            <div className="starIllus">
              <img
                src={
                  "https://www.sharefable.com/design/outlined-star-illus.svg"
                }
                alt="Fable"
                width={60}
                height={100}
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="conCards">
        <div className="cards">
          <button onClick={prev} className="navigate-btn left">
            <img
              src="https://www.iconpacks.net/icons/2/free-arrow-left-icon-3099-thumb.png"
              alt="left"
            />
          </button>
          {props.features.map(
            ({ title, imgUrl, desc, url, buttonText }, idx) => (
              <Card
                style={{
                  transition: "all 0.3s ease-out",
                  transform: `translateX(-${currentCard * 100}%)`,
                }}
                key={`${idx}-${title}`}
                title={title}
                imgUrl={imgUrl}
                desc={desc}
                url={url}
                buttonText={buttonText || "Learn more"}
              />
            ),
          )}
          <div className="navigate-con">
            {props.features.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentCard(index)}
                className={`navigate-circles ${currentCard === index ? "active" : ""}`}
              ></button>
            ))}
          </div>
          <button onClick={next} className="navigate-btn right">
            <img
              src="https://www.iconpacks.net/icons/2/free-arrow-left-icon-3099-thumb.png"
              alt="right"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
