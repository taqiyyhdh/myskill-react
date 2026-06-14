import React from "react";
import './style.css';

function Car (props) {
  return <li>I am a {props.brand}</li>;
}

function Garage () {
  const cars = [
    {id: 1, brand: 'Ford'},
    {id: 2, brand: 'BMW'},
    {id: 3, brand: 'Audi'}
  ];
  const myStyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
  }
  return (
    <>
      <h1 style={myStyle}>Who lives in my Garage?</h1>
      <ul style={{backgroundColor: "skyblue"}}>
        {cars.map((car) => <Car key={car.id} brand={car.brand} />)}
      </ul>
    </>
  );
}

export default Garage;