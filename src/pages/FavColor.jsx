import { useState } from "react";

function FavColor() {
  // const [brand, setBrand] = useState("Ford");
  // const [model, setModel] = useState("Mustang");
  // const [year, setYear] = useState("1964");
  // const [color, setColor] = useState("purple");
  // pake object
  const [car, setcar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1969",
    color: "pink"
  })

  const updateColor = () => {
    setcar(previousState => {
      return { ...previousState, color: "purple" }
    });
  }
  return (
    <>
        <h1>My {car.brand}</h1>
        <p>
          It is a {car.color} {car.model} from {car.year}.
        </p>
        <button
          type="button"
          onClick={updateColor}
        >
          Purple
        </button>

      {/* <h1>My Favorite Color is {color}!</h1>
      <button
        type="button"
        onClick={() => setColor("pink")}
      >
        Pink
      </button> */}
    </>
  )
}

export default FavColor;