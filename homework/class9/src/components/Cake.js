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
      {message !== undefined ? <p>{message}</p> : false}
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
        onChange={(event) => {
          if (cakes - event.target.value < 0) {
            return (event.target.value = cakes);
          }
        }}
      />
      <button
        disabled={cakes < 1}
        onClick={() => {
          if (document.getElementById("cakes-substract").value === "") {
            document.getElementById("cakes-substract").value = 0;
          }
          dispatch(
            addCakes(parseInt(document.getElementById("cakes-substract").value))
          );
        }}
      >
        Substract
      </button>
      <br />
      <input type={"number"} id="cakes-adding" />
      <button
        onClick={() => {
          if (document.getElementById("cakes-adding").value === "") {
            document.getElementById("cakes-adding").value = 0;
          }
          dispatch(
            reduceCakes(parseInt(document.getElementById("cakes-adding").value))
          );
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
