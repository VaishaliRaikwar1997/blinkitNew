import React from "react";
import Props1 from "./Props1";

const Prop = () => {
  let name = "Aru singh";
  let age = 22;
  return (
    <div>
      <h1>this is a prop pages</h1>
      <Props1 name={name} age={age} />
    </div>
  );
};

export default Prop;
