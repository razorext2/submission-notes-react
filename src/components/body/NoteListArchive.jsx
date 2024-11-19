import React from "react";
import NoteItem from "./NoteItem";

function NoteListArchive({ archivedNotes, onDelete, onUnarchive }) {
  if (archivedNotes.length === 0) {
    return (
      <p className="notes-list__empty-message">
        Tidak ada catatan yang diarsipkan
      </p>
    );
  }

  return (
    <div className="notes-list">
      {archivedNotes.map((note) => (
        <NoteItem
          key={note.id}
          id={note.id}
          isArchived={true}
          onUnarchive={onUnarchive}
          onDelete={onDelete}
          {...note}
        />
      ))}
    </div>
  );
}

export default NoteListArchive;
