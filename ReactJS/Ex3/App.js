import React from "react";
import CalculateScore from "./CalculateScore";

function App() {
  return (
    <CalculateScore
      Name="John Smith"
      School="ABC Public School"
      Total={450}
      goal={5}
    />
  );
}

export default App;