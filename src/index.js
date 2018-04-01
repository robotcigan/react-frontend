import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Test extends Component {

  numbers = [1, 2, 3, 4];

  constructor(props) {
    super(props);
    this.state = {
      numbers: this.numbers,
      shit: 'Shit'
    };
  }

  addNumber() {
    this.setState({numbers: [...this.state.numbers, this.state.numbers.length + 1]})
  }

  render() {
    return(
      <div className="container">
        <h1>Test</h1>
        <button onClick={this.addNumber.bind(this)} className="btn btn-primary">Add number</button>
        <ul className="list">
          {
            this.state.numbers.map(item => {
              return <li key={item}>{item}</li>
            })
          }
        </ul>
      </div>
    )
  }

}

ReactDOM.render(<Test/>, document.getElementById('root'));