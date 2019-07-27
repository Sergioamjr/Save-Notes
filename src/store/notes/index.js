import { defaultStore } from "./../defaultStore";
const { notes } = defaultStore;

const SET_NOTES_LIST = "SET_NOTES_LIST";
const SET_SELECTED_ID = "SET_SELECTED_ID";

export default function reducer(state = notes, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_NOTES_LIST:
      return { ...state, list: payload };
    case SET_SELECTED_ID:
      return { ...state, selectedId: payload };
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

export function SetSelectedId(payload) {
  return {
    type: SET_SELECTED_ID,
    payload
  };
}
