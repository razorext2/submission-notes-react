import React from "react";

class NoteSearch extends React.Component {
  render() {
    return (
      <div className="note-search">
        <input
          className="note-input__title"
          type="text"
          placeholder="Ketik judul catatan yang ingin dicari..."
          onChange={this.props.onSearch}
        />
      </div>
    );
  }
}

export default NoteSearch;
