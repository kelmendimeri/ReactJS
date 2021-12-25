import React, { useState, useEffect } from "react";
// import { DropDown } from "./DropDown";
import { Input } from "./Input";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fieldType, setFieldType] = useState("password");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("singleLine");
  const [selectItems] = React.useState([
    { value: "Facebook", name: "Facebook" },
    { value: "Instagram", name: "Instagram" },
    { value: "SnapChat", name: "SnapChat" },
  ]);
  const [dropdownMessage, setDropDownMessage] = useState("");

  useEffect(() => {
    console.log(
      "Username: " +
        username +
        "\nPassword: " +
        password +
        "\nsolial: " +
        dropdownMessage
    );
  }, [username, password, dropdownMessage]);

  const display = () => {
    alert(
      "Username: " +
        username +
        "\nPassword: " +
        password +
        "\nMessage: " +
        message +
        "\nSocial: " +
        dropdownMessage
    );
  };

  const changeFieldType = (event) => {
    event.preventDefault();
    setFieldType(fieldType === "password" ? "text" : "password");
  };

  function changeTagFunc(event) {
    event.preventDefault();
    setMessageType(
      messageType === "singleLine" ? "multipleLine" : "singleLine"
    );
  }

  return (
    <div id="login">
      <form>
        <h2>Login</h2>
        <Input
          type={"text"}
          value={username}
          placeholder={"Enter username"}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <Input
          type={fieldType}
          name={"password"}
          value={password}
          placeholder={"Enter username"}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          toggle={changeFieldType}
        />
        {messageType === "singleLine" ? (
          <div>
            <Input
              type={"text"}
              name={"singleLine"}
              value={message}
              placeholder={"enter single line"}
              onChange={(event) => {
                setMessage(event.target.value);
              }}
              changeTag={changeTagFunc}
            />
            <button onClick={changeTagFunc}>
              <i className="fa fa-comment"></i>
            </button>
          </div>
        ) : (
          <div>
            <textarea
              name={"multipleLine"}
              placeholder={"enter multiple line"}
              value={message}
              onChange={(event) => {
                setMessage(event.target.value);
              }}
            ></textarea>
            <button onClick={changeTagFunc}>
              <i className="fa fa-comment"></i>
            </button>
          </div>
        )}
        {/* <DropDown element={selectItems} /> */}
        <select
          select={"selected"}
          onChange={(event) => {
            setDropDownMessage(event.target.value);
          }}
        >
          {selectItems.map((item, i) => {
            return (
              <option key={i} value={item.value}>
                {item.name}
              </option>
            );
          })}
        </select>
        <button className="action-button" onClick={display}>
          Sign In
        </button>
      </form>
    </div>
  );
};
