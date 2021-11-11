import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Persons from './components/Persons'
import Search from './components/Search'
import Form from './components/Form'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')

  useEffect(() => {
    console.log("effect");
    axios.get('http://localhost:3001/persons')
      .then(response => {
        console.log(response.data);
        setPersons(response.data)
      })
  }, [])

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
    console.log('test: ', person.name.toLowerCase().includes(search))
    return person.name.toLowerCase().includes(search)
  })

  const handleSearchChange = (event) => {
    console.log(event.target.value)
    setSearch(event.target.value)
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
      <Search search={search} handleSearchChange={handleSearchChange} />
      <h2>add a new person</h2>
      <Form
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      {/* <div>debug: {newName}</div> */}
      <Persons filteredPerson={filteredPerson} />
    </div>
  )
}

export default App
