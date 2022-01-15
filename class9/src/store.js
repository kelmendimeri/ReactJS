import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import combine from "./reducer";

const middleware = applyMiddleware(thunk, createLogger());

export default createStore(combine, middleware);
