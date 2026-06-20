import React from "react";

function MissedGoal () {
  return <h1>MISSED!</h1>
}

function MadeGoal () {
  return <h1>GOAL!</h1>
}

function Goal (props) {
  const isGoal = props.isGoal;

  // Ternary Operation
  return isGoal ? <MadeGoal /> : <MissedGoal />;

  // if statement
  // if (isGoal) { 
  //   return <MadeGoal />;}
  //   return <MissedGoal />;
}
export default Goal;