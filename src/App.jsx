import { useState } from 'react'
import './App.css'
import FootBall from './Event'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <FootBall />
      </div>
    </>
  )
}

export default App
