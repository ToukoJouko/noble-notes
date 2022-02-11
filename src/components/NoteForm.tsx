import React from "react";

interface FormProps {
  note: string;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const NoteForm: React.FC<FormProps> = ({ note, onSubmit, handleChange }) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" value={note} onChange={handleChange} />
        <button type="submit">Create note</button>
      </form>
    </div>
  );
};

export default NoteForm;
