import React from "react";

function GypsyChild(props) {
  return (
    <div>
      {/* Connecting to the parent without a parameter */}
      <button onClick={props.greetHandler}>Connect to parent</button>
      {/* Connecting to the parent with a parameter */}
      <button onClick={() => props.greetHandler("Child component")}>
        Connect to parent
      </button>
    </div>
  );
}

export default GypsyChild;
