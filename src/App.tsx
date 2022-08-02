import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { nameState } from "./atoms";

function App() {
  const [name, setName] = useRecoilState(nameState);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    // console.log(e.target.value);
  };

  const handleClick = () => {
    alert(name);
  };

  return (
    <>
      <input type="text" value={name} onChange={handleChange}></input>
      <button onClick={handleClick}>Button</button>
      <h1>{name}</h1>
    </>
  );
}

export default App;
