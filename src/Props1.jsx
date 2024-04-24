import React from "react";

const Props1 = (props) => {
  console.log(props);
  return (
    <div>
      <h1>hii!! my name is {props.name} </h1>
      <p>my age is {props.age}</p>
    </div>
  );
};

export default Props1;
