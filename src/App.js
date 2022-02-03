import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {

  const [input, setInput] = useState('');

  const getInputValue = (event) => {
    const userValue = event.target.value;
    console.log(userValue);
    setInput(userValue);
  };

  const drop = (ev) => {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("drag-item");
    console.log(data);
    // ev.target.appendChild(document.getElementById(data));
  }

  const onDragOver = (e) => {
    let event = e;
    event.stopPropagation();
    event.preventDefault();
  }

  const onStartDrag = (ev) => {
    ev.dataTransfer.setData("drag-item", "123");
  }
  
  var words = [];
  input.split(" ").filter(x => x.length > 0).forEach((element, index) => {
    words.push(<span onDrop={drop} onDragOver={onDragOver} key={index}>{element}</span>);
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
          <span draggable onDragStart={onStartDrag}>X</span>
          <span draggable onDragStart={onStartDrag}>○</span>
          <span draggable onDragStart={onStartDrag}>△</span>
          <span draggable onDragStart={onStartDrag}>Ⓧ</span>
        </div>
      </header>
    </div>
  );
}

export default App;
