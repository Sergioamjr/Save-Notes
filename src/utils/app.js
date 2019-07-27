import { getAllNotes, addNote } from "../services/notes";
import { SetNoteList } from "../store/notes/index";

export const fetchNotesAndUpdateStore = async props => {
  try {
    const { response } = await getAllNotes();
    const responseFormatted = response.map(item => {
      const { data } = item;
      return {
        ...item,
        data: JSON.parse(data)
      };
    });
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
              text: `Título`,
              level: 1
            }
          }
        ]
      }),
      date: new Date(),
      titulo: "Titulo"
    };

    const response = await addNote(data);
    fn(response);
  } catch (error) {}
};
