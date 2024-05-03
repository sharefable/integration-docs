import React from "react";
import "./index.css";

const CompaniesLogo = [
  {
    id: 1,
    src: "https://www.sharefable.com/logo/salesforce-white-bg-logo.svg",
    altText: "Fable",
  },
  {
    id: 2,
    src: "https://www.sharefable.com/logo/slack-white-bg-logo.svg",
    altText: "Fable",
  },
  {
    id: 3,
    src: "https://www.sharefable.com/logo/ga-white-bg-logo.svg",
    altText: "Fable",
  },
  {
    id: 4,
    src: "https://www.sharefable.com/logo/marketo-white-bg-logo.svg",
    altText: "Fable",
  },
  {
    id: 5,
    src: "https://www.sharefable.com/logo/zapier-white-bg-logo.svg",
    altText: "Fable",
  },
  {
    id: 6,
    src: "https://www.sharefable.com/logo/hubspot-white-bg-logo.svg",
    altText: "Fable",
  },
  {
    id: 7,
    src: "https://www.sharefable.com/logo/segment-white-bg-logo.svg",
    altText: "Fable",
  },
];

const Integrations = (props) => {
  return (
    <section
      style={{
        ...props.style,
      }}
      className="con-integrations"
    >
      <div className="conIntegration">
        <div className="conLeft">
          <div className="conText">
            <h2 className="title">{props.heading}</h2>
            <p className="desc">{props.desc}</p>
          </div>
        </div>
        <div className="conRight">
          <div className="groupedLogo">
            <img
              layout="fill"
              src={"https://www.sharefable.com/companies-logo-grouped.svg"}
              alt={"Grouped logo"}
              style={{ objectFit: "contain" }}
            />
          </div>
          <div>
            <div className="companiesLogo">
              {CompaniesLogo.slice(0, 4).map(({ id, src, altText }) => (
                <div className={`logo ${"logo-" + id}`} key={id}>
                  <img alt={altText} src={src} />
                </div>
              ))}
            </div>
            <div className="companiesLogo">
              {CompaniesLogo.slice(4).map(({ id, src, altText }) => (
                <div className={`logo ${"logo-" + id}`} key={id}>
                  <img alt={altText} src={src} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
