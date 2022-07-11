import React from 'react';
import Inputs from './Components/Inputs';

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
        <Inputs balance={this.state.balance} rate={this.state.rate} term={this.state.term} handleChange= {this.handleChange}/>
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
