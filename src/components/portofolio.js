import React, { Component } from 'react'
import ProjectsAPI from '../api'
import { Link } from 'react-router-dom'
import $ from 'jquery'; 
import AnimatedWrapper from "./AnimatedWrapper";


// The FullRoster iterates over all of the players and creates
// a link to their profile page.



class Portofolio extends Component {

  componentDidMount() {
    $(document).ready(function(){
    $('.thumbnail').addClass('magictime puffIn');

    
    });
  }

  

render(){
   
  return(

  <div className="row" >
  <div style={{backgroundImage: "url('../../images/coding.jpg')", backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "200px", width: "100%"}} />

  
     {
        ProjectsAPI.all().map(p => (

          <div key={p.number} style={{width: "90%", margin: "3vh auto 0 auto"}}>
          <div  className="col-lg-3 col-xs-12 hvr-grow">
          <Link to={`/projects/${p.number}`}>


          <div  className="thumbnail " style={{backgroundImage: `url(${p.image})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", height: "200px"}}>
          

        
           </div>
          </Link>
          

          </div>
          </div>


          
        ))
      }


  </div>
  )
}
}


export default Portofolio



     
   