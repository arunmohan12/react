import React, { Component } from 'react'

export default class Result extends Component {

    state = {
        inputValue : "",
        
    }

    onHandleChange = (event) => {
        this.setState({
            inputValue: event.target.value
           })

    }

    onSubmit = (event) => {
        this.setState({
             inputValue: event.target.value
            })
            function isOperand(c)
      {
        return (c.charCodeAt(0) >= '0'.charCodeAt(0) && c.charCodeAt(0) <= '9'.charCodeAt(0));
      }

      function value(c)
      {
        return (c.charCodeAt(0) - '0'.charCodeAt(0));
      }

      function evaluate(exp)
      {
        // Base Case: Given expression is empty
        if (exp.length === 0) return -1;
      
        // The first character must be
        // an operand, find its value
        let res = value(exp[0]);
      
        // Traverse the remaining characters in pairs
        for (let i = 1; i<exp.length; i += 2)
        {
          // The next character must be an operator, and
          // next to next an operand
          let opr = exp[i], opd = exp[i+1];
      
          // If next to next character is not an operand
          if (isOperand(opd) === false) return -1;
      
          // Update result according to the operator
          if (opr === '+') res += value(opd);
          else if (opr === '-') res -= value(opd);
          else if (opr === '*') res *= value(opd);
          else if (opr === '/') res /= value(opd);
      
          // If not a valid operator
          else				 return -1;
        }
        return res;
        
      }

      let result = evaluate(this.state.inputValue);
      if(result === -1) {
        result=this.state.inputValue +"  is invalid" 
        alert(result)
      }
      
      else{
      
      alert(result);
      }
    }
    render() {
        return (
            <div>
                <form>
                    <input 
                    type="text"
                    value={this.state.inputValue}
                    onChange={this.onHandleChange}
                    />
                    <button type="submit" onClick={this.onSubmit}> Submit</button>
                </form>
            </div>
        )
    }
}
