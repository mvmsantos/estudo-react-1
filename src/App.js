import './App.css';
import Pessoa from './components/Pessoa'

function App() {
  return (
    <div className="App">
        <h1>Olá React</h1>
        <Pessoa nome="Ttototo" idade="30" qlq="qualquer"/>
        <Pessoa nome="Ttototo" idade="30" qlq="qualquer"/>
    </div>
  );
}

export default App;
