import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { nameState } from "./atoms";

function App() {
  const [name, setName] = useRecoilState(nameState);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    // console.log(e.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(name);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={handleChange}></input>
        <button type="submit">Button</button>
      </form>
      <h1>{name}</h1>
    </>
  );
}

export default App;
