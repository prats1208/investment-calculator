import React from 'react';
import logo from '../../assets/investment-calculator-logo.png';
import './Headerr.css';

const Headerr = () => {
  return (
    <header className='d-flex flex-column align-items-center mb-3 '>
        <img src={logo} className='logo'/>
        <h1 className='fs-2 mt-2'>Investment Calculator</h1>
    </header>
  )
}

export default Headerr