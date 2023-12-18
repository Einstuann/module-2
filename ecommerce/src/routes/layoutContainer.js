import React from "react";

import FooterComponent from "../components/organisms/footer/footer";
import HeaderComponent from "../components/organisms/header/header";

const LayoutContainer = ({ component: Component, isHeader, isFooter }) => {
  return (
    <>
      {isHeader && <HeaderComponent />}
      <Component />
      {isFooter && <FooterComponent />}
    </>
  );
};

export default LayoutContainer;
