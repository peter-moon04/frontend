import { Link } from 'react-router';

const Home = () => {
  return (
    <div className="flex h-[500px] items-center justify-center">
      Home
      <Link to="count" className="hover:bg-red-100">
        move count
      </Link>
    </div>
  );
};

export default Home;
