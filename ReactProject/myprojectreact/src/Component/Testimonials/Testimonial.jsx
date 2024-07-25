import profile from "../images/profile"
import profile2 from "../images/profile2"
import profile3 from "../images/profile3"
import profile4 from "../images/profil4"
import profile5 from "../images/profile5"
import "../Testimonials/testimonials.css"

import React from "react"


export default function Testimonials(){

    // var swiper = new Swiper(".mySwiper", {
    //     loop: true,
    //     autoplay: {
    //         delay: 1000,
    //         disableOnInteraction: false,
    //     },
    //     slidesPerView: 1,
    //     spaceBetween: 10,
    //     pagination: {
    //         el: ".swiper-pagination",
    //         clickable: true,
    //     },
    //     breakpoints: {
    //         640: {
    //             slidesPerView: 2,
    //             spaceBetween: 20,
    //         },
    //         768: {
    //             slidesPerView: 3,
    //             spaceBetween: 40,
    //         },
    //         1024: {
    //             slidesPerView: 3,
    //             spaceBetween: 50,
    //         },
    //     }
    // });
    
  
  
  
    return(
        <>
        <div class="testimonial" id="testimonials">
  <h1 class="section-title">Testimonials</h1>
  <p>Lets see what our client say about us</p>
  <div class="swiper mySwiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <i class="fa-solid fa-quote-left fa-2xl" style="color: #FFD43B;"></i>
        <h3>Lorem ipsum dolor, sit amet consectetur
           adipisicing elit. Nulla ex eveniet cumque sunt, velit accusamus totam dignissimos non rem fuga, temporibus, officiis omnis tenetur consequuntur!
           Soluta velit ducimus pariatur minima?Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Odio, delectus.</h3>
            <div class="testimonial-pic">
              <img src={profile}/>
              <p>Hendry</p>
              <span>Business Management</span>
            </div>
      </div>

      <div class="swiper-slide">
        <i class="fa-solid fa-quote-left fa-2xl" style="color: #FFD43B;"></i>
        <h3>Lorem ipsum dolor, sit amet consectetur
           adipisicing elit. Nulla ex eveniet cumque sunt, velit accusamus totam dignissimos non rem fuga, temporibus, officiis omnis tenetur consequuntur!
           Soluta velit ducimus pariatur minima?Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Odio, delectus.</h3>
            <div class="testimonial-pic">
              <img src={profile2}/>
              <p>Mark</p>
              <span>Designer</span>
            </div>
      </div>

      <div class="swiper-slide">
        <i class="fa-solid fa-quote-left fa-2xl" style="color: #FFD43B;"></i>
        <h3>Lorem ipsum dolor, sit amet consectetur
           adipisicing elit. Nulla ex eveniet cumque sunt, velit accusamus totam dignissimos non rem fuga, temporibus, officiis omnis tenetur consequuntur!
           Soluta velit ducimus pariatur minima?Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Odio, delectus.</h3>
            <div class="testimonial-pic">
              <img src={profile3}/>
              <p>Klasan</p>
              <span>Web Developer</span>
            </div>
      </div>

      <div class="swiper-slide">
        <i class="fa-solid fa-quote-left fa-2xl" style="color: #FFD43B;"></i>
        <h3>Lorem ipsum dolor, sit amet consectetur
           adipisicing elit. Nulla ex eveniet cumque sunt, velit accusamus totam dignissimos non rem fuga, temporibus, officiis omnis tenetur consequuntur!
           Soluta velit ducimus pariatur minima?Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Odio, delectus.</h3>
            <div class="testimonial-pic">
              <img src={profile4}/>
              <p>Antony</p>
              <span>UI UX designing</span>
            </div>
      </div>

      <div class="swiper-slide">
        <i class="fa-solid fa-quote-left fa-2xl" style="color: #FFD43B;"></i>
        <h3>Lorem ipsum dolor, sit amet consectetur
           adipisicing elit. Nulla ex eveniet cumque sunt, velit accusamus totam dignissimos non rem fuga, temporibus, officiis omnis tenetur consequuntur!
           Soluta velit ducimus pariatur minima?Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Odio, delectus.</h3>
            <div class="testimonial-pic">
              <img src={profile5}/>
              <p>Nicholas</p>
              <span>Engineer</span>
            </div>
      </div>

      

    </div>
    <div class="swiper-pagination"></div>
      
    
  </div>
 </div></>
    )
}