import React, {Component} from 'react';
import ExpressionInput from './components/ExpressionInput/index';
import FunctionButtons from './components/FunctionButtons/index';
import OperationButtons from './components/OperationButtons/index';
import DigitButtons from './components/DigitButtons/index';
import './index.scss';

export default class Calculator extends Component {

  render() {

    const {
      calc
    } = this.props;

    return (
      <div className="calculator" key={calc.id}>
        <ExpressionInput/>
        <FunctionButtons functionData={calc.functionData}/>
        <DigitButtons digitData={calc.digitData} />
        <OperationButtons operationData={calc.operationData}/>
      </div>
    );
  };
}