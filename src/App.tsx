import './App.css'
import TodoList from "./componnets/TodoList"
import { useState } from 'react'

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false)

  return (
    <>
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <button onClick = {()=> setDarkMode(!darkMode)}>
        {darkMode ? "Light mode" : "Dark mode"}
      </button>
       <h1>To Do List</h1>
      <TodoList />
    </div>
    </>
  )
}

export default App
