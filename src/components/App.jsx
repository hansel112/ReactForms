import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [headingText, setHeadingText] = useState("");

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleClick() {
    setHeadingText(name);

    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello {headingText}</h1>

      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button type="Submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
