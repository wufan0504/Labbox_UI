const initState = {
  darkMode: false,
};

const themeReducer = (state = initState, action) => {
  switch (action.type) {
    case "SWITCH_THEME":
      return { darkMode: !state.darkMode };

    default:
      return state;
  }
};

export default themeReducer;
