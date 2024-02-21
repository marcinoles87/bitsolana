
import './App.css';
import Footer from './components/Footer';
import Main from './components/Main';
import Navig from './components/Navig';
import About from './components/About';


function App() {
  return (
    <div className="App">
      <Navig></Navig>
      <div className='image'>
        <div className='image-overlay'></div>
      </div>
      
      <Main></Main>
      <About></About>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
