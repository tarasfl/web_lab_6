import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home/Home';
import Catalog from './components/Catalog/Catalog';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <span className="App">
      <Header/>
      <Footer/>
    </span>
  );
}

export default App;
