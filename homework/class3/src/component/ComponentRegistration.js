import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

export const ComponentRegistration = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [country, setCountry] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [showTable, setShowTable] = useState();

  function showtableContent() {
    setShowTable(!showTable);
  }

  return (
    <div id="component-registration">
      <label>First Name: </label>
      <input
        name="firstName"
        type={"text"}
        onChange={(event) => {
          setFirstName(event.target.value);
        }}
        placeholder="enter you first name"
      />
      <label>Last Name: </label>
      <input
        name="lastName"
        type={"text"}
        onChange={(event) => {
          setLastName(event.target.value);
        }}
        placeholder="enter you last name"
      />
      <label>Country: </label>
      <input
        name="country"
        type={"text"}
        onChange={(event) => {
          setCountry(event.target.value);
        }}
        placeholder="enter you country"
      />
      <label>Username: </label>
      <input
        name="username"
        type={"text"}
        onChange={(event) => {
          setUsername(event.target.value);
        }}
        placeholder="enter you username"
      />
      <label>Password: </label>
      <input
        name="password"
        type={"password"}
        onChange={(event) => {
          setPassword(event.target.value);
        }}
        placeholder="enter you password"
      />
      <label>Email: </label>
      <input
        name="email"
        type={"email"}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        placeholder="enter you email"
      />

      <button className="btn btn-primary" onClick={showtableContent}>
        Show
      </button>
      <hr />
      {showTable && (
        <table>
          <tr>
            <td>Firstname</td>
            <td>Lastname</td>
            <td>Coutnry</td>
            <td>Username</td>
            <td>Password</td>
            <td>Email</td>
          </tr>
          <tr>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{country}</td>
            <td>{username}</td>
            <td>{password}</td>
            <td>{email}</td>
          </tr>
        </table>
      )}
    </div>
  );
};
