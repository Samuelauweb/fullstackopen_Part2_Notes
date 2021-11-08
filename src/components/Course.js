import React from 'react'

const Course = ({ course }) => {
  return (
    <>
      <Header header={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  )
}

const Header = ({ header }) => {
  // console.log(course);
  return <h1>{header}</h1>
}

const Content = ({parts}) => {
  console.log("Parts", parts)
  return (
    <div>
      {parts.map((part) => {
        return <Part name={part.name} exercise={part.exercises} key={part.id} />
      })}
      {/* <Part name={props.parts[0].name} exercise={props.parts[0].exercises} />
      <Part name={props.parts[1].name} exercise={props.parts[1].exercises} />
      <Part name={props.parts[2].name} exercise={props.parts[2].exercises} /> */}
    </div>
  )
}

const Part = ({name, exercise}) => {
  console.log("Part: ", name, exercise);
  return (
    <p>
      {name} {exercise}
    </p>
  )
}

const Total = ({parts}) => {
  // console.log(`Total: ${props}`)
  // console.log('Array of "props.parts": ', props.parts)

  const exercise = parts.map((course) => course.exercises)
  // console.log('Array of "exercise":', exercise)

  const total = exercise.reduce((previousValue, currentValue) => {
    return previousValue + currentValue
  })

  // console.log('total: ', total)

  return (
    <p>
      <strong>total of {total} exercises</strong>
      {/* {props.parts[0].exercises +
        props.parts[1].exercises +
        props.parts[2].exercises} */}
    </p>
  )
}

export default Course
