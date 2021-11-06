import { React } from "react";

// function Greet() {
//   return <h1>first react greeting. Hello titans</h1>;
// }

const TitanFunc = (props) => {
  const { name, titanName } = props;
  return (
    <h1>
      Hello {name} aka {titanName}
    </h1>
  );
};
export default TitanFunc;
