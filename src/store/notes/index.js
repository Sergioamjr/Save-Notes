import { defaultStore } from "./../defaultStore";
const { notes } = defaultStore;

const SET_NOTES_LIST = "SET_NOTES_LIST";

export default function reducer(state = notes, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_NOTES_LIST:
      return { ...state, list: payload };
    default:
      return state;
  }
}

export function SetNoteList(payload) {
  return {
    type: SET_NOTES_LIST,
    payload
  };
}
