import "../featuredcompanies/Featuredcompanies.css";
import React from 'react';
import ebay from "../images/ebay";
import amazon from "../images/amazon";
import facebook from "../images/facebook";
import apple from "../images/apple";
import Tiktok from "../images/Tiktok";
import Tesla from "../images/tesla";
import Youtube from "../images/Youtube";
import google from "../images/google";

export default function Featuredcompanies(){
    return(
        <><br/><br/>
        <div class="featured-companies" id="Companies">
  <h1 class="section-title">Featured Companies</h1>
  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, veritatis animi nisi laudantium modi autem nam recusandae enim</p>
  <br/><br/> <div class="featured-wrapper">
    <div class="featured-card">
      <img class="featured-image" src={ebay}/> 
      <p>Ebay</p>
      <button class="featured-button">View  Jobs</button>
    </div>
 
  <div class="featured-card">
    <img class="featured-image" src={amazon}/> 
    <p>Amazon</p>
    <button class="featured-button">View  Jobs</button>
  </div>

<div class="featured-card">
  <img class="featured-image" src={facebook}/> 
  <p>Facebook</p>
  <button class="featured-button">View  Jobs</button>
</div>

<div class="featured-card">
  <img class="featured-image" src={google}/> 
  <p>Google</p>
  <button class="featured-button">View  Jobs</button>
</div>

<div class="featured-card">
  <img class="featured-image" src={Tesla}/> 
  <p>Tesla</p>
  <button class="featured-button">View  Jobs</button>
</div>

<div class="featured-card">
  <img class="featured-image" src={Youtube}/> 
  <p>Youtube</p>
  <button class="featured-button">View  Jobs</button>
</div>

<div class="featured-card">
  <img class="featured-image" src={Tiktok}/> 
  <p>TikTok</p>
  <button class="featured-button">View  Jobs</button>
</div>

<div class="featured-card">
  <img class="featured-image" src={apple}/> 
  <p>Apple</p>
  <button class="featured-button">View  Jobs</button>
</div>
</div>
</div></>
    )
}