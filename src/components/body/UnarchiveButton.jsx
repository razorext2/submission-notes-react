import React from "react";

function ButtonUnarchive({ id, onUnarchive }) {
  return (
    <button
      className="note-item__archive-button"
      onClick={() => onUnarchive(id)}
    >
      Unarsip
    </button>
  );
}

export default ButtonUnarchive;
