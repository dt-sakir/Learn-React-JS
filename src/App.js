import logo from './logo.svg';
import './App.css';
import FunctionalComponent from './components/FunctionalComponent';
import ClassComponent from './components/ClassComponent';
import BoostrapComponent from './components/BoostrapComponent';
import { ArrowFunction } from './components/ArrowFunction';
import StateComponent from './components/StateComponent';

function App() {
  return (
    <div className="App mt-5">
      <h1>Hello World!</h1>
      <FunctionalComponent text="Functional text" />
      <ClassComponent text="Class text" />
      <BoostrapComponent />
      <ArrowFunction />
      <StateComponent />
    </div>
  );
}

export default App;
