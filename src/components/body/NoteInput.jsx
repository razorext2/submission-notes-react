import React from "react";
import autoBind from "auto-bind";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    // inisialisasi state
    this.state = {
      title: "",
      body: "",
      maxChar: 50,
      errorMessage: "",
    };

    autoBind(this);
  }

  onTitleEventHandler(event) {
    const title = event.target.value;

    if (title.length <= 50) {
      this.setState(() => ({
        title: title,
        maxChar: 50 - title.length,
      }));
    }
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();

    const { title, body } = this.state;

    // validasi untuk catatan kosong
    if (!title) {
      this.setState({ errorMessage: "Judul tidak boleh kosong!" });
      return;
    } else {
      if (!body) {
        this.setState({ errorMessage: "Keterangan tidak boleh kosong!" });
        return;
      }
    }

    // jika validasi berhasil, panggil fungsi addnote
    this.props.addNote(this.state);

    // reset form setelah menambahkan data baru
    this.setState({
      title: "",
      body: "",
      errorMessage: "",
    });
  }

  render() {
    return (
      <div className="note-input">
        <h2>Tambah Catatan</h2>
        <form action="" onSubmit={this.onSubmitEventHandler}>
          <p className="note-input__title__char-limit">
            Sisa karakter: {this.state.maxChar}
          </p>
          <input
            className="note-input__title"
            type="text"
            placeholder="Nama"
            value={this.state.title}
            onChange={this.onTitleEventHandler}
          />
          <textarea
            className="note-input__body"
            placeholder="Keterangan"
            value={this.state.body}
            onChange={this.onBodyChangeEventHandler}
          />
          <button type="submit" disabled={this.state.maxChar === 50}>
            Tambah
          </button>
        </form>

        {this.state.errorMessage && (
          <div style={{ color: "red", marginTop: "10px" }}>
            {this.state.errorMessage}
          </div>
        )}
      </div>
    );
  }
}

export default NoteInput;
