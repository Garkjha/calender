import React, { Component } from 'react';
import datePicker from "./components/datePicker";
import Home from "./components/Home";
import Login from "./components/Login"
import About from "./components/About";
import Contact from "./components/Contact";
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from "./components/Navbar";
import Register from "./components/Register";

export default class App extends Component {


  render() {
      return (
          <div className="App">

              
              <BrowserRouter>
                  
                  <div>
                      
                      <Navbar />
                      <Switch>

                          <Route component={Login} path='/' exact />
                          <Route component={datePicker} path='/Home' exact />
                          <Route component={Contact} path='/Contact' exact />
                          <Route component={About} path='/About' exact />
                          <Route component={Login} path='/Signin' exact />
                          <Route component={Register} path='/Signup' exact />
                      
                          
                      </Switch>
                  </div>

                  
              </BrowserRouter>
          </div>
    );
  }
}
