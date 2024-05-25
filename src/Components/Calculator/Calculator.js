import React, { useState } from "react";
import "./Calculator.css";
import { investment } from "../../util/investment";

const Calculator = ({
  initialInvestment,
  setInitialInvestment,
  annualInvestment,
  setAnnualInvestment,
  expectedReturn,
  setExpectedReturn,
  duration,
  setDuration,
}) => {
  return (
    <div className="container p-4 calcdiv  rounded-1">
      <form className="formField row p-2">
        <div className="col-md-6 mb-4">
          <label>Initial Investment</label>
          <input
            className="w-100 px-2 py-1 rounded-1"
            type="number"
            value={initialInvestment}
            onChange={(e) => setInitialInvestment(+e.target.value)}
            required
          />
        </div>
        <div className="col-md-6 mb-4">
          <label>Annual Investment</label>
          <input
            className="w-100 px-2 py-1 rounded-1"
            type="number"
            value={annualInvestment}
            onChange={(e) => setAnnualInvestment(+e.target.value)}
            required
          />
        </div>
        <div className="col-md-6 mb-2">
          <label>Expected Return</label>
          <input
            className="w-100 px-2 py-1 rounded-1"
            type="number"
            value={expectedReturn}
            onChange={(e) => setExpectedReturn(+e.target.value)}
            required
          />
        </div>
        <div className="col-md-6 mb-2">
          <label>Duration</label>
          <input
            className="w-100 px-2 py-1 rounded-1"
            type="number"
            value={duration}
            onChange={(e) => setDuration(+e.target.value)}
            required
          />
        </div>
      </form>
    </div>
  );
};

export default Calculator;
