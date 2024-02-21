
import './App.css';
import Footer from './components/Footer';
import Main from './components/Main';
import Navig from './components/Navig';
import About from './components/About';
import Buy from './components/Buy';
import Tokenomics from './components/Tokenomics';
import Roadmap from './components/Roadmap';


function App() {
  return (
    <div className="App">
      <Navig></Navig>
      <div className='image'>
        <div className='image-overlay'></div>
      </div>
      
      <Main></Main>
      <About></About>
      <Buy></Buy>
      <Tokenomics></Tokenomics>
      <Roadmap></Roadmap>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
