import './App.css';
import React   from 'react';
import {  BrowserRouter as Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import SamplePost from './pages/SamplePost';
import Nav from './components/Nav';

function App() {

  return (
  <>
  <div>
    <Switch>
      <Nav />
      <Route exact path="/" component={Home}/>
      <Route exact path="/Contact" component={Contact}/>
      <Route exact path="/About" component={About}/>
      <Route exact path="/SamplePost/:name" component={SamplePost}/>
    </Switch>
  </div>
  </>
    );
}

export default App;
