import React from 'react'
import ProjectsAPI from '../api'
import { Link } from 'react-router-dom'
import AnimatedWrapper from "./AnimatedWrapper";


// The Player looks up the player using the number parsed from
// the URL's pathname. If no player is found with the given
// number, then a "player not found" message is displayed.
const Project = (props) => {


  const project = ProjectsAPI.get(
    parseInt(props.match.params.number, 10)
  )
  if (!project) {
    return <div>Sorry, but the player was not found</div>
  }
  return (
    
    <div className="text-center magictime puffIn">
      <h1>{project.name}</h1>
      <img  src={project.image} />
      <Link to='/projects'>Back</Link>
    </div>
  )
}

export default Project
