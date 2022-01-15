import {
  BUY_CAKE,
  RESTORE_CAKES,
  ADD_CAKE,
  REDUCE_CAKE,
} from "../constants/CakeConstants";

export const buyCake = (numOfCakes) => {
  return {
    type: BUY_CAKE,
    payload: numOfCakes,
    message: "Empty",
  };
};

export const restoreCakes = () => {
  return { type: RESTORE_CAKES, payload: 10, message: undefined };
};

export const addCakes = (numOfCakes) => {
  return { type: ADD_CAKE, payload: numOfCakes, message: undefined };
};
export const reduceCakes = (numOfCakes) => {
  return { type: REDUCE_CAKE, payload: numOfCakes, message: undefined };
};
