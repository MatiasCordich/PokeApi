import PokeCard from '../src/components/Card/PokeCard.jsx'
import './App.css'
import Footer from './components/Footer/Footer.jsx';
import Navbar from './components/Navbar/Navbar.jsx';


function App() {
  return (
    <div className="wrapper">
        <Navbar/>
        <PokeCard/>
        <Footer/>
    </div>
  );
}

export default App;
