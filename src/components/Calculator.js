import React, { Component } from 'react';
import './Calculator.css';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends Component {
  render() {
    return (
      <div className="calc-body">
        <div className="calc-screen">
          <div id="calc-operation">1234 + 567 + </div>
          <div id="calc-typed">890</div>
        </div>
        <div className="calc-button-row">
          <button type="button" className="ac">
            AC
          </button>
          <button type="button" className="opt">
            &#43;&#47;&#8722;
          </button>
          <button type="button" className="opt">
            &#37;
          </button>
          <button type="button" className="opt">
            &#247;
          </button>
          <button type="button">7</button>
          <button type="button">8</button>
          <button type="button">9</button>
          <button type="button" className="opt">
            &#215;
          </button>
          <button type="button">4</button>
          <button type="button">5</button>
          <button type="button">6</button>
          <button type="button" className="opt">
            &#8722;
          </button>
          <button type="button">1</button>
          <button type="button">2</button>
          <button type="button">3</button>
          <button type="button" className="opt">
            &#43;
          </button>
          <button type="button">0</button>
          <button type="button">.</button>
          <button type="button">&#9003;</button>
          <button type="button" className="opt">
            &#61;
          </button>
        </div>
      </div>
    );
  }
}

export default Calculator;
