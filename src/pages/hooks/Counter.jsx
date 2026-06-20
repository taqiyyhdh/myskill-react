import { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  // cara yang disarankan agar efesien (hapus useEffect)
  // const calculation = count * 2;
  const [calculation, setCalculation] = useState(0);
  useEffect(() => {
    setCalculation(count * 2);
  }, [count]); 
  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <p>Calculation: {calculation}</p>
    </>
  );
}

export default Counter;