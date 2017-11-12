import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Contact from './contact'
import About from './about'
import Home from './home'
import Portofolio from './portofolio'
import Projects from './projects'
import Services from './services'

import TransitionGroup from "react-transition-group/TransitionGroup";


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
      <Route path='/services' component={Services}/>

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
