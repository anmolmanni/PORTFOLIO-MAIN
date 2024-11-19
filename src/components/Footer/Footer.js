import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div>
       <footer classNameName="footer">
        <div className="footer-container">
         
            <div className="footer-logo">
                <h2>Your Logo</h2>
                <p>Your tagline or a brief description goes here.</p>
            </div>

     
            <div className="footer-links">
                <h3>Quick Links</h3>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>

            
            <div className="footer-contact">
                <h3>Contact Us</h3>
                <p>Email: info@example.com</p>
                <p>Phone: (123) 456-7890</p>
                <p>Address: 123 Street, City, Country</p>
            </div>

            
            <div className="footer-social">
                <h3>Follow Us</h3>
                <div>
                    <a href="#">Facebook</a>
                    <a href="#">Twitter</a>
                    <a href="#">Instagram</a>
                    <a href="#">LinkedIn</a>
                </div>
            </div>
        </div>

        <div className="footer-bottom">
            <p>&copy; 2023 Your Company Name. All rights reserved.</p>
        </div>
    </footer>
    </div>
  )
}

export default Footer