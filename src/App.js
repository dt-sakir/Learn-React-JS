import React from 'react';
import Card from './components/Card';
import Data from './data.json';

export default function App(){
    // console.log(Data);
    let items = [];
    for(let x=0; x<Data.length; x++){
        items.push(<Card headerText={Data[x].head} bodyText={Data[x].body} />);
    }

    return <div>
        <h1>Card Items</h1>
        <Card headerText="First Header" bodyText="First body ....." />
        {/* <Card headerText="Secong Header" bodyText="Secong body ....." /> */}
        {items}
    </div>
}