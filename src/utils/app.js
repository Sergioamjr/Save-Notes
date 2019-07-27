import { getAllNotes, addNote } from "../services/notes";
import { SetNoteList } from "../store/notes/index";
import _get from "lodash/get";

export const formatNote = response => {
  return response.map(item => {
    const { data } = item;
    return {
      ...item,
      data: JSON.parse(data)
    };
  });
};

export const fetchNotesAndUpdateStore = async props => {
  try {
    const { response } = await getAllNotes();
    const responseFormatted = formatNote(response);
    props.dispatch(SetNoteList(responseFormatted));
  } catch (error) {}
};

export const formatAndCreateNewNote = async fn => {
  try {
    const dateTime = new Date().getTime();
    const data = {
      userID: dateTime,
      data: JSON.stringify({
        time: dateTime,
        blocks: [
          {
            type: "header",
            data: {
              text: ``,
              level: 1
            }
          }
        ]
      }),
      date: new Date(),
      titulo: "Nova nota"
    };

    const response = await addNote(data);
    fn(response);
  } catch (error) {}
};

export const getAndUpdateTitle = state => {
  let titulo = "Sem título";
  const data = _get(state, "note.data.blocks", false);
  if (data.length === 0) {
    return titulo;
  }
  titulo = data && data[0].data.text;
  return titulo;
};
