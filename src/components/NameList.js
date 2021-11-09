import React from "react";
import NamePerson from "./NamePerson";

function NameList() {
  const persons = [
    {
      id: 1,
      name: "Big guy",
      age: 30,
      skill: "React",
    },
    {
      id: 2,
      name: "Joca",
      age: 30,
      skill: "Java",
    },
  ];
  const personList = persons.map((person) => (
    <NamePerson key={person.id} person={person} />
  ));
  return <div>{personList}</div>;
}

export default NameList;
