import '../home.css';
import backgroundVideo from '../assets/images/water.mp4';

export default function Home() {
    return (
        <div className="homePage">
            <div className='video-container'>
                <video autoPlay loop muted className="video">
                    <source src={backgroundVideo} type='video/mp4'></source>
                </video>
            </div>
            <div className="overlay">
                <div className="inner">
                    <h1 className="name">Molly Starnes</h1>
                    <h2 className="title">Full-Stack Web Developer</h2>
                </div>
            </div>
        </div>
    )
}