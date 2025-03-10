import  Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import Companies from "./components/Companies/Companies";
import Residencies from "./components/Residencies/Residencies";
import Value from "./components/Value/Value";
import "./App.css"
function App() {
  return (
    <div className="App">
    <div>
      <div className="white-gradient"/>
    <Header/>
    <Hero/>
    </div>
    <Companies/>
    <Residencies/>
    <Value/>
    </div>
  );
}

export default App;
