import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import nav_links from '../data/nav_links';
import Logo from './Logo';
import { BiUserCircle, BiBasket, BiMenu, BiX } from 'react-icons/bi';

const Navbar = () => {
  const [width, setWidth] = useState(0);
  const [showMenu, setShowMenu] = useState(false);

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    if (process.browser) {
      window.addEventListener('resize', updateWidth);
      if (showMenu) {
        if (width > 768) {
          setShowMenu(false);
        }
      }
      return () => window.removeEventListener('resize', updateWidth);
    }
  }, [width]);

  return (
    <header className='max-w-6xl mx-auto p-3 lg:p-8'>
      <nav className='flex items-center justify-between'>
        <div className='order-2 lg:order-first lg:flex-grow-0'>
          <Link to='/'>
            <Logo />
          </Link>
        </div>
        <ul
          className={`${
            showMenu
              ? 'flex flex-col justify-center items-start list-none bg-mountbattenPink-50  fixed right-0 top-0 w-full h-full py-10 px-16 z-10'
              : 'hidden lg:flex lg:flex-row items-center'
          }`}
        >
          {nav_links.map((item) => (
            <li
              key={item.name}
              className='px-5 my-8 lg:my-0 text-3xl lg:text-lg'
            >
              <Link
                to={item.link}
                activeClassName='text-purple-500'
                className='text-gray-500 hover:text-purple-700'
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className='flex items-center space-x-3 lg:space-x-5 order-last'>
          <a href='/profile'>
            <BiUserCircle
              size={24}
              className='text-gray-500 hover:text-pink-700'
            />
          </a>
          <a href='/cart'>
            <BiBasket size={24} className='text-gray-500 hover:text-pink-700' />
          </a>
        </div>
        <button
          className={`block lg:hidden z-20 text-4xl ${
            showMenu ? 'text-mountbattenPink-500' : 'text-black'
          }`}
          onClick={() => setShowMenu(!showMenu)}
        >
          {showMenu ? (
            <BiX className='text-gray-600 fixed top-8' />
          ) : (
            <BiMenu className='text-fuchsiaRose-500' />
          )}
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
