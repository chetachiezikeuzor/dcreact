import React, { useState } from "react";

const Hook1 = () => {
  const [name, setName] = useState("Chetachi");
  const changeName = () => {
    setName("Saran");
  };
  return (
    <div>
      Welcome {name}
      <button onClick={changeName}>ChangeName</button>
    </div>
  );
};

export default Hook1;
