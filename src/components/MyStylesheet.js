import React from "react";
import "./myStyles.css";

function MyStylesheet(props) {
  let nameClass = props.primary ? "primary" : "";
  return (
    <div>
      <h2 className={`${nameClass} font-style`}>MyStylesheet</h2>
    </div>
  );
}

export default MyStylesheet;
