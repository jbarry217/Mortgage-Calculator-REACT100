import React from 'react';

export class Inputs extends React.Component{

    render() {
        return(
            <div>
                <div id="inputs">
                    <label htmlFor="balance">Loan Balance </label>
                    <input name="balance" type="number" id="balance" defaultValue={this.props.balance} onChange= {(e) => this.props.handleChange(e)}/>
                <br/>
                    <label htmlFor="rate">Interest Rate (%) </label>
                    <input name="rate" type="number" id="rate" step="0.01" defaultValue={this.props.rate} onChange= {(e) => this.props.handleChange(e)}/>
                <br/>
                    <label htmlFor="term">Loan Term (years)</label>
                    <select name="term" id="termYear" defaultValue={this.props.term} onChange= {(e) => this.props.handleChange(e)}>
                        <option value="">Choose a term</option>
                        <option value="15">15</option>
                        <option value="30">30</option>
                    </select>
                </div>
                <br/>
            </div>
        )   
    }
}


export default Inputs;