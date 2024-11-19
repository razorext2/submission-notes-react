import React from "react";
import NoteItemContent from "./NoteItemContent";
import ActionSection from "./ActionSection";

function NoteItem({
  id,
  title,
  body,
  createdAt,
  isArchived,
  onDelete,
  onArchive,
  onUnarchive,
}) {
  return (
    <div className="note-item">
      <NoteItemContent title={title} body={body} createdAt={createdAt} />
      <ActionSection
        id={id}
        isArchived={isArchived}
        onDelete={onDelete}
        onArchive={onArchive}
        onUnarchive={onUnarchive}
      />
    </div>
  );
}

export default NoteItem;
