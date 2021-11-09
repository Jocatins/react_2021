import React from "react";

const heading = {
  fontSize: "22px",
  color: "aqua",
  fontFamily: "Georgia",
};

function InlineStyle() {
  return (
    <div>
      <h2 style={heading}>Inline style</h2>
    </div>
  );
}

export default InlineStyle;
