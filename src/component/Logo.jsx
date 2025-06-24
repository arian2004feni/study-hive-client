import React from "react";
import { GiBookCover } from "react-icons/gi";
import { PiUsersThreeBold } from "react-icons/pi";

const Logo = () => {
  return (
    <span className="flex flex-col-reverse items-center text-main">
      <GiBookCover className="text-4xl" />
      <PiUsersThreeBold className="text-2xl -mb-3" />
    </span>
  );
};

export default Logo;
