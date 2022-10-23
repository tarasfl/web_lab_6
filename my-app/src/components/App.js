import Header from './Header';
import Heading from './Heading';
import Main from './Main';
import './App.css';
import Footer from './Footer';
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
