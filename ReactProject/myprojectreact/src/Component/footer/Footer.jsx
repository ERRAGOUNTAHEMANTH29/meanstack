import "../footer/Footer.css"
import React from 'react';
export default function Footer(){
    return(
<footer>
        <div class="footer-container">
            <div class="footer-section">
                <h3>About Us</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.</p>
            </div>
            <div class="footer-section">
                <h3>Quick Links</h3>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Jobs</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h3>Follow Us</h3>
                <div class="social-icons">
                    <a href="#" class="social-icon">Facebook</a>
                    <a href="#" class="social-icon">Twitter</a>
                    <a href="#" class="social-icon">LinkedIn</a>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            &copy; 2024 Job Board. All rights reserved.
        </div>
    </footer>

    )
}