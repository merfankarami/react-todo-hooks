import React, { useState } from "react";

import InputForm from "./FormInput/InputFrom";

const Main = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const inputChange = (event) => {
    setInput({
      input: event.target.value,
    });
  };

  const submit = () => {
    if (input !== "") {
      setTodos({
        todos: [input, ...todos]
      });
      setInput({input: ""})
    }
  };

  return (
    <div>
      <InputForm
        submit={submit}
        inputValue={input}
        change={inputChange}
      />
      <ol>{todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}</ol>
    </div>
  );
};

export default Main;
