import React from 'react'

function TodoListItem(props) {

  const handleChange = () => {
    props.click()
  }

  return(
    <div className={props.item.done ? 'checked' : 'item'}>
      <input 
        type='checkbox'
        value={props.item.done}
        onChange={handleChange}
        defaultChecked={props.item.done}
      ></input>
      <p>{props.item.text}</p>
    </div>
  )
}

export default TodoListItem
