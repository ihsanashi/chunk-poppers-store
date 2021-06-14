import Link from 'next/link';
import Container from './Container';
import Logo from '../components/Logo';
import footer_links from '../data/footer_links';
import { FaInstagram, FaFacebookSquare, FaRegEnvelope } from 'react-icons/fa';

const Footer = () => {
  const date = new Date();

  return (
    <footer className='pt-12 pb-10 bg-gray-50'>
      <Container>
        <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-4'>
          <div className='col-span-1 lg:col-span-2'>
            <Link href='/'>
              <Logo />
            </Link>
            <h6 className='font-normal text-base text-gray-700 mt-8 mb-5'>
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
              {footer_links.map((item) => (
                <li key={item.name} className='text-sm text-gray-600 my-5'>
                  <Link href={item.link}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='col-span-1 lg:col-span-2'>
            <h5 className='uppercase font-medium text-sm tracking-wide'>
              Newsletter
            </h5>
            <p className='text-base text-gray-600 my-5'>
              Be the first to know about our promotions!
            </p>
            <input
              type='email'
              placeholder='siti@example.com'
              className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
            />
            <button className='w-full mx-auto mt-2 px-4 py-2 block text-center rounded-md text-white bg-fuchsiaRose-500'>
              Subscribe
            </button>
          </div>
          <div>
            <h5 className='uppercase font-medium text-sm tracking-wide'>
              Made possible with
            </h5>
            <div>
              <ul className='grid grid-cols-3 lg:grid-cols-2 gap-4 my-5'>
                <li className='mb-2'>
                  <a
                    href='https://snipcart.com/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <img
                      className='h-full w-full object-contain'
                      src='/images/snipcart_logo.png'
                      alt='Snipcart logo'
                    />
                  </a>
                </li>
                <li className='mb-2'>
                  <a
                    href='https://stripe.com/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <img
                      className='h-full w-full object-contain'
                      src='images/stripe_logo.png'
                      alt='Stripe logo'
                    />
                  </a>
                </li>
                <li className='mb-2'>
                  <a
                    href='https://www.sanity.io/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <img
                      className='h-full w-full object-contain'
                      src='images/sanity_logo.png'
                      alt='Sanity logo'
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <div className='border-b-2 border-gray-200 my-5'></div>
        <section className='flex flex-row items-center justify-between'>
          <div className='flex flex-row items-center'>
            <a
              className='mr-5 text-fuchsiaRose-400 hover:text-fuchsiaRose-600'
              href='https://www.instagram.com/chunkpoppers/'
              target='_blank'
              rel='noreferrer'
            >
              <FaInstagram size={20} />
            </a>
            <a
              className='mr-5 text-fuchsiaRose-400 hover:text-fuchsiaRose-600'
              href='https://www.facebook.com/ChunkPoppers/'
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
          {/* <div className='flex flex-row items-center'>
            {data.allSanityLegal.edges.map((item) => (
              <Link
                href={`/legal/${item.node.slug.current}`}
                key={item.node._id}
              >
                <p className='text-xs md:text-sm text-gray-600 ml-5'>
                  {item.node.pageName}
                </p>
              </Link>
            ))}
          </div> */}
        </section>
      </Container>
    </footer>
  );
};

export default Footer;
