import { useState } from 'react'
import './App.css'
import Product, { phoneData } from './Product'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        {phoneData.map((phone, id) => (
          <Product
            key={id}
            name={phone.name}
            price={phone.price}
            discount={phone.discount} 
          />
        ))}
      </div>
    </>
  )
}

export default App
