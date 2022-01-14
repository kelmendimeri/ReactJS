import { combineReducers } from "redux";
import { DrinkReducer } from "./DrinkReducer";
import { EatingReducer } from "./EatingReducer";

export default combineReducers({ DrinkReducer, EatingReducer });
