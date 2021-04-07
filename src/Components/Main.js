import React, { useState } from "react";

import InputForm from "./FormInput/InputFrom";

const Main = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const submit = () => {
    if (input !== "") {
      const newTodos = [...todos];
      newTodos.push({ id: Math.random() * 10, title: input });
      console.log(newTodos);
      setTodos(newTodos);
      setInput("");
    }
    console.log(todos);
  };

  return (
    <div>
      <InputForm
        submit={submit}
        inputValue={input}
        change={(e) => setInput(e.target.vlaue)}
      />
      <ol>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ol>
    </div>
  );
};

export default Main;
