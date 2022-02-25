import React from "react";

interface FormProps {
  title: string;
  note: string;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  handleNoteChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleTitleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const NoteForm: React.FC<FormProps> = ({
  title,
  note,
  onSubmit,
  handleTitleChange,
  handleNoteChange,
}) => {
  return (
    <div className="noteForm">
      <form onSubmit={onSubmit}>
        <label htmlFor="title">Title</label>
        <input
          className="titleInput"
          id="title"
          type="text"
          maxLength={18}
          value={title}
          onChange={handleTitleChange}
        />
        <label htmlFor="note">Note</label>
        <textarea
          id="note"
          name="note"
          value={note}
          rows={9}
          cols={25}
          onChange={handleNoteChange}
        ></textarea>
        <input className="formButton" type="submit" value="Create note" />
      </form>
    </div>
  );
};

export default NoteForm;
