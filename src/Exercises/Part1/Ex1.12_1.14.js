import React, { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
)

const App = () => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Uint8Array(7))
  const [mostVoted, setMostVoted] = useState(0)

  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients',
  ]

  const handleSelectedClick = () => {
    // console.log(Math.floor(Math.random() * anecdotes.length))
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const handleVoteClick = () => {
    // 1.13*: anecdotes step2
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
    // 1.14*: anecdotes step3
    if (points[selected] > points[mostVoted]) {
      setMostVoted(selected)
    }
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <br />
      <p>has {points[selected]} votes</p>
      <Button handleClick={handleSelectedClick} text='next anecdote' />
      <Button handleClick={handleVoteClick} text='vote' />
      <br />
      <h1>Anecdote with most votes</h1>
      {anecdotes[mostVoted]}
      <br />
      has {points[mostVoted]} points
    </div>
  )
}

export default App
