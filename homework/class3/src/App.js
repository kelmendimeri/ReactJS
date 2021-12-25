import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { ComponentRegistration } from "./component/ComponentRegistration";
import { ClassRegistration } from "./component/ClassRegistration2";

export const App = () => {
  return (
    <div id="App">
      <h2>Component State</h2>
      <ComponentRegistration />
      <hr />
      <h2>Class State</h2>
      <ClassRegistration />
    </div>
  );
};
