import Link from 'next/link';
import Image from 'next/image';

const SingleProduct = ({ link, imageSrc, title, basePrice }) => {
  return (
    <Link href={link}>
      <div>
        <Image src={imageSrc} />
        <h5 className='mt-3 mb-1 font-medium text-base md:text-lg'>{title}</h5>
        <p className='text-gray-600 text-sm font-light'>From RM {basePrice}</p>
      </div>
    </Link>
  );
};

export default SingleProduct;
