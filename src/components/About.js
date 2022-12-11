import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
        <h4>Task Tracker Version 1.0.0</h4>
        <a href="https://www.linkedin.com/in/bilgenays">About Author</a>
        <p>
        <Link to="/">
          Go Back
        </Link>
        </p>
    </div>
  )
}

export default About