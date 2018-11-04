import React from 'react'
import TodoListItem from './TodoListItem'

function TodoList(props) {

  return(
    <div>
      {props.list.map(listItem => <TodoListItem item={listItem} click={() => props.handler(listItem.text)}/>)}
    </div>
  )
}

export default TodoList
