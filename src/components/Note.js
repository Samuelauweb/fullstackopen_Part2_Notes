import React from 'react'

const Note = ({ note, toggleImportance }) => {
  const label = note.important
  ? 'make not important' : 'make important'
  // "note.important" from db.json

  return (
    <li>
      {note.content}
      <button onClick={toggleImportance}>{label}</button>
    </li>
  )
}

export default Note