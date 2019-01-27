import React from "react";

const Header = ({ title = "Welcome to Coinglaze!" }) => {
  return (
    <div>
      <h1 data-test="title">{title}</h1>
    </div>
  );
};

export default Header;
