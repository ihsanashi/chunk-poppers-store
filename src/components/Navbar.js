import React from 'react';
import { Link } from 'gatsby';
import nav_links from '../data/nav_links';
import Logo from '../images/cp-logo.png';
import { BiUserCircle, BiBasket } from 'react-icons/bi';

const Navbar = () => {
  return (
    <header className='max-w-5xl mx-auto p-8'>
      <nav className=''>
        <div className='flex items-center'>
          <div className='flex-grow-0'>
            <Link to='/'>
              <img src={Logo} className='h-12 w-12' alt='Chunk Poppers logo' />
            </Link>
          </div>
          <div className='mx-auto'>
            <ul className='flex flex-row items-center'>
              {nav_links.map((item) => (
                <li
                  key={item.name}
                  className='px-5 text-gray-500 hover:text-purple-700'
                >
                  <Link to={item.link}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='flex items-center space-x-5'>
            <a href='#'>
              <BiUserCircle
                size={24}
                className='text-gray-500 hover:text-pink-700'
              />
            </a>
            <a href='#'>
              <BiBasket
                size={24}
                className='text-gray-500 hover:text-pink-700'
              />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
