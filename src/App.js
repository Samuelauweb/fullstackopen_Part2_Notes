import React, { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [inputFilteredPerson, setInputFilteredPerson] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    // console.log(event.target);
    const personObject = {
      name: newName,
      number: newNumber,
      id: Math.floor(Math.random() * 101),
    }

    if (
      persons.filter((person) => person.name === personObject.name).length > 0
    ) {
      // console.log(persons.filter((person) => person.name === personObject.name))
      alert(`${newName} is already added to phonebook`)
    } else {
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }
  }

  const filteredPerson = persons.filter((person) => {
    console.log("test: ",person.name.toLowerCase().includes(inputFilteredPerson))
    return (
      person.name.toLowerCase().includes(inputFilteredPerson)
      )
  }
  )

  const handleInputFilteredPersonChange = (event) => {
    console.log(event.target.value)
    setInputFilteredPerson(event.target.value)
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with{' '}
        <input
          value={inputFilteredPerson}
          onChange={handleInputFilteredPersonChange}
        />
      </div>
      <h2>add a new person</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>debug: {newName}</div>
      <ul>
        {filteredPerson.map((person) => (
          <Person person={person} key={person.id} />
        ))}
      </ul>
    </div>
  )
}

export default App
