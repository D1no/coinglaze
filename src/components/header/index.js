import React from "react";
import { Heading } from "rebass";

const Header = ({ title = "Welcome to Coinglaze!" }) => {
  return (
    <div>
      <Heading data-test="title">{title}</Heading>
    </div>
  );
};

export default Header;
