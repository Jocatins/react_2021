import React from "react";

function NamePerson({ person }) {
  return (
    <div>
      <h3>
        This is id no {person.id} and the name is {person.name}
      </h3>
    </div>
  );
}

export default NamePerson;
