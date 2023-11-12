import './App.css';
import Name from './components/Test'
import Pessoa from './components/Pessoa'

function App() {
  const nome = "Teste";
  return (
    <div className="App">
        <h1>Olá React</h1>
        <Name name="Marcão" />
        <Name name={nome}/>
        <Pessoa nome="Ttototo"/>
        <Pessoa idade="23"/>
        <Pessoa qlq="qlq"/>
    </div>
  );
}

export default App;
