import React, { useState } from 'react'

function AddTodo(props) {
  const [text, changeText] = useState('')

  const handleInput = (e) => {
    const newText = e.target.value
    changeText(newText)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(text) {
      props.add(text)
      changeText('')
    }
  }

  return(
    <div className='add-todo'>
      <form onSubmit={handleSubmit}>
        <input value={text} onChange={handleInput}></input>
        <button>Add</button>
      </form>
    </div>
  )
}

export default AddTodo
