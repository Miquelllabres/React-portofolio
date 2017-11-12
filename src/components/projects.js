import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Portofolio from './portofolio'
import Project from './project'

// The Roster component matches one of two different routes
// depending on the full pathname
const Projects = () => (
	
  <Switch>
    <Route exact path='/projects' component={Portofolio}/>
    <Route path='/projects/:number' component={Project}/>
  </Switch>
)


export default Projects
