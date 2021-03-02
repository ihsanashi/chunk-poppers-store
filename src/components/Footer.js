import React from 'react';
import { Link } from 'gatsby';
import Container from './Container';
import Logo from '../images/cp-logo.png';
import { FaInstagram, FaFacebookSquare, FaRegEnvelope } from 'react-icons/fa';

const Footer = () => {
  const date = new Date();
  return (
    <footer className='pt-12 pb-10 bg-gray-50'>
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
            <p className='text-sm text-gray-600'>
              2015 - {date.getFullYear()} &copy; Chunk Poppers
            </p>
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
                <Link to='/shop'>Shop</Link>
              </li>
              <li className='text-sm text-gray-600 my-5'>
                <Link to='/'>Services</Link>
              </li>
              <li className='text-sm text-gray-600 my-5'>
                <Link to='/'>About us</Link>
              </li>
              <li className='text-sm text-gray-600 my-5'>
                <Link to='/contact'>Contact us</Link>
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
        <div className='border-b-2 border-gray-200 my-5'></div>
        <section className='flex flex-col sm:flex-row items-start md:items-center justify-between'>
          <div className='flex flex-row items-center'>
            <a
              className='mr-5 text-fuchsiaRose-400 hover:text-fuchsiaRose-600'
              href='https://instagram.com'
              target='_blank'
              rel='noreferrer'
            >
              <FaInstagram size={20} />
            </a>
            <a
              className='mr-5 text-fuchsiaRose-400 hover:text-fuchsiaRose-600'
              href='https://facebook.com'
              target='_blank'
              rel='noreferrer'
            >
              <FaFacebookSquare size={20} />
            </a>
            <a
              className='mr-5 text-fuchsiaRose-400 hover:text-fuchsiaRose-600'
              href='mailto:hello@chunkpoppers.com'
              target='_blank'
              rel='noreferrer'
            >
              <FaRegEnvelope size={20} />
            </a>
          </div>
          <div className='flex flex-row items-center mt-5 sm:mt-0'>
            <Link to='/'>
              <p className='text-sm text-gray-600 mr-5'>Privacy Policy</p>
            </Link>
            <Link to='/'>
              <p className='text-sm text-gray-600'>Terms & Conditions</p>
            </Link>
          </div>
        </section>
      </Container>
    </footer>
  );
};

export default Footer;
