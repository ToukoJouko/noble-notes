import React from "react";

interface NoteProps {
  note: {
    content: string;
  };

  handleDelete: () => void;
}

const Note: React.FC<NoteProps> = ({ note, handleDelete }) => {
  return (
    <div>
      <div>{note.content}</div>
      <button onClick={handleDelete}>delete</button>
    </div>
  );
};

export default Note;
