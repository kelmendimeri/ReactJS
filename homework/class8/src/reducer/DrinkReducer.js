const initialState = {
  drinking_coffee: "Initial value",
  drinking_tea: "Initial value",
};

export const DrinkReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DRINK_COFFEE":
      return { ...state, drinking_coffee: action.coffee };
    case "DRINK_TEA":
      return { ...state, drinking_tea: action.tea };
    default:
      return state;
  }
};
