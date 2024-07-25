import blog from "../images/blog1"
import blog1 from "../images/blog2"
import blog2 from "../images/blog3"
import React from 'react';
import "../blog/blog.css";
export default function Blog(){
    return(
        <div class="blog" id="blog">
    <h1 class="section-title">Career Advices</h1>
    <p>learn more career tips from company's recruiter</p>
    <div class="blog-wrapper">
      <div class="blog-card-d">
        <img class="blog-image" src={blog}/>
        <div class="blog-detail">
          <span>11 April 2024</span>
          <h4>How to enjoy your work</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, alias?</p>
          <hr class="divider"/>
          <a href="#" class="blog-more">Read More</a>
        </div>
      </div>
      <div class="blog-card-d">
        <img class="blog-image" src={blog1}/>
        <div class="blog-detail">
          <span>17 may 2024</span>
          <h4>Work pressure management</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, alias?</p>
          <hr class="divider"/>
          <a href="#" class="blog-more">Read More</a>
        </div>
      </div>
      <div class="blog-card-d">
        <img class="blog-image" src={blog2}/>
        <div class="blog-detail">
          <span>8 june 2024</span>
          <h4>10 tips for teenagers</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, alias?</p>
          <hr class="divider"/>
          <a href="#" class="blog-more">Read More</a>
        </div>
      </div>
      










    </div>
    
  </div>
    )
}