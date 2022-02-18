const variable_name = 'JS';
export default function Card(props){
    // console.log(props);
    const {headerText, bodyText} = props;
    return <div>
        <div className="card">
        <div className="header">{variable_name}. {headerText}</div>
        <div className="body">
            <h1>{bodyText}</h1>
            </div>
        </div>
  </div>
}