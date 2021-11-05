import React from 'react'

const Header = (props) => {
  console.log(`Header: ${JSON.stringify(props)}`)
  return <h1>{props.course}</h1>
}

const Content = (props) => {
  console.log(`Content: ${JSON.stringify(props)}`)
  return (
    <div>
      <Part part={props.parts[0].name} exercise={props.parts[0].exercises} />
      <Part part={props.parts[1].name} exercise={props.parts[1].exercises} />
      <Part part={props.parts[2].name} exercise={props.parts[2].exercises} />
    </div>
  )
}

const Part = (props) => {
  console.log(`Part: ${JSON.stringify(props)}`)

  return (
    <p>
      {props.part} {props.exercise}
    </p>
  )
}

const Total = (props) => {
  console.log(`Total: ${props}`)
  return (
    <p>
      Number of exercises{' '}
      {props.parts[0].exercises +
        props.parts[1].exercises +
        props.parts[2].exercises}
    </p>
  )
}
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        name: 'State of a component',
        exercises: 14,
      },
    ],
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App