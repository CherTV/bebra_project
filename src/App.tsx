import React from 'react';
import './App.css';
import HelloWorld from "./components/HelloWorld";
import Myname from "./components/myname";
import FIO from "./components/FIO/FIO";
import Counter from "./components/counter/counter";
import Todolist from "./components/todolist/todolist";

function HelloWorldH1(){
  return(<h1> Hello World </h1>)
}

function App() {
  return (
    <div className="App">
      {/*<Counter/>*/}
        <Todolist/>
    </div>
  );
}

export default App;
