import React from 'react'

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

const Header = ({ course }) => {
  // console.log(`Header: ${JSON.stringify(props)}`)
  return <h1>{course.course}</h1>
}

const Content = (props) => {
  // console.log(`Content: ${JSON.stringify(props)}`)
  // console.log(props.parts)
  return (
    <div>
      {props.parts.map((part) => {
        return <Part name={part.name} exercise={part.exercises} key={part.id} />
      })}
      {/* <Part name={props.parts[0].name} exercise={props.parts[0].exercises} />
      <Part name={props.parts[1].name} exercise={props.parts[1].exercises} />
      <Part name={props.parts[2].name} exercise={props.parts[2].exercises} /> */}
    </div>
  )
}

const Part = (props) => {
  // console.log(`Part: ${JSON.stringify(props)}`)
  // console.log(props.name);
  return (
    <p>
      {props.name} {props.exercise}
    </p>
  )
}

const Total = (props) => {
  // console.log(`Total: ${props}`)
  console.log('Array of "props.parts": ', props.parts)

  const parts = props.parts.map((course) => course.exercises)
  console.log('Array of "parts":', parts)

  const total = parts.reduce((previousValue, currentValue) => {
    return previousValue + currentValue
  })
  
  console.log('total: ', total)

  return (
    <p>
      Number of exercises {total}
      {/* {props.parts[0].exercises +
        props.parts[1].exercises +
        props.parts[2].exercises} */}
    </p>
  )
}
const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2,
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3,
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4,
      },
    ],
  }

  return <Course course={course} />
}

export default App
