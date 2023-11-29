import { NavLink } from 'react-router-dom';
import * as projects from '../assets';

function Project({ project }) {
  const { name, repo, link, description, image } = project;

  // Use the backgroundImage style to set the background image
  const backgroundImageStyle = {
    backgroundImage: `url(${projects[image]})`,
    backgroundSize: 'cover', // Adjust as needed
  };

  return (
    <div className='project-container'>
        <div className="projects" style={backgroundImageStyle}>
        <div className="projectImage">
            <h1>
            <NavLink to={`/projects/${name}`} className='projectLinks' activeClassName="active">
                {name}
            </NavLink>{' '}
            <a href={repo}>
                <i className="fab fa-github"></i>
            </a>
            </h1>
            <p>{description}</p>
        </div>
        </div>
    </div>
  );
}

export default Project;
