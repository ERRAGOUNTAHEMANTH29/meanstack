import "../joblistings/joblist.css"
import React from 'react';
import Tesla from "../images/tesla"
import Ebay from "../images/ebay"
import Youtube from "../images/Youtube"
import TikTok from "../images/Tiktok"
import Amazon from "../images/amazon"

export default function Joblist(){
    return(
        <main class="job-lists" id="Jobs">
  <div class="job-card">
    <div class="job-name">
      <img class="job-profile" src={Tesla}></img>
      <div class="job-detail">
        <h4>Tesla</h4>
        <h3>Mechanical Engineer</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores error doloremque tempore dicta maiores consectetur impedit quos et commodi necessitatibus? Quia, est dolor molestiae velit recusandae nulla nihil quod. Possimus.</p>
        
      </div>
      
    </div>

    <div class="job-label">
      <a class="label-a" href="#"></a>
      <a class="label-b" href="#"></a>
      <a class="label-c" href="#"></a>
    </div>
    <div class="job-posted">
      Posted 2 min ago
      
    </div></div>
  


  <div class="job-card">
    <div class="job-name">
      <img class="job-profile" src={Ebay}></img>
      <div class="job-detail">
        <h4>EBAY</h4>
        <h3>Business Development</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores error doloremque tempore dicta maiores consectetur impedit quos et commodi necessitatibus? Quia, est dolor molestiae velit recusandae nulla nihil quod. Possimus.</p>
        
      </div>
      
    </div>
    <div class="job-label">
      <a class="label-a" href="#"></a>
      <a class="label-b" href="#"></a>
      <a class="label-c" href="#"></a>
    </div>
    <div class="job-posted">
      Posted 29 min ago
      
    </div></div>

    <div class="job-card">
      <div class="job-name">
        <img class="job-profile" src={TikTok}></img>
        <div class="job-detail">
          <h4>TikTok</h4>
          <h3>Digital Marketing</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores error doloremque tempore dicta maiores consectetur impedit quos et commodi necessitatibus? Quia, est dolor molestiae velit recusandae nulla nihil quod. Possimus.</p>
          
        </div>
        
      </div>
      <div class="job-label">
        <a class="label-a" href="#"></a>
        <a class="label-b" href="#"></a>
        <a class="label-c" href="#"></a>
      </div>
      <div class="job-posted">
        Posted 2 days ago
        
      </div></div>

      <div class="job-card">
        <div class="job-name">
          <img class="job-profile" src={Youtube}></img>
          <div class="job-detail">
            <h4>Youtube</h4>
            <h3>UI UX designer</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores error doloremque tempore dicta maiores consectetur impedit quos et commodi necessitatibus? Quia, est dolor molestiae velit recusandae nulla nihil quod. Possimus.</p>
            
          </div>
          
        </div>
        <div class="job-label">
          <a class="label-a" href="#"></a>
          <a class="label-b" href="#"></a>
          <a class="label-c" href="#"></a>
        </div>
        <div class="job-posted">
          Posted 1 hour ago
          
        </div>
      </div>


        <div class="job-card">
          <div class="job-name">
            <img class="job-profile" src={Amazon}></img>
            <div class="job-detail">
              <h4>Amazon</h4>
              <h3>Software Analyst</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores error doloremque tempore dicta maiores consectetur impedit quos et commodi necessitatibus? Quia, est dolor molestiae velit recusandae nulla nihil quod. Possimus.</p>
              
            </div>
            
          </div>
          <div class="job-label">
            <a class="label-a" href="#"></a>
            <a class="label-b" href="#"></a>
            <a class="label-c" href="#"></a>
          </div>
          <div class="job-posted">
            Posted 1 week ago
            
          </div>
        </div>
        <button class="job-more">More list</button>
        </main>
    )
}