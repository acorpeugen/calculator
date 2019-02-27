import React, {Component} from 'react';
import './Buttons.scss';

export default class Buttons extends Component {

  calculator = [
    {id: 1, value: 'AC', colorClass: 'btn btn-gray'},
    {id: 2, value: '+/-', colorClass: 'btn btn-gray'},
    {id: 3, value: '%', colorClass: 'btn btn-gray'},
    {id: 4, value: '/', colorClass: 'btn btn-orange'},
    {id: 5, value: 7, colorClass: 'btn'},
    {id: 6, value: 8, colorClass: 'btn'},
    {id: 7, value: 9, colorClass: 'btn'},
    {id: 8, value: '*', colorClass: 'btn btn-orange'},
    {id: 9, value: 4, colorClass: 'btn'},
    {id: 10, value: 5, colorClass: 'btn'},
    {id: 11, value: 6, colorClass: 'btn'},
    {id: 12, value: '-', colorClass: 'btn btn-orange'},
    {id: 13, value: 1, colorClass: 'btn'},
    {id: 14, value: 2, colorClass: 'btn'},
    {id: 15, value: 3, colorClass: 'btn'},
    {id: 16, value: '+', colorClass: 'btn btn-orange'},
    {id: 17, value: 0, colorClass: 'btn'},
    {id: 18, value: '.', colorClass: 'btn'},
    {id: 19, value: '\u2190', colorClass: 'btn'},
    {id: 20, value: '=', colorClass: 'btn btn-orange'}
  ];

  constructor(props) {
    super(props);

    this.state = {
      calculation: []
    };
  }

  render() {
    return (
        <>
          {this.calculator.map(calc =>
              <button key={calc.id}
                      value={calc.value}
                      className={calc.colorClass}
                      onClick={this.handleClick}>
                {calc.value}
              </button>
          )}
        </>
    );
  }

  handleClick = (e) => {
    const value = e.target.getAttribute('value');
    console.log(value);

    switch(value)
    {
      case 'AC' :

        this.setState({ calculation: [] }, () => {
          this.props.triggerCalculation(this.state.calculation);
          this.props.triggerSum(this.state.calculation);
        });

        break;
      case '=' :

        if(isNaN(this.state.calculation[this.state.calculation.length - 1])) {
          break;
        }

        this.props.triggerSum(this.state.calculation.join(''));
        this.setState({
          calculation: []
        }, () => {
          this.props.triggerCalculation(this.state.calculation.join(''));
        });

        break;
      case '+/-' :

        let posNeg = [[...this.state.calculation].join('') * -1];
        this.setState({
          calculation: posNeg
        }, () => {
          this.props.triggerCalculation(this.state.calculation.join(''));
        });

        break;
      case '%' :

        let percentage = [[...this.state.calculation].join('') * 0.01];

        this.setState({
          calculation: percentage
        }, () => {
          this.props.triggerCalculation(this.state.calculation.join(''));
        });

        break;
      case '\u2190' :

        let removeLast = [...this.state.calculation];
        removeLast.splice(removeLast.length - 1, 1);

        this.setState({
          calculation: removeLast
        }, () => {
          this.props.triggerCalculation(this.state.calculation.join(''));
        });
        break;

      default :

        if(isNaN(value) && isNaN(this.state.calculation[this.state.calculation.length - 1])) {
          break;
        }

        this.setState({ calculation: [...this.state.calculation, value] }, () => {
          this.props.triggerCalculation(this.state.calculation.join(''));
        });

        break;
    }
  };
}