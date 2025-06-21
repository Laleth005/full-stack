import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <div>
        <Link to="/state">Use State</Link><br />
        <Link to="/form">Controlled form</Link>
      </div>
      <h1>About page</h1>
    </>
  );
};

export default About;
