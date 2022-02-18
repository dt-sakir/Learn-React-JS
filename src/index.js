import React from "react";
import ReactDOM from "react-dom";

const variable_name = 'JS';

ReactDOM.render(<Card />, document.getElementById('root'));

function Card(){
  return <>
    <div className="card">
      <div className="header">Hello head</div>
      <div className="body">
        Im Body
        <h1>Hello React {variable_name}</h1>
        </div>
    </div>
  </>
}