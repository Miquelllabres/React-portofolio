import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Contact from './contact'
import About from './about'
import Home from './home'
import Portofolio from './portofolio'
import Projects from './projects'

import TransitionGroup from "react-transition-group/TransitionGroup";




// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const firstChild = props => {
  const childrenArray = React.Children.toArray(props.children);
  return childrenArray[0] || null;
};

class Main extends Component {

	

	render(){
		return(
  <main>
    <Switch>
      <Route
  exact
  path="/"
  children={({ match, ...rest }) => (
    <TransitionGroup component={firstChild}>
      {match && <Home {...rest} />}
    </TransitionGroup>
)}/>
      <Route path='/about' component={About}/>
      <Route
   path="/portofolio"
   children={({ match, ...rest }) => (
     <TransitionGroup component={firstChild}>
       {match && <Portofolio {...rest} />}
     </TransitionGroup>
)}/>
      <Route path='/projects' component={Projects}/>
      <Route path='/contact' component={Contact}/>
    </Switch>
  </main>
)}
}

export default Main
