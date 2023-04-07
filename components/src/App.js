import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>Hello world</h1>
      <FuncComp initNumber={2} />
      <ClassComp initNumber={2} />
    </div>
  );
}
var funcStyle = "color:blue";
var funcId = 0;
function FuncComp(props) {
  const [number, setNumber] = useState(props.initNumber);
  const [_date, setDate] = useState(new Date().toString());

  // side effect
  useEffect(function () {
    console.log(
      "%cfunc => useEffect (componentDidMount & componentDidUpdate) A" +
        ++funcId,
      funcStyle
    );
    document.title = number + " : " + _date;
    return function () {
      console.log(
        "%cfunc => useEffect return (componentDidMount & componentDidUpdate) A" +
          ++funcId,
        funcStyle
      );
    };
  });

  useEffect(function () {
    console.log(
      "%cfunc => useEffect (componentDidMount & componentDidUpdate) B" +
        ++funcId,
      funcStyle
    );
    document.title = number + " : " + _date;
  });

  console.log("%cfunc => render" + ++funcId, funcStyle);
  return (
    <div className="container">
      <h2>function style compoment</h2>
      <p>Number : {number}</p>
      <p>Date : {_date}</p>
      <input
        type="button"
        value="random"
        onClick={function () {
          setNumber(Math.random());
        }}
      ></input>
      <input
        type="button"
        value="date"
        onClick={function () {
          setDate(new Date().toString());
        }}
      ></input>
    </div>
  );
}
var classStyle = "color:red";
class ClassComp extends React.Component {
  state = {
    number: this.props.initNumber,
    date: new Date().toString(),
  };

  componentDidMount() {
    console.log("%cclass => componentDidMount", classStyle);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("%cclass => shouldComponentUpdate", classStyle);
    return true;
  }
  componentDidUpdate(nextProps, nextState) {
    console.log("%cclass => componentDidUpdate", classStyle);
  }

  render() {
    console.log("%cclass => component render", classStyle);
    return (
      <div className="container">
        <h2>class style compoment</h2>
        <p>Date : {this.state.date}</p>
        <p>Number : {this.state.number}</p>
        <input
          type="button"
          value="random"
          onClick={function () {
            this.setState({ number: Math.random() });
          }.bind(this)}
        ></input>
        <input
          type="button"
          value="date"
          onClick={function () {
            this.setState({ date: new Date().toString() });
          }.bind(this)}
        ></input>
      </div>
    );
  }
}

export default App;
