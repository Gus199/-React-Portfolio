import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Projects from './components/Projects';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Nav />
        <Projects />

      </header>
    </div>
  );
}

export default App;
