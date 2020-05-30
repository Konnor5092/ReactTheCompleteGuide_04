import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {

  state = {
    inputText: '',
    inputTextCharArray: []
  }

  updateInputField = (event) => {
    const charArray = event.target.value
      .split('')
      .map((char, index) => 
      {
        return {
          id: index,
          char: char
        }})

    this.setState({
      inputText: event.target.value,
      inputTextCharArray: charArray
    });
  }

  removeCharFromInputText = (id) => {
    const charIndex = this.state.inputTextCharArray.findIndex(p => p.id === id);
    const charArray = [...this.state.inputTextCharArray];

    charArray.splice(charIndex, 1);
    const inputTextString = charArray.map(charObject => charObject.char).join("");

    this.setState({
      inputText: inputTextString,
      inputTextCharArray: charArray
    });
  }

  render() {
    return (
      <div className="App">
        <input type="text" onChange={(event) => this.updateInputField(event)} value={this.state.inputText}/>
        <p>The length of the input text is {this.state.inputText.length}</p>
        <ValidationComponent textLength={this.state.inputText.length} />
        {
          this.state.inputTextCharArray.map((charArray, index) => {
            return <CharComponent 
              charProp={charArray.char}
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
