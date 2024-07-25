import React from 'react';
import Headerpage from "../header/Header";
import NavBar from "../NavComponent/Nav";
import Searchbar from "../search/Search";
import Filterbox from "../filterbox/Filter";
import Joblist from "../joblistings/Joblist";
import Joindatalist from "../join/Joindatalist";
import Featuredcompanies from "../featuredcompanies/Featuredcompanies"
import Blog from "../blog/blog";
import Footer from "../footer/Footer";
// import Testimonials from "../Testimonials/Testimonial";
export default function Home() {
    return (
        <main>
            <NavBar />
            <Headerpage />
            <Searchbar />
            <Filterbox />
            <Joblist />
            <Joindatalist />
            <Featuredcompanies/>
            {/* <Testimonials/> */}
            <Blog/>
            <Footer/>
            
        </main>
    );
}
