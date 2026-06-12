import { useState } from 'react'
import './App.css'
import ChatBox from './ChatBox'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <header className="App-header">
          <ChatBox />
        </header>
      </div>
    </>
  )
}

export default App
