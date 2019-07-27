import { RequestFactory, RequestFactoryWithParams } from "./config";

export const getSingleNote = async _id => {
  return await RequestFactory(`/list-note?_id=${_id}`);
};

export const getAllNotes = async () => {
  return await RequestFactory("/list-all-notes");
};

export const addNote = async params => {
  return await RequestFactoryWithParams(`/add-note`, { params });
};

export const updateNote = async params => {
  return await RequestFactoryWithParams(`/update-note`, { params }, "patch");
};

export const deleteSingleNote = async _id => {
  return await RequestFactoryWithParams(
    `/delete-note?_id=${_id}`,
    {},
    "delete"
  );
};
