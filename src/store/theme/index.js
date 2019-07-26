import { defaultStore } from "./../defaultStore";
const { theme } = defaultStore;

const SET_THEME = "SET_THEME";

export default function reducer(state = theme, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_THEME:
      return { ...state, ...payload };
    default:
      return state;
  }
}

export function SetTheme(payload) {
  return {
    type: SET_THEME,
    payload
  };
}
