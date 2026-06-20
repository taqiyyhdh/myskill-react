import { useState } from "react";

function Input() {
  const [name, setName] = useState("");

  return (
    <form>
      <label>
        Enter your Name: <br />
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
    </form>
  )
}

export default Input;