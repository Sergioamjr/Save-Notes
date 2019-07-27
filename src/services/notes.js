import { RequestFactory } from "./config";
import { getAuth } from "./localStorage";

export const getSingleNote = async _id => {
  const { userid } = getAuth();
  return await RequestFactory(`list-note?_id=${_id}&userid=${userid}`);
};

export const getAllNotes = async () => {
  const { userid } = getAuth();
  return await RequestFactory(`list-all-notes?userid=${userid}`);
};

export const addNote = async params => {
  const { userid } = getAuth();
  return await RequestFactory(
    `add-note`,
    { ...params, userID: userid },
    "post"
  );
};

export const updateNote = async params => {
  return await RequestFactory(`update-note`, params, "patch");
};

export const deleteSingleNote = async _id => {
  return await RequestFactory(`delete-note?_id=${_id}`, {}, "delete");
};
