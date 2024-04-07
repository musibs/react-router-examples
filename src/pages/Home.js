import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      <h1>Home Page</h1>
      <p>
        Click here for <Link to="/products">products</Link> Page
      </p>
    </>
  );
};
export default HomePage;
