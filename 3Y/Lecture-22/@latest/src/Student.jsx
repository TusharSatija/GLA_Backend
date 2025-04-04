import React from 'react'

function Student(props) {
  return (
    <>
        <div>   
            <h1>name : {props.name}</h1>
            <h1>Age : {props.Age}</h1>
        </div>
    </>
  )
}
export default Student;
