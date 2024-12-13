import React from "react"
import { Route, Routes } from "react-router-dom"
import { Todo } from "./Todo"
import MainTodo from "./Main"

function App() {
  return (
    <Routes>      
      <Route path="/" element={<MainTodo />} />
      <Route path="/todo" element={<Todo />} />
    </Routes>
  )
}

export default App  
