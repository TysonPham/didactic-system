import './App.css';
import Header from './components/Header';
import Welcome from './components/Welcome';
import Analysis from './components/Analysis';
import Forms from './components/Forms'
import Footer from './components/Footer';
import ScrollUp from './components/ScrollUp';

function App() {
  return (
    <>
    <main className="main">
      <Header />
      <Analysis />
      <Welcome />
      <Forms />
    </main>
    <Footer />
    <ScrollUp />
    </>
  );
}

export default App;
