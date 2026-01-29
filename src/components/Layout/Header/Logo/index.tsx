import { getImgPath } from '@/utils/image';
import Image from 'next/image';
import Link from 'next/link';

const Logo: React.FC = () => {

  return (
    <Link href="/">
      <h1 className='text-2xl font-bold dark:text-white'>
        Dilshan GS
      </h1>
    </Link>
  );
};

export default Logo;
