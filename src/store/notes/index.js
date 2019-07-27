import { defaultStore } from "./../defaultStore";
const { notes } = defaultStore;

const SET_NOTES_LIST = "SET_NOTES_LIST";
const SET_SELECTED_ID = "SET_SELECTED_ID";
const SET_QUERYING_AS_TRUE = "SET_QUERYING_AS_TRUE";
const SET_QUERYING_AS_FALSE = "SET_QUERYING_AS_FALSE";

export default function reducer(state = notes, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_NOTES_LIST:
      return { ...state, list: payload };
    case SET_SELECTED_ID:
      return { ...state, selectedId: payload };
    case SET_QUERYING_AS_TRUE:
      return { ...state, isQuerying: true };
    case SET_QUERYING_AS_FALSE:
      return { ...state, isQuerying: false };
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

export function SetQueryingAsTrue(payload) {
  return {
    type: SET_QUERYING_AS_TRUE
  };
}

export function SetQueryingAsFalse(payload) {
  return {
    type: SET_QUERYING_AS_FALSE
  };
}
