import React from "react";
import "./index.css";

const CustomComponent = (props) => {
  const { headerComp: Header, footerComp: Footer } = props;
  return (
    <div>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
};

export default CustomComponent;
