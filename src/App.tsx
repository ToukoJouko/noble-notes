import React, { useState, useEffect, useRef } from "react";
import NoteForm from "./components/NoteForm";
import Note from "./components/Note";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App: React.FC = () => {
  const storedNotes = window.localStorage.getItem("notes") as string;
  const [notes, setNotes] = useState<any>(
    storedNotes ? JSON.parse(storedNotes) : []
  );
  const [newTitle, setNewTitle] = useState<string>("");
  const [newNote, setNewNote] = useState<string>("");
  const [showForm, setShowForm] = useState<boolean>(false);

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

    const date = new Date();
    const creationDate =
      date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();

    const noteObject = {
      title: newTitle,
      content: newNote,
      creationDate: creationDate,
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

  const formToggle = (): void => {
    setShowForm(!showForm);
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
    <div className="app">
      <Header showForm={showForm} formToggle={formToggle} />

      {showForm ? (
        <NoteForm
          title={newTitle}
          note={newNote}
          onSubmit={handleSubmit}
          handleTitleChange={handleTitleChange}
          handleNoteChange={handleNoteChange}
        />
      ) : (
        ""
      )}
      <div className="notesContainer">
        {notes &&
          notes.map((note: any, index: any) => (
            <Note
              key={index}
              note={note}
              handleDelete={() => deleteNote(index)}
            />
          ))}
      </div>

      <Footer />
    </div>
  );
};
export default App;
