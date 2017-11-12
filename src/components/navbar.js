import React from 'react';
import { Link } from 'react-router-dom'
import $ from 'jquery'; 

const NavBar = () => (
	  <div>
	<section className="navigation">
      <div className="nav-container">
        <div className="brand">
          <a href="#!"><img src="../../images/Logo_white.png" alt="logo" className="logo" /></a>
        </div>
        <nav>
          <div className="nav-mobile"><a id="nav-toggle" href="#!"><span></span></a></div>
          <ul className="nav-list">
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <a href="#!">Services</a>
              <ul className="nav-dropdown">
                <li>
                  <Link to='/services'>Web Development</Link>
                </li>
                <li>
                  <Link to='/services'>Custom Wordpress Themes</Link>
                </li>
                <li>
                  <Link to='/services'>Maintenance</Link>
                </li>
                <li>
                  <Link to='/services'>Apps</Link>
                </li>
              </ul>
            </li>
            <li>
             <Link to='/projects'>Projects</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
  </section>
	</div>
               
);

/* Jquery Code */ 
$(document).ready(function() {
       $('#nav-toggle').click(function () {
      $('nav ul').toggle();
    });
    // Toggle active CSS class (X - close)
    document.querySelector("#nav-toggle").addEventListener("click", function () {
      this.classList.toggle("active");
    });
    // If a link has a dropdown, add sub menu toggle.
    $('nav ul li > a:not(:only-child)').click(function (e) {
      $(this).siblings('.nav-dropdown').toggle();
      // Close one dropdown when selecting another
      $('.nav-dropdown').not($(this).siblings()).hide();
      e.stopPropagation();
    });
    // Clicking away from dropdown will remove the dropdown class
    $('html').click(function () {
      $('.nav-dropdown').hide();
    });
});



export default NavBar;