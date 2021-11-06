import React from "react";

function FunctionClick() {
  function clickHandler() {
    console.log("button clicks");
  }
  return (
    <div>
      <button onClick={clickHandler}>Click Test</button>
    </div>
  );
}

export default FunctionClick;
