import React, { useState, useEffect } from 'react';
import githubIcon from '../assets/images/github-mark-white.png';
import linkedinIcon from '../assets/images/linkedin.png';
import emailIcon from '../assets/images/Email_icon.png';

function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseMove = () => {
    setIsVisible(true);
    document.body.classList.add('no-scroll');
  };

  useEffect(() => {
    let timeoutId;

    const handleMouseLeave = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsVisible(false);
      }, 3000); // Adjust the timeout duration as needed
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-md-12 icons">
                <FooterLink href="https://github.com/mstrnes2" icon={githubIcon} alt="GitHub icon" className='github-icon'/>
                <FooterLink href="https://www.linkedin.com/in/molly-starnes-860819147" icon={linkedinIcon} alt="LinkedIn icon" className='linkedin-icon'/>
                <FooterLink href="mailto:mstrnes2@gmail.com" icon={emailIcon} alt="Email icon" className='email-icon'/>
              </div>
            </div>
          </div>
        </footer>
      )}
    </>
  );
}

const FooterLink = ({ href, icon, alt }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <img src={icon} alt={alt} />
  </a>
);

export default Footer;

