import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      balance: 0,
      rate: 0,
      term: 0, 
      result: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.calculateMortgage = this.calculateMortgage.bind(this);
  }

    handleChange(event) {
     this.setState({[event.target.name] : parseFloat(event.target.value)});
    }
    
    calculateMortgage() {
      var B = this.state.balance;
      var r = this.state.rate / 100 / 12; 
      var n = this.state.term * 12;
      var pow = Math.pow((1 + r), n)
       let result = (B * (r * pow) / (pow - 1)).toFixed(2);
    this.setState({result:result})
    }

  render() {
    return (

      <div className='container'>
      <h3>Mortgage Calculator</h3>
        <input name="balance" type="number" defaultValue={this.state.balance} onChange= {this.handleChange} />
        <input name="rate" type="number" step="0.01" defaultValue={this.state.rate} onChange= {this.handleChange} />
        <select name="term" defaultValue={this.state.term} onChange= {this.handleChange}>
        <option value="">--Please choose a term--</option>
          <option value="15">15</option>
          <option value="30">30</option>
        </select>
        <button 
          name="submit" 
          id="submit" 
          onClick= {() => this.calculateMortgage()}>
          Calculate
        </button>
        <div id="output" name="output">{`$${this.state.result} is your payment.`}</div>

      </div>
    );
  }
}
