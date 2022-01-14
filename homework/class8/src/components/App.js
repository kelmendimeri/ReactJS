import React from "react";
import { ReduxFunc } from "./ReduxFunc";
import "../index.css";
import ReduxClass from "./ReduxClass";

export const App = () => {
  return (
    <div id="app">
      <ReduxFunc />
      <ReduxClass />
    </div>
  );
};
