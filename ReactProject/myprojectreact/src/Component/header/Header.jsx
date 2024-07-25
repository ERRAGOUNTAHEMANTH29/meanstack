import React from 'react';
import "../header/header.css";
import background from "../images/header.jpg"
export default function Headerpage(){
    return(
      <main>
      <img src={background} height="550px" width="100%" ></img>
      <h1 class="header-title">
        FIND YOUR <br/> <span>PERFECT JOB</span><br/>
          EASILY
     

      </h1>
     </main>
        
        
    )
}