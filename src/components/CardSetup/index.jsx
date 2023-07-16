import { useState } from "react";
import Operators from "./Operators";
import Factors from "./Factors";

function CardSetup() {
  const [operator, setOperator] = useState("x");
  const [lowerFactors, setLowerFactors] = useState([]);
   const [upperFactors, setUpperFactors] = useState([]);
  console.log("The current operator is, ", operator);
  console.log("The upper factors are, ", upperFactors);

  return (
    <>
      <Operators setOperator={setOperator} />
      <Factors setUpperFactors={setUpperFactors}/>
      <Factors />
    </>
  );
}

export default CardSetup;

/* 
- states = operator, lowerFactors, upperFactors

- operators = checkboxes where you can only pick one 
- factors = checkboxes where you can pick more than one element 

*/
