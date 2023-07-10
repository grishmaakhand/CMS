import React from "react";

const Logo = (props) => {
  return (
    <div className="flex items-center">
      <a href="/">
        <img
          src={props.url}
          alt="Logo"
          className="h-14 w-26 bg-logocolor sm:w-30 md:w-45 lg:h-19 w-60 xl:h-18 w-70"
        />
      </a>
    </div>
  );
};

export default Logo;
