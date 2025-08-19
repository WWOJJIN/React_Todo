
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoEditor from './components/TodoEditor'
import Header from './components/Header'
import TodoItem from './components/TodoItem'
import TodoList from './components/TodoList'
import { useState, useEffect } from 'react'
import axios from "axios"


function App() {

  const [todos, setTodos] = useState([])
  const API = `${import.meta.env.VITE_API_URL}/api/todos`
  // const [count, setCount] = useState(0)

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await axios.get(API)
        const data = Array.isArray(res.data) ?
          res.data : res.data.todos ?? []

        setTodos(data)
        console.log(data)

      } catch (error) {
        console.log("가져오기 실패", error)
      }
    }
    fetchTodos()
  }, [])

  return (
    <div className='App'>
      <Header />
      <TodoEditor />
      <TodoList todos={todos} />
    </div>
  )
}

export default App
