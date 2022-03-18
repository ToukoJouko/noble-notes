import React from "react";
import Bottle from "./Bottle";

interface NoteProps {
  note: {
    title: string;
    content: string;
    creationDate: string;
  };

  handleDelete: () => void;
}

const Note: React.FC<NoteProps> = ({ note, handleDelete }) => {
  return (
    <div className="bottleContainer">
      <Bottle
        content={note.content}
        title={note.title.toUpperCase()}
        creationDate={note.creationDate}
        handleDelete={handleDelete}
      ></Bottle>
    </div>
  );
};

export default Note;
