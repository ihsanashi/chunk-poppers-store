import React from 'react';
import { Link } from 'gatsby';
import nav_links from '../data/nav_links';
import Logo from './Logo';
import { BiUserCircle, BiBasket } from 'react-icons/bi';

const Navbar = () => {
  return (
    <header className='max-w-6xl mx-auto p-8'>
      <nav className=''>
        <div className='flex items-center'>
          <div className='flex-grow-0'>
            <Link to='/'>
              <Logo />
            </Link>
          </div>
          <div className='mx-auto'>
            <ul className='flex flex-row items-center'>
              {nav_links.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.link}
                    activeClassName='text-purple-500'
                    className='px-5 text-gray-500 hover:text-purple-700'
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='flex items-center space-x-5'>
            <a href='/profile'>
              <BiUserCircle
                size={24}
                className='text-gray-500 hover:text-pink-700'
              />
            </a>
            <a href='/cart'>
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
