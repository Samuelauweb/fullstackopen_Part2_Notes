import React, { useState, useEffect } from 'react'
import Note from './components/Note'
import noteService from './services/note'
// import axios from 'axios'

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  useEffect(() => {
    // console.log('effect')
    noteService.getAll().then((initialNotes) => {
      // console.log('promise fulfilled')
      setNotes(initialNotes)
    })
  }, [])
  // console.log('render', notes.length, 'notes')

  const toggleImportanceOf = (id) => {
    // console.log(`importance of ${id} need to be toggled`);
    // const url = `http://localhost:3001/notes/${id}`
    const note = notes.find((n) => n.id === id)
    const changedNote = { ...note, important: !note.important }

    noteService.update(id, changedNote).then((returnedNote) => {
      setNotes(notes.map((note) => (note.id !== id ? note : returnedNote)))
    })
  }

  const notesToShow = showAll
    ? notes
    : notes.filter((note) => note.important === true)

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      // id: notes.length + 1,
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
    }

    noteService.create(noteObject).then((returnedNote) => {
      setNotes(notes.concat(returnedNote))
      setNewNote('')
    })
  }

  const handleNoteChange = (event) => {
    // console.log('event.target.value: ', event.target.value)
    setNewNote(event.target.value)
  }

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button
          onClick={() => {
            setShowAll(!showAll)
          }}
        >
          show {showAll ? 'important' : 'all'}
        </button>
      </div>
      <ul>
        {notesToShow.map((note) => (
          <Note
            note={note}
            key={note.id}
            toggleImportance={() => toggleImportanceOf(note.id)}
          />
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type='submit'>save</button>
      </form>
    </div>
  )
}

export default App
