import './App.css';
import Header from './components/Header';
import Welcome from './components/Welcome';
import Analysis from './components/Analysis';
import Forms from './components/Forms'

function App() {
  return (
    <div className="App">
      <Header />
      <Analysis />
      <Welcome />
      <Forms />
    </div>
  );
}

export default App;
