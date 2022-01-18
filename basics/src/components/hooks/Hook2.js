import React, { useState } from "react";

const Hook2 = () => {
  const [name, setName] = useState("");
  const changeName = () => {
    setName("Saran");
  };
  return (
    <div>
      <form>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Enter your name"
        />
      </form>
      <p>{name}</p>
    </div>
  );
};

export default Hook2;
