import React, { useState } from 'react'

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>
}

const StatisticLine = (props) => {
  return (
    <p>
      {props.text}{props.value}
    </p>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad
  const average = (good * 1 + neutral * 0 + bad * -1) / all
  const positive = ((good * 1) / all) * 100

  if (all === 0) {
    return 'No feedback given'
  }
  return (
    <table>
      <tbody>
      <tr>
        <StatisticLine text='good' value={good} />
      </tr>
      <tr>
        <StatisticLine text='bad' value={bad} />
      </tr>
      <tr>
        <StatisticLine text='neutral' value={neutral} />
      </tr>
      <tr>
        <StatisticLine text='all' value={all} />
      </tr>
      <tr>
        <StatisticLine text='average' value={average} />
      </tr>
      <tr>
        <StatisticLine text='positive' value={positive} />
      </tr>
      </tbody>
    </table>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClickGood = () => {
    setGood(good + 1)
  }
  const handleClickNeutral = () => {
    setNeutral(neutral + 1)
  }
  const handleClickBad = () => {
    setBad(bad + 1)
  }

  return (
    <>
      <div>
        <h1>give feedback</h1>
        <Button handleClick={handleClickGood} text='good' />
        <Button handleClick={handleClickNeutral} text='neutral' />
        <Button handleClick={handleClickBad} text='bad' />
      </div>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  )
}

export default App
