import React, { useState, useEffect } from "react";
import NoteForm from "./components/NoteForm";
import Note from "./components/Note";

const App: React.FC = () => {
  const storedNotes = window.localStorage.getItem("notes") as string;
  const [notes, setNotes] = useState<any>(
    storedNotes ? JSON.parse(storedNotes) : []
  );
  const [newTitle, setNewTitle] = useState<string>("");
  const [newNote, setNewNote] = useState<string>("");

  useEffect(() => {
    window.localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const deleteNote = (id: number) => {
    const storedNotes = window.localStorage.getItem("notes") as string;
    let currentNotes = JSON.parse(storedNotes);

    for (let i = 0; i < currentNotes.length; i++) {
      if (i === id) {
        currentNotes.splice(i, 1);
      }
    }

    setNotes(currentNotes);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const noteObject = {
      title: newTitle,
      content: newNote,
    };
    //notes.push(noteObject);
    setNotes(notes.concat(noteObject));
    //localStorage supports only strings. The array of notes must be converted to a string so that the notes can be stored.
    window.localStorage.setItem(
      "notes",
      JSON.stringify(notes.concat(noteObject))
    );
    setNewTitle("");
    setNewNote("");
  };

  const handleNoteChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    event.preventDefault();
    setNewNote(event.target.value);
  };

  const handleTitleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    event.preventDefault();
    setNewTitle(event.target.value);
  };

  return (
    <div>
      <NoteForm
        title={newTitle}
        note={newNote}
        onSubmit={handleSubmit}
        handleTitleChange={handleTitleChange}
        handleNoteChange={handleNoteChange}
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
