import Link from 'next/link';
import Image from 'next/image';

export const Logo = () => {
  return (
    <Link href='/'>
      <Image
        src='/images/cp-logo.png'
        width={60}
        height={60}
        alt='Chunk Poppers logo'
      />
    </Link>
  );
};

export default Logo;
