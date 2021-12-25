import React, { useState } from "react";
import { Todo } from "./Todo";

export const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 0,
      text: "Go to gym",
      done: false,
      brisi: false,
      edit: "Edit",
      accessText: true,
    },
    {
      id: 1,
      text: "Eat Lunch",
      done: false,
      brisi: false,
      edit: "Edit",
      accessText: true,
    },
    {
      id: 2,
      text: "Do your homework",
      done: false,
      brisi: false,
      edit: "Edit",
      accessText: true,
    },
  ]);
  const [newTodo, setNewTodo] = useState("");
  const [editButton, setEditButton] = useState("Edit");

  const addNewTodo = (todo) => {
    let item = {
      id: todos.length,
      text: newTodo,
      done: false,
      brisi: false,
      edit: "Edit",
      accessText: true,
    };
    setTodos([...todos, item]);
    setNewTodo("");
  };

  const markedAsDone = (todo) => {
    setTodos([
      ...todos.map((item) =>
        item.id === todo.id
          ? {
              id: item.id,
              text: item.text,
              done: !item.done,
              brisi: item.brisi,
              edit: item.edit,
              accessText: true,
            }
          : item
      ),
    ]);
  };

  const deleteTodo = (todo) => {
    const removeItem = todos.filter((item) => {
      return item.id !== todo.id;
    });
    setTodos(removeItem);
  };

  return (
    <div id="app">
      <h2>MyApp</h2>
      <input
        type={"text"}
        placeholder="Enter you todo here"
        value={newTodo}
        onChange={(event) => {
          setNewTodo(event.target.value);
        }}
      />
      <button onClick={addNewTodo}>Add New Todo</button>
      <Todo
        id="todo"
        todoList={todos}
        markedAsDone={markedAsDone}
        checkDel={deleteTodo}
        todosSetter={setTodos}
        getEditButton={editButton}
        changeEditButton={setEditButton}
      />
    </div>
  );
};
