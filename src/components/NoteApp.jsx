import React from "react";
import NoteList from "./body/NoteList";
import { getInitialData } from "../utils/data";
import NoteInput from "./body/NoteInput";
import NoteArchive from "./body/NoteListArchive";
import NoteSearch from "./body/NoteSearch";
import autoBind from "auto-bind";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      archivedNotes: [],
      searchText: "",
    };

    autoBind(this);
  }

  onArchiveHandler(id) {
    // ambil berdasarkan id
    const noteWannaArchive = this.state.notes.find((note) => note.id === id);
    // perbarui state
    this.setState((prevState) => ({
      notes: prevState.notes.filter((note) => note.id !== id),
      archivedNotes: [...prevState.archivedNotes, noteWannaArchive],
    }));
  }

  onUnarchiveHandler(id) {
    // ambil berdasarkan id
    const noteWannaUnarchive = this.state.archivedNotes.find(
      (note) => note.id === id
    );
    // perbarui state
    this.setState((prevState) => ({
      archivedNotes: prevState.archivedNotes.filter((note) => note.id !== id),
      notes: [...prevState.notes, noteWannaUnarchive],
    }));
  }

  onSearchHandler(event) {
    this.setState({ searchText: event.target.value });
  }

  onDeleteHandler(id) {
    this.setState((prevState) => ({
      notes: prevState.notes.filter((note) => note.id !== id),
      archivedNotes: prevState.archivedNotes.filter((note) => note.id !== id),
    }));
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: +new Date(),
          },
        ],
      };
    });
  }

  getFilteredNotes(notes) {
    const text = this.state.searchText.toLowerCase();
    return notes.filter((note) => note.title.toLowerCase().includes(text));
  }

  render() {
    const findNotes = this.getFilteredNotes(this.state.notes);
    const findArchiveNotes = this.getFilteredNotes(this.state.archivedNotes);

    return (
      <div className="note-app__body">
        <NoteInput addNote={this.onAddNoteHandler} />
        <NoteSearch onSearch={this.onSearchHandler} />
        <h2> Daftar Catatan </h2>
        <NoteList
          notes={findNotes}
          onDelete={this.onDeleteHandler}
          onArchive={this.onArchiveHandler}
        />
        <h2> Catatan Yang Diarsip </h2>
        <NoteArchive
          archivedNotes={findArchiveNotes}
          onDelete={this.onDeleteHandler}
          onUnarchive={this.onUnarchiveHandler}
        />
      </div>
    );
  }
}

export default NoteApp;
