import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Action from './Action';
import Word from './Word';

function App() {

  const [input, setInput] = useState('Hej');

  const getInputValue = (event) => {
    const userValue = event.target.value;
    setInput(userValue);
  };

  const drop = (ev) => {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("drag-symbol");
    console.log(data);
    // ev.target.appendChild(document.getElementById(data));
  }

  const onDragOver = (e) => {
    let event = e;
    event.stopPropagation();
    event.preventDefault();
  }

  const onStartDrag = (symbol) => (ev) => {
    ev.dataTransfer.setData("drag-symbol", symbol);
  }
  
  var words = [];
  input.split(" ").filter(x => x.length > 0).forEach((element, index) => {
    words.push(<Word word={element} drop={drop} dragOver={onDragOver} key={index}></Word>);
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <p>
            <input autoFocus type="text" placeholder='Tøppa tín setning her' onChange={getInputValue}></input>
          </p>
        </div>
        <div id="sentance">
          <p>
            {words}
          </p>
        </div>
        <div>
        <Action symbol={"X"} dragStart={onStartDrag("X")}></Action>
        <Action symbol={"○"} dragStart={onStartDrag("○")}></Action>
        <Action symbol={"△"} dragStart={onStartDrag("△")}></Action>
        <Action symbol={"Ⓧ"} dragStart={onStartDrag("Ⓧ")}></Action>
        </div>
      </header>
    </div>
  );
}

export default App;
