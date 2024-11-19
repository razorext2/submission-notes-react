import React from "react";
import ButtonDelete from "./DeleteButton";
import ButtonArchive from "./ArchiveButton";
import ButtonUnarchive from "./UnarchiveButton";

function ActionSection({ id, isArchived, onDelete, onArchive, onUnarchive }) {
  return (
    <div className="note-item__action">
      <ButtonDelete id={id} onDelete={onDelete} />
      {isArchived ? (
        <ButtonUnarchive id={id} onUnarchive={onUnarchive} />
      ) : (
        <ButtonArchive id={id} onArchive={onArchive} />
      )}
    </div>
  );
}

export default ActionSection;
