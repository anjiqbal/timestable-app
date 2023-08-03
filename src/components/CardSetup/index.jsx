import { useState } from "react";
import Operators from "./Operators";
import UpperFactors from "./UpperFactors";
import LowerFactors from "./LowerFactors";

function CardSetup() {
  const [operator, setOperator] = useState("x");
  const [lowerFactors, setLowerFactors] = useState([]);
  const [upperFactors, setUpperFactors] = useState([]);
  console.log("The current operator is, ", operator);
  console.log("The upper factors are, ", upperFactors);
  console.log("The lower factors are, ", lowerFactors);

  return (
    <>
      <Operators setOperator={setOperator} />
      <UpperFactors setUpperFactors={setUpperFactors} />
      <LowerFactors setLowerFactors={setLowerFactors} />
    </>
  );
}

export default CardSetup;

/* 
- states = operator, lowerFactors, upperFactors

- operators = checkboxes where you can only pick one 
- factors = checkboxes where you can pick more than one element 

*/
