import axios from "axios";
import React, { useState, useEffect } from "react";

const Data = () => {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idFromBtnClick, setIdFromBtnClick] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        setPost(res.data);
        console.log();
      })
      .catch((err) => {
        console.log();
      });
  }, [idFromBtnClick]);
  const handleClick = () => {
    setIdFromBtnClick(id);
  };
  return (
    <div>
      <input
        type="text"
        value={id}
        onChange={(e) => {
          setId(e.target.value);
        }}
        placeholder="Enter your name"
      />
      <button onClick={handleClick}>Fetch Data</button>
      <p>{post.body}</p>
    </div>
  );
};

export default Data;
