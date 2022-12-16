import React from "react";
import Logo from "../Logo";

const Background = ({ children }) => {
  return (
    <div className="flex mx-20 my-20  flex-col justify-center">
      <Logo />

      {children}
    </div>
  );
};

export default Background;
