import React, { Component } from 'react';
import NavBar from './components/NavBar';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <BrowserRouter>
        <div className = "App">
          <NavBar />
          <Route exact path = '/' component={Home} />
          <Route path = '/about' component={About} />
          <Route path = '/contact' component={Contact} />
        </div>
      </BrowserRouter>
     );
  }
}
 
export default App;
