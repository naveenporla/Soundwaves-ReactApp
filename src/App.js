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
// import Checkout from "./components/checkout/checkout"

// export const db_url = "http://localhost:3001"
export const db_url = "https://soundwaves-db.herokuapp.com"

function App() {
  const [isOpen,setIsOpen] = useState(false)
  const [isLoggedIn,setIsLoggedIn] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  const toggleAuth = () => {
    setIsLoggedIn(!isLoggedIn)
  }


  return (
    
    <Router>
      <MobileNavbar isOpen={isOpen} toggle = {toggle} Auth={isLoggedIn} setAuth={toggleAuth}/>
      <Navbar toggle={toggle} Auth={isLoggedIn} setAuth={toggleAuth}/>
      
      <Switch>
        <Route path="/" exact component={Homepage}/>
        <Route path="/home" exact component={Home} Auth={isLoggedIn} setAuth={toggleAuth}/>
        <Route path="/plans" exact component={Plans}/>
        <Route path="/contact-us" exact component={ContactUs}/>
        {/* <Route path="/sign-in" exact component={SignIn} isLoggedIn={isLoggedIn} setAuth={toggleAuth}/> */}
        {/* <Route path="/sign-in" exact component={(props) => <SignIn {...props} Auth={isLoggedIn} setAuth={toggleAuth}/>}/> */}
        <Route path="/sign-in" render={(props) => (<SignIn {...props}  Auth={isLoggedIn} setAuth={toggleAuth}/>)} />
        <Route path="/register" exact component={Register}/>
        {/* <Route path="/checkout" exact component={Checkout}/> */}
      </Switch>
      <FooterBar />
    </Router>
    
    
    
  )

}

export default App;
