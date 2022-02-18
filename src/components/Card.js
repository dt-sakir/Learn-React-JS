import React from "react";
import ReactDOM from "react-dom";

const variable_name = 'JS';

function Card(props){
    // console.log(props);
    const {headerText, bodyText} = props;
    return <div>
        <div className="card">
        <div className="header">{headerText}</div>
        <div className="body">
            <h1>{bodyText}</h1>
            </div>
        </div>
  </div>
}

export default Card;