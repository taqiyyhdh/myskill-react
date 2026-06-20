import { useState } from "react";

function DropDown() {
  const [myName, setMyName] = useState("Albara");
  const handleChange = (event) => {
    setMyName(event.target.value);
  }
  
  return (
    <form>
      <label>Select your middle name:</label><br />
      <select value={myName} onChange={handleChange}>
        <option value="Albara">Albara</option>
        <option value="Doe">Doe</option>
        <option value="Smith">Smith</option>
      </select>
    </form>
  )
}

export default DropDown;