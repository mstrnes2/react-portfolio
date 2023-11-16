import '../home.css';
import backgroundVideo from '../assets/images/colorfulwaves.mp4';

export default function Home() {
    return (
        <div className="homePage">
            <video autoPlay loop muted className="video">
                <source src={backgroundVideo} type='video/mp4'></source>
            </video>
            <div className="overlay">
                <div className="inner">
                    <h1>Molly Starnes</h1>
                    <h2>Full-Stack Web Developer</h2>
                </div>
            </div>
        </div>
    )
}