import React from "react";

export const Todo = ({
  todoList,
  markedAsDone,
  checkDel,
  todosSetter,
  getEditButton,
  changeEditButton,
}) => {
  return (
    <div id="todo">
      <h5>Todo List</h5>
      {todoList.length < 1 ? (
        <p>Empty</p>
      ) : (
        <ol>
          {todoList.map((item) => {
            return (
              <li key={item.id}>
                <input
                  name={item.id}
                  type={"text"}
                  value={item.text}
                  readOnly={item.accessText}
                  onChange={(event) => {
                    item.text = event.target.value;
                    todosSetter([...todoList]);
                  }}
                />

                <input
                  type={"checkbox"}
                  value={item.done}
                  checked={item.done}
                  onChange={() => {
                    markedAsDone(item);
                  }}
                />
                <button
                  onClick={() => {
                    if (getEditButton === "Edit") {
                      item.accessText = false;
                      changeEditButton((item.edit = "Update"));
                    } else {
                      item.accessText = true;
                      changeEditButton((item.edit = "Edit"));
                    }
                  }}
                >
                  {item.edit}
                </button>
                <input
                  type={"submit"}
                  value={"Delete"}
                  onClick={() => {
                    checkDel(item);
                  }}
                />
              </li>
            );
          })}
        </ol>
      )}
    </div>
  );
};
