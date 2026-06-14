import { useState } from 'react'
import './App.css'
import Goal from './conditional'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <Goal isGoal = {false} />
      </div>
    </>
  )
}

export default App
