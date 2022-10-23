import logo from './logo.svg';
import Header from './components/Header';
import Heading from './components/Heading';
import Main from './components/Main';
import './App.css';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <>
      <Header/>
      <Heading/>
      <Main/>
      <Footer/>
    </>
  );
}

export default App;
