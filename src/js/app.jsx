import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      balance: "",
      rate: "",
      term: "", 
      output: ""
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
    this.setState({output: `$${result} is your monthly payment.`})
    }

  render() {
    return (
      <div style={{ 
        backgroundImage: "url(/townhouse.jpg)", 
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover", 
        height: "100vh",
        width: "100vw"
        }}>
      <div className='container' id="container">
      <h3>Mortgage Calculator</h3>
      <div id="inputs">
        <label for="balance">Loan Balance </label>
          <input name="balance" type="number" id="balance" defaultValue={this.state.balance} onChange= {this.handleChange} />
      <br/>
        <label for="rate">Interest Rate (%) </label>
          <input name="rate" type="number" id="rate" step="0.01" defaultValue={this.state.rate} onChange= {this.handleChange} />
      <br/>
        <label for="term">Loan Term (years)</label>
          <select name="term" id="termYear" defaultValue={this.state.term} onChange= {this.handleChange}>
          <option value="">Choose a term</option>
            <option value="15">15</option>
            <option value="30">30</option>
          </select>
          </div>
      <br/>
        <button 
          name="submit" 
          id="submit" 
          onClick= {() => this.calculateMortgage()}>
           Calculate 
        </button>
        <br/>
        <div id="output" name="output" onClick={this.calculateMortgage}>{this.state.output}</div>
      
      </div>
      </div>
    );
  }
}
