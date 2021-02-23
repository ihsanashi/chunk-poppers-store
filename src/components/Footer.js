import React from 'react';
import { Link } from 'gatsby';
import Container from './Container';
import Logo from '../images/cp-logo.png';

const Footer = () => {
  return (
    <footer className='pt-12 pb-10'>
      <Container>
        <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 lg:gap-6'>
          <div className='col-span-1 lg:col-span-2'>
            <Link to='/'>
              <img src={Logo} className='h-12 w-12' alt='Chunk Poppers logo' />
            </Link>
            <h6 className='font-normal text-sm text-gray-700 mt-8 mb-5'>
              Varius in tempor ipsum, amet at sed elit massa proin. A sagittis,
              eget malesuada dui.
            </h6>
          </div>
          <div>
            <h5 className='uppercase font-medium text-sm tracking-wide'>
              Sitemap
            </h5>
            <ul className='list-none'>
              <li className='text-sm text-gray-600 my-5'>
                <Link to='/'>Home</Link>
              </li>
              <li className='text-sm text-gray-600 my-5'>
                <Link to='/'>Shop</Link>
              </li>
              <li className='text-sm text-gray-600 my-5'>
                <Link to='/'>Services</Link>
              </li>
              <li className='text-sm text-gray-600 my-5'>
                <Link to='/'>About us</Link>
              </li>
              <li className='text-sm text-gray-600 my-5'>
                <Link to='/'>Contact us</Link>
              </li>
            </ul>
          </div>
          <div className='col-span-1 lg:col-span-2'>
            <h5 className='uppercase font-medium text-sm tracking-wide'>
              Newsletter
            </h5>
            <p className='text-sm text-gray-600 my-5'>
              Be the first to know about our promotions!
            </p>
          </div>
          <h2>Hello</h2>
        </section>
      </Container>
    </footer>
  );
};

export default Footer;
