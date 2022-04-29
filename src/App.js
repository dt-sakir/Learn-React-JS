import logo from './logo.svg';
import './App.css';
import FunctionalComponent from './components/FunctionalComponent';
import ClassComponent from './components/ClassComponent';
import BoostrapComponent from './components/BoostrapComponent';
import { ArrowFunction } from './components/ArrowFunction';
import StateComponent from './components/StateComponent';
import IfElseComponent from './components/IfElseComponent';
import RefreshComponent from './components/RefreshComponent';
import ReactDOMComponent from './components/ReactDOMComponent';
import FindDOMNodeComponent from './components/FindDOMNodeComponent';
import FormComponent from './components/FormComponent';
import Registration from './components/Registration';

function App() {
  return (
    <div className="App mt-5">
      <h1>Hello World!</h1>
      <FunctionalComponent text="Functional text" />
      <ClassComponent text="Class text" />
      <BoostrapComponent />
      <ArrowFunction />
      <StateComponent />
      <IfElseComponent />
      <RefreshComponent />
      <ReactDOMComponent />
      <FindDOMNodeComponent />
      <FormComponent />
      <Registration />
    </div>
  );
}

export default App;
