import React from 'react';
import FunctionalComponent from './components/FunctionalComponent';
import ClassComponent from './components/ClassComponent';
import Data from './data.json';
import Counter from './components/Counter';

export default function App(){
    // console.log(Data);
    // let items = [];
    // for(let x=0; x<Data.length; x++){
    //     items.push(<FunctionalComponent headerText={Data[x].head} bodyText={Data[x].body} />);
    // }

    // items = Data.map((item) => <FunctionalComponent headerText={item.head} bodyText={item.body} />);

    return <div>
        <h1>App.js file</h1>
        <b>1. Functional Component</b>
        <FunctionalComponent headerText="First Header" bodyText="First body ....." />
        {/* <FunctionalComponent headerText="Secong Header" bodyText="Secong body ....." /> */}
        {/* {items} */}
        {Data.map((item, index) => <FunctionalComponent key={index} headerText={item.head} bodyText={item.body} />)}
        <hr/>
        <b>2. Class Component</b>
        <ClassComponent backgroundColor='red'/>
        <ClassComponent backgroundColor='green'/>
        <ClassComponent backgroundColor='yellow'/>
        <Counter  />
    </div>
}