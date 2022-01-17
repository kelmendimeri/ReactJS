import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addCakes,
  buyCake,
  reduceCakes,
  restoreCakes,
} from "../actions/CakeAction";
export const Cake = () => {
  const dispatch = useDispatch();
  const cakes = useSelector((state) => state.CakeReducer.cakes);
  const message = useSelector((state) => state.CakeReducer.message);
  return (
    <div id="cake">
      <h2>Cake: {cakes}</h2>
      {message !== undefined && <p>{message}</p>}
      <button
        disabled={cakes < 1}
        onClick={() => {
          dispatch(buyCake(1));
        }}
      >
        Buy 1 cake
      </button>
      <br />
      <input
        type={"number"}
        id="cakes-substract"
        name="hello"
        placeholder={"Prodaj torti"}
        onChange={(event) => {
          if (cakes - event.target.value < 0) {
            return (event.target.value = cakes);
          }
          if (event.target.value < 0) {
            document.getElementById("button-substract").disabled = true;
          } else {
            document.getElementById("button-substract").disabled = false;
          }
        }}
      />
      <button
        id={"button-substract"}
        disabled={cakes < 1}
        onClick={() => {
          if (document.getElementById("cakes-substract").value === "") {
            document.getElementById("cakes-substract").value = 0;
          }
          dispatch(addCakes(+document.getElementById("cakes-substract").value));
        }}
      >
        Substract
      </button>
      <br />
      <input
        type={"number"}
        id="cakes-adding"
        placeholder={"kupuvaj torti"}
        onChange={(event) => {
          if (event.target.value < 0) {
            document.getElementById("button-add").disabled = true;
          } else {
            document.getElementById("button-add").disabled = false;
          }
        }}
      />
      <button
        id={"button-add"}
        onClick={() => {
          if (document.getElementById("cakes-adding").value === "") {
            document.getElementById("cakes-adding").value = 0;
          }
          dispatch(reduceCakes(+document.getElementById("cakes-adding").value));
        }}
      >
        Adding
      </button>
      <br />
      <button
        onClick={() => {
          dispatch(restoreCakes());
        }}
      >
        Restores
      </button>
    </div>
  );
};
