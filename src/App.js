import Navbar from './components/Navbar/Navbar';
import "./components/Navbar/Navbar.css";
import Home from './components/Home/Home';
import "./components/Home/Home.css"
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
