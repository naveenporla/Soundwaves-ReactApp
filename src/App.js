import logo from './logo.svg';
import './App.css';
import { Homepage } from './containers/homepage';
import Navbar from "./components/navbar"
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import Home from "./containers/home/home";
import Plans from "./components/plans/Plans";
import ContactUs from './pages/contact-us';
import SignIn from './pages/sign-in';
import MobileNavbar from "./components/MobileNavbar"
import {useState} from "react";
import FooterBar from "./components/footer/footer"
import Register from './pages/register';

function App() {
  const [isOpen,setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }


  return (
    
    <Router>
      <MobileNavbar isOpen={isOpen} toggle = {toggle} />
      <Navbar toggle={toggle} />
      
      <Switch>
        <Route path="/" exact component={Homepage}/>
        <Route path="/home" exact component={Home}/>
        <Route path="/plans" exact component={Plans}/>
        <Route path="/contact-us" exact component={ContactUs}/>
        <Route path="/sign-in" exact component={SignIn}/>
        <Route path="/register" exact component={Register}/>
      </Switch>
      <FooterBar />
    </Router>
    
    
    
  )

}

export default App;
