import React from "react";
import { BiCheck } from "react-icons/bi";

const Servicedetails = ({ data }) => {
  return (
    <li>
      <BiCheck className="service__list-icon" />
      <p>{data}</p>
    </li>
  );
};

export default Servicedetails;
