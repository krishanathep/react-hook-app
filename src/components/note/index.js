import React from "react";

export default function NoteList({ notes }) {
  return (
    <div>
      <h2>Note List</h2>
      <table border="1" width="80%">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
        {notes.map((note, i) => (
          <tbody key={note.id}>
            <tr>
              <td>{i}</td>
              <td>{note.title}</td>
              <td>{note.amount}</td>
              <td align="center">
                <button>Update</button> <button>Delete</button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}
