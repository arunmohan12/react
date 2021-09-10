import React,{ Component } from 'react';
import './App.css';
import Result from './components/Result';

class App extends Component {
  state = {
    firstString: 'Calculate'
  };
  render(){
    return (
      <div className="App">
        <h1>{this.state.firstString}</h1>
        <Result />
      </div>
    );
  }
}

export default App;
