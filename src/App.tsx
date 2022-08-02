import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { choiceState } from "./atoms";

function App() {
  const [choice, setChoice] = useRecoilState(choiceState);

  const fruits = ["apple", "orange", "pinapple", "strawberry", "grage"];
  const options = fruits.map((fruit) => {
    return <option value={fruit}>{fruit}</option>;
  });

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setChoice(event.target.value);
  };

  return (
    <>
      <select onChange={handleChange}>{options}</select>
      <h3>You choose "{choice}"</h3>
    </>
  );
}

export default App;
