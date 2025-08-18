import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoEditor from './components/TodoEditor'
import Header from './components/Header'
import TodoItem from './components/TodoItem'
import TodoList from './components/TodoList'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Header />
      <TodoEditor />
      <TodoList />
    </div>
  )
}

export default App
