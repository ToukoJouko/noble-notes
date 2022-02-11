import React, { useState, useEffect } from "react";
import NoteForm from "./components/NoteForm";
import Note from "./components/Note";

const App: React.FC = () => {
  let storedNotes = window.localStorage.getItem("notes") as string;
  const [notes, setNotes] = useState<any>(
    storedNotes ? JSON.parse(storedNotes) : ""
  );
  const [newNote, setNewNote] = useState<string>("");

  useEffect(() => {
    window.localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const deleteNote = (id: number) => {
    let storedNotes = window.localStorage.getItem("notes") as string;
    let currentNotes = JSON.parse(storedNotes);
    console.log(currentNotes);
    for (let i = 0; i < currentNotes.length; i++) {
      if (i === id) {
        currentNotes.splice(i, 1);
      }
    }
    console.log(currentNotes);
    //window.localStorage.removeItem("notes");
    setNotes(currentNotes);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const noteObject = {
      content: newNote,
    };
    //notes.push(noteObject);
    setNotes(notes.concat(noteObject));
    //localStorage supports only strings. The array of notes must be converted to a string so that the notes can be stored.

    window.localStorage.setItem(
      "notes",
      JSON.stringify(notes.concat(noteObject))
    );
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    setNewNote(event.target.value);
  };

  const handleDelete = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
  };

  const renderNotes = () => {
    if (notes) {
      return (
        <ul>
          {notes.map((note: any, index: any) => (
            <Note
              key={index}
              note={note}
              handleDelete={() => deleteNote(index)}
            />
          ))}
        </ul>
      );
    } else {
      return null;
    }
  };

  return (
    <div>
      <NoteForm
        note={newNote}
        handleChange={handleChange}
        onSubmit={handleSubmit}
      />
      <ul>
        {notes &&
          notes.map((note: any, index: any) => (
            <Note
              key={index}
              note={note}
              handleDelete={() => deleteNote(index)}
            />
          ))}
      </ul>
    </div>
  );
};
export default App;
