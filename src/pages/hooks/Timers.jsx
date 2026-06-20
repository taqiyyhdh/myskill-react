import { useEffect, useState } from "react";

function Timers() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }); //untuk memberhentikan timer, tambahkan array kosong sebagai argumen kedua useEffect: useEffect(() => { ... }, []);
  return <h1>I've rendered {count} times!</h1>
}

export default Timers;