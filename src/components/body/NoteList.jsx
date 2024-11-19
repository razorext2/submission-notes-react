import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, onDelete, onArchive }) {
  if (notes.length === 0) {
    return (
      <p className="notes-list__empty-message">
        Tidak ada catatan. Silahkan tambah catatan
      </p>
    );
  }

  return (
    <div className="notes-list">
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          id={note.id}
          isArchived={false}
          onArchive={onArchive}
          onDelete={onDelete}
          {...note}
        />
      ))}
    </div>
  );
}

export default NoteList;
