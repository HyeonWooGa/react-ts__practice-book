import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");

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
