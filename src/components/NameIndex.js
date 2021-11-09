import React from "react";

function NameIndex() {
  const names = ["candace", "miriam", "jenny"];
  const nameList = names.map((name, index) => (
    <h3 key={index}>
      {" "}
      {index} {name}
    </h3>
  ));
  return <div>{nameList}</div>;
}

export default NameIndex;
