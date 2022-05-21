import React from "react";

import { ISingleApiOption } from "../types";

const SingleApiOption = ({ name, content }: ISingleApiOption) => {
  return (
    <p className="option-wrapper">
      <span className="option">{name}: </span>
      {content}
    </p>
  );
};

export default SingleApiOption;
