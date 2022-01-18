import React, { useState, useEffect } from "react";

const Hook3 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Count is ${count}`);
  });

  const [count1, setCount1] = useState(0);

  useEffect(() => {
    console.log(`Count1 is ${count1}`);
  });

  const changeCount = () => {
    setCount(count + 1);
  };

  const changeCount1 = () => {
    setCount1(count + 1);
  };
  return (
    <div>
      <p>{count}</p>
      <button
        onClick={(e) => {
          changeCount();
          changeCount1();
        }}
      >
        add to count
      </button>
    </div>
  );
};

export default Hook3;
