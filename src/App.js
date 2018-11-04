import React, { useState } from 'react'
import Header from './Header'
import TodoList from './TodoList'
import AddTodo from './AddTodo'

function App() {
  const initialList = [
    {text: 'Do a React app with hooks', done: true},
    {text: 'Add more To Do-items', done: false}
  ]

  const [list, changeList] = useState(initialList)

  const addToList = (newItem) => {
    changeList([...list, {text: newItem, done: false}])
  }

  const changeItemStatus = (itemText) => {
    changeList(list.map(item => item.text !== itemText ? item : {text: item.text, done: !item.done}))
  }

  return (
    <div className='inbox'>
      <Header />
      <TodoList list={list} handler={changeItemStatus} />
      <AddTodo add={addToList}/>
    </div>
  )
}

export default App
