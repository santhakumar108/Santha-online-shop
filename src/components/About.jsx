import React from "react";
import './style/About.css';

function About(){
    return(
        <div className="about-container">
            <main>
        <section class="about-section">
            <h1>About Us</h1>
            <p>Welcome to SanthaOnlineShop! We are a passionate team dedicated to...</p>
            <p>One years of successfully to running our company...</p>
            <p>Very safty and securely of my website...</p>
        </section>
        <hr />
        <section class="team-section">
            <h2>Our Team</h2>
            <div class="team-member">
                <center><img src="images/santha.jpg" alt="Team Member 1" /> </center>
                <h3>Santha Kumar</h3>
                <p>Co-Founder &amp; CEO</p>
            </div>
            <hr />
            <div class="team-member">
               <center><img src="images/santha1.jpg" alt="Team Member 2" /> </center>
                <h3>Santha</h3>
                <p>Chief Designer</p>
            </div>
        </section>
    </main>
            <footer>
                <p>&copy; 2023 SanthaOnlineShop. All Rights Reserved.</p>
            </footer>
        </div>
    )
}
export default About;