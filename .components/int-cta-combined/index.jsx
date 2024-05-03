import React from "react";
import "./index.css";
import Integrations from "../integrations";
import CTASection from "../cta-section";

const IntCtaCombined = (props) => {
  return (
    <>
      <Integrations
        heading={props.integrations.heading}
        desc={props.integrations.desc}
        style={{
          backgroundColor: "#d0d0ff",
          borderTopRightRadius: "40px",
          borderTopLeftRadius: "40px",
          paddingBottom: "40px",
        }}
      />
      <CTASection
        style={{
          marginTop: "-40px",
        }}
        heading={props.cta.heading}
        desc={props.cta.desc}
        buttonText={props.cta.buttonText}
        url={props.cta.url}
      />
    </>
  );
};

export default IntCtaCombined;
