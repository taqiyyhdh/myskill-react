import { useState } from 'react'
import './App.css'
import Garage from './List'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Garage />
      </div>
    </>
  )
}

export default App
