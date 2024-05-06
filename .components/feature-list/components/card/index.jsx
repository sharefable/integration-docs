import React from "react";
import "./index.css";

const Card = ({ title, desc, url, buttonText, imgUrl, ...rest }) => {
  return (
    <div className={`con-card-carousel`} {...rest}>
      <div className="con-card-carousel__card">
        <div className="con-card-carousel__card-img">
          <img
            src={imgUrl}
            style={{ objectFit: "contain" }}
            layout="fill"
            alt="Card image"
          />
        </div>
        <div className="con-card-carousel__card-text">
          <h3 className="con-card-carousel__card-text-title">{title}</h3>
          <p className="con-card-carousel__card-text-para">{desc}</p>
          {buttonText && (
            <a href={url} className="con-card-carousel__card-text-link">
              {buttonText}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
