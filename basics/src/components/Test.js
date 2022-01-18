import React from "react";
const changeNames = () => {
  const names = ["Chetachi", "Yuan", "Lee"];
  const random = Math.floor(Math.random() * 3);
  return names[random];
};

const Test = () => {
  return (
    <>
      <p>{changeNames()}</p>
    </>
  );
};

export default Test;
