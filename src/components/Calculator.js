import React, { useState } from 'react';
import calculate from '../logic/calculate';
import './Calculator.css';

function Calculator() {
  const initialInfo = { total: 0, next: null, operation: null };
  const [input, setInput] = useState(initialInfo);
  const clickHandler = (e) => {
    const button = e.target.innerText;
    const result = calculate(input, button);
    setInput(result);
  };
  const { total, operation, next } = input;
  return (
    <div className="calc-body">
      <div className="calc-screen">
        <div id="calc-typed">
          {total}
          {operation}
          {next}
        </div>
      </div>
      <div className="calc-button-row">
        <button type="button" className="ac" onClick={clickHandler}>
          AC
        </button>
        <button type="button" className="opt" onClick={clickHandler}>
          &#43;&#47;&#8722;
        </button>
        <button type="button" className="opt" onClick={clickHandler}>
          &#37;
        </button>
        <button type="button" className="opt" onClick={clickHandler}>
          &#247;
        </button>
        <button type="button" onClick={clickHandler}>
          7
        </button>
        <button type="button" onClick={clickHandler}>
          8
        </button>
        <button type="button" onClick={clickHandler}>
          9
        </button>
        <button type="button" className="opt" onClick={clickHandler}>
          &#215;
        </button>
        <button type="button" onClick={clickHandler}>
          4
        </button>
        <button type="button" onClick={clickHandler}>
          5
        </button>
        <button type="button" onClick={clickHandler}>
          6
        </button>
        <button type="button" className="opt" onClick={clickHandler}>
          &#8722;
        </button>
        <button type="button" onClick={clickHandler}>
          1
        </button>
        <button type="button" onClick={clickHandler}>
          2
        </button>
        <button type="button" onClick={clickHandler}>
          3
        </button>
        <button type="button" className="opt" onClick={clickHandler}>
          &#43;
        </button>
        <button type="button" onClick={clickHandler}>
          0
        </button>
        <button type="button" onClick={clickHandler}>
          .
        </button>
        <button type="button" onClick={clickHandler}>
          &#9003;
        </button>
        <button type="button" className="opt" onClick={clickHandler}>
          &#61;
        </button>
      </div>
    </div>
  );
}

export default Calculator;
