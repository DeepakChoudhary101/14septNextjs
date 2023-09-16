import './App.css';
import Aside from './components/Aside';
import Section from './components/Section';
import Header from './components/Header';
import Footer from './components/Footer';
function App() {
  return (<>
  <Header/>
  <main>
    <Aside/>
    <Section/>
  </main>
  <Footer/></>
  );
}

export default App;
