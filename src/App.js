import react, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "./App.css";
import Calculator from "./Components/Calculator/Calculator";
import Headerr from "./Components/Headerr/Headerr";
import Valuetable from "./Components/Valuetable/Valuetable";

function App() {
  const [initialInvestment, setInitialInvestment] = useState(10000);
  const [annualInvestment, setAnnualInvestment] = useState(1200);
  const [expectedReturn, setExpectedReturn] = useState(6);
  const [duration, setDuration] = useState(10);



  return (
    <div className="App d-flex flex-column align-items-center">
      <Headerr />
      <Calculator
        initialInvestment={initialInvestment}
        setInitialInvestment={setInitialInvestment}
        annualInvestment={annualInvestment}
        setAnnualInvestment={setAnnualInvestment}
        expectedReturn={expectedReturn}
        setExpectedReturn={setExpectedReturn}
        duration={duration}
        setDuration={setDuration}
      />
      <Valuetable
        initialInvestment={initialInvestment}
        annualInvestment={annualInvestment}
        expectedReturn={expectedReturn}
        duration={duration}
      />
    </div>
  );
}

export default App;
