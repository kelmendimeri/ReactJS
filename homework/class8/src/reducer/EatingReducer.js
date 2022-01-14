const initailState = {
  eating_pizza: "inital value",
  eating_tost: "initial value",
};

export const EatingReducer = (state = initailState, action) => {
  switch (action.type) {
    case "EAT_PIZZA":
      return { ...state, eating_pizza: action.pizza };
    case "EAT_TOST":
      return { ...state, eating_tost: action.tost };
    default:
      return state;
  }
};
