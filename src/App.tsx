import React from "react";
import { useRecoilState } from "recoil";
import { nameState } from "./atoms";

function App() {
  const [name, setName] = useRecoilState(nameState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    // console.log(e.target.value);
  };

  return (
    <>
      <input type="text" value={name} onChange={handleChange}></input>
      <h1>{name}</h1>
    </>
  );
}

export default App;
