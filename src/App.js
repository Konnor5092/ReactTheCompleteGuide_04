import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {

  state = {
    inputText: ''
  }

  updateInputField = (event) => {
    this.setState({
      inputText: event.target.value,
    });
  }

  removeCharFromInputText = (index) => {
    const charArray = this.state.inputText.split('');
    charArray.splice(index, 1);
    const updatedString = charArray.join('');

    this.setState({
      inputText: updatedString
    });
  }

  render() {
    return (
      <div className="App">
        <input type="text" onChange={this.updateInputField} value={this.state.inputText}/>
        <p>The length of the input text is {this.state.inputText.length}</p>
        <ValidationComponent textLength={this.state.inputText.length} />
        {
          this.state.inputText.split('').map((char, index) => {
            return <CharComponent 
              charProp={char}
              key={index}
              clicked={() => this.removeCharFromInputText(index)}
              />
          })
        }
      </div>
    );
  }
}

export default App;
