import React from "react";

export const DropDown = ({ element }) => {
  return (
    <div id="dropdown">
      <h2>DropDown</h2>
      <select>
        {element.map((e, i) => {
          return (
            <option key={i} value={e.value}>
              {e.value}
            </option>
          );
        })}
      </select>
    </div>
  );
};
