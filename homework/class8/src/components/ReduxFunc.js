import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { coffeeCup, teaCup } from "../actions/DrinkAction";

export const ReduxFunc = () => {
  const dispatch = useDispatch();
  const coffee = useSelector((state) => state.DrinkReducer.drinking_coffee);
  const tea = useSelector((state) => state.DrinkReducer.drinking_tea);

  useEffect(() => {
    dispatch(coffeeCup());
    dispatch(teaCup());
  }, [dispatch]);

  return (
    <div id="redux-func">
      <h2>Functional Component: </h2>
      <h5>{coffee}</h5>
      <h5>{tea}</h5>
    </div>
  );
};
