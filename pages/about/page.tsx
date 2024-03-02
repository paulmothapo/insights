import React from 'react';

const AboutPage: React.FC = () => {
    return (
        <div className="about-page">
            <h1>About Our Consulting Company</h1>
            <p>Welcome to our consulting company! We are dedicated to providing top-notch consulting services to businesses across various industries.</p>
            
            <h2>Our Mission</h2>
            <p>Our mission is to help our clients achieve their goals and overcome challenges by offering expert advice, innovative solutions, and unparalleled support.</p>
            
            <h2>Our Team</h2>
            <p>We have a team of experienced consultants who are experts in their respective fields. With a diverse range of skills and backgrounds, our team is equipped to handle any project or task.</p>
            
            <h2>Our Services</h2>
            <p>We offer a wide range of consulting services, including:</p>
            <ul>
                <li>Business Strategy</li>
                <li>Management Consulting</li>
                <li>Financial Advisory</li>
                <li>Technology Solutions</li>
                <li>Marketing and Branding</li>
            </ul>
            
            <h2>Contact Us</h2>
            <p>If you're interested in learning more about our consulting services or would like to discuss how we can help your business, please don't hesitate to <a href="/contact">contact us</a>.</p>
        </div>
    );
};

export default AboutPage;
