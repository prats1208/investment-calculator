import React from "react";
import "./Valuetable.css";
import { calculateInvestmentResults, formatter } from "../../util/investment";

const Valuetable = ({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
}) => {
  const userInput = {
    initialInvestment: initialInvestment,
    annualInvestment: annualInvestment,
    expectedReturn: expectedReturn,
    duration: duration,
  };

  //component will be re-render whenever dependent inputs/state changes, hence below function gets called on every input change
  const results = calculateInvestmentResults(userInput);
  
  // alternate way of calling function with directly putting args into {} aka object created
  // const results = calculateInvestmentResults({initialInvestment,
  //   annualInvestment,
  //   expectedReturn,
  //   duration});
  

  const initialInvestedValue =
    results[0].valueEndOfYear -
    results[0].interest -
    results[0].annualInvestment;

   console.log('initialInvestedValue = ',initialInvestedValue); 

  return (
    <div className="mt-5">
      <table className="table tale-responsive table-hover border-0">
        <thead>
          <tr>
            <th scope="col" className="px-3">
              Year
            </th>
            <th scope="col" className="px-3">
              Investment Value
            </th>
            <th scope="col" className="px-3">
              Interest (year)
            </th>
            <th scope="col" className="px-3">
              Total Interest
            </th>
            <th scope="col" className="px-3">
              Invested Capital
            </th>
          </tr>
        </thead>
        <tbody>
          {results.map((yeardata) => {
            
            const totalInterest = yeardata.valueEndOfYear - yeardata.annualInvestment * yeardata.year - initialInvestedValue;
            const totalInvested = yeardata.valueEndOfYear - totalInterest;

            return (
              <tr key={yeardata.year}>
                <td className="px-3">{yeardata.year}</td>
                <td className="px-3">
                  {formatter.format(yeardata.valueEndOfYear)}
                </td>
                <td className="px-3">{formatter.format(yeardata.interest)}</td>
                <td className="px-3">{formatter.format(totalInterest)}</td>
                <td className="px-3">{formatter.format(totalInvested)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Valuetable;
