import React from 'react';
import "../NavComponent/Nav.css"
export default function NavBar(){
    return (
        <main>
             <nav class="navbar">
      <h2 class="navbar-logo"> <a href="#">JOBACT</a></h2>
      <div class="navbar-menu">
        <a href="#jobs">Jobs</a>
        <a href="#companies">Companies</a>
        <a href="#testimoni">Testimonials</a>
        <a href="#Blog">Blog</a>
        <a href="#">Sign In</a>
      </div>
      <div class="menu-toggle">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
        

      </div>
    </nav>
        </main>
    )
}