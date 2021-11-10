import React, { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    // console.log(event.target);
    const personObject = {
      name: newName,
      id: Math.floor(Math.random() * 101),
    }

    if (persons.filter(person => person.name === personObject.name).length > 0){
      console.log(persons.filter((person) => person.name === personObject.name))
      alert(`${newName} is already added to phonebook`)
    } else {

      setPersons(persons.concat(personObject))
      setNewName('')
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>debug: {newName}</div>
      <ul>
        {persons.map((person) => (
          <Person person={person} key={person.id} />
        ))}
      </ul>
    </div>
  )
}

export default App
