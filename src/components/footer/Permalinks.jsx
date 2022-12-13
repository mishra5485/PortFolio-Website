import React from "react";

const Permalinks = ({ Title, href }) => {
  return (
    <li>
      <a href={href}>{Title}</a>
    </li>
  );
};

export default Permalinks;
