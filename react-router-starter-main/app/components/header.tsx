import { Link } from 'react-router';

const Header = () => {
  return (
    <div className="flex h-[100px] items-center justify-center bg-green-100">
      <Link to="/">Header</Link>
    </div>
  );
};

export default Header;
