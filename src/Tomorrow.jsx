import React from 'react'
import Panel from "./components/panel/Panel.jsx"
import Todo from "./components/todo/Todo.jsx"

const ThisWeek = () => {
  return (
    <div style={{display:"flex"}}>
        <h1>This week</h1>
        <Panel />
        <Todo />
    </div>
  )
}

export default ThisWeek