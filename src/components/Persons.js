// renders all people from the phonebook
import React from 'react';
import Person from './Person';

const Persons = ({ filteredPerson}) => {
  return (
    <ul>
      {filteredPerson.map((person) => (
        <Person person={person} key={person.id} />
      ))}
    </ul>
  )
}

export default Persons