import '../index.css';
import computerImage from '../assets/images/colorexplosion.mp4';

export default function About() {
    return (
        <div className="homePage">
            <div className='video-container'>
                <video autoPlay loop muted className="video">
                    <source src={computerImage} type='video/mp4'></source>
                </video>
            </div>
            <div className='aboutMeContainer overlay'>
                <div className = 'aboutMePage'>
                    <h1 className='aboutHeader'>About Me</h1>
                    <p className='aboutSection'>Hello, I'm Molly, a full-stack web developer proficient in HTML, CSS, and JavaScript, with hands-on experience in frameworks like Node.js, React, and Express, as well as databases including MySQL and MongoDB. I thrive on solving challenges and creating seamless, user-centric digital experiences. Committed to clean and maintainable code, I bring a problem-solving mindset and a passion for continuous learning to every project. Let's collaborate and bring your digital ideas to life!</p>
                </div>
            </div>
        </div>
    );
}