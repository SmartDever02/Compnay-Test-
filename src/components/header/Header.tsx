import { Link } from 'react-router-dom';
import { navs } from '../../data/structure';

const Header = () => {
  return (
    <header className='bg-[#151519] h-32 p-[10px_30px]'>
      <div className='text-md flex gap-3'>
        {navs.map((nav) => (
          <Link key={nav.value} to={nav.link} className=''>
            {nav.value}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header;
