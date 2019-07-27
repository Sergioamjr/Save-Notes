import { defaultStore } from "./../defaultStore";
const { notes } = defaultStore;

const SET_NOTES_LIST = "SET_NOTES_LIST";
const SET_SELECTED_ID = "SET_SELECTED_ID";
const SET_QUERYING_AS_TRUE = "SET_QUERYING_AS_TRUE";
const SET_QUERYING_AS_FALSE = "SET_QUERYING_AS_FALSE";
const SET_SWITCH_AS_TRUE = "SET_SWITCH_AS_TRUE";
const REMOVE_NOTE_FROM_LIST = "REMOVE_NOTE_FROM_LIST";

export default function reducer(state = notes, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_NOTES_LIST:
      return { ...state, list: payload };
    case SET_SELECTED_ID:
      return { ...state, selectedId: payload };
    case SET_QUERYING_AS_TRUE:
      return { ...state, isQuerying: true, canSwitchNote: false };
    case SET_QUERYING_AS_FALSE:
      return { ...state, isQuerying: false };
    case SET_SWITCH_AS_TRUE:
      return { ...state, canSwitchNote: true };
    case REMOVE_NOTE_FROM_LIST:
      return { ...state, list: state.list.filter(({ id }) => id !== payload) };
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

export function SetQueryingAsTrue() {
  return {
    type: SET_QUERYING_AS_TRUE
  };
}

export function SetQueryingAsFalse() {
  return {
    type: SET_QUERYING_AS_FALSE
  };
}

export function SetSwitchAsTrue() {
  return {
    type: SET_SWITCH_AS_TRUE
  };
}

export function RemoveNoteFromList(payload) {
  return {
    type: REMOVE_NOTE_FROM_LIST,
    payload
  };
}
