import React from "react";
import Bottle from "./Bottle";

interface NoteProps {
  note: {
    title: string;
    content: string;
  };

  handleDelete: () => void;
}

const Note: React.FC<NoteProps> = ({ note, handleDelete }) => {
  return (
    <div>
      <Bottle
        content={note.content}
        title={note.title.toUpperCase()}
        delete={handleDelete}
      ></Bottle>
    </div>
  );
};

export default Note;
