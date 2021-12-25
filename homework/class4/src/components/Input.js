import React from "react";

export const Input = ({ type, name, placeholder, value, onChange, toggle }) => {
  return (
    <div id="input">
      <p>
        <input
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
        {name === "password" && (
          <button type="button" onClick={toggle} className="eye-button">
            <i
              className={name === "password" ? "fa fa-eye-slash" : "fa fa-eye"}
              id="show_eye"
            ></i>
          </button>
        )}

        {/* code below didn't work properly find the problem later 

        {name === "singleLine" && (
          <button className="eye-button" type="button" onClick={changeTag}>
            <i
              className={
                name === "singleLine"
                  ? "fa fa-comment"
                  : "fa fa-comment-alt-lines"
              }
            ></i>
          </button>
        )} 
        */}
      </p>
    </div>
  );
};
