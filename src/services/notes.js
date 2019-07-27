import { RequestFactory } from "./config";

export const getSingleNote = async _id => {
  return await RequestFactory(`list-note?_id=${_id}`);
};

export const getAllNotes = async () => {
  return await RequestFactory("list-all-notes");
};

export const addNote = async params => {
  return await RequestFactory(`add-note`, params, "post");
};

export const updateNote = async params => {
  return await RequestFactory(`update-note`, params, "patch");
};

export const deleteSingleNote = async _id => {
  return await RequestFactory(`delete-note?_id=${_id}`, {}, "delete");
};
