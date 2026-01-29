'use client'
import { getImgPath } from '@/utils/image'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className='relative md:pt-44 pt-28 bg-white  dark:bg-darklight bg-cover text-white'>
      <div className='container mx-auto max-w-6xl px-4 grid grid-cols-12 gap-4 relative z-10'>
        <div
          className='md:col-span-6 col-span-12 p-4 md:px-4 px-0 space-y-4 flex flex-col items-start justify-center'
          data-aos='fade-right'
          data-aos-delay='200'
          data-aos-duration='1000'>
          <div className='flex gap-2 items-center'>
            <span className='w-3 h-3 rounded-full bg-success'></span>
            <span className='font-medium text-midnight_text text-sm dark:text-white/50'>
              Full-Stack Software Developer
            </span>
          </div>
          <h1 className='text-midnight_text font-bold dark:text-white text-4xl  md:text-5xl md:leading-[1.15]'>
            Dilshan kavishka Sampath
          </h1>
          <p className='text-grey dark:text-white/70 text-xl font-semibold'>
            Currently serving as a Freelance Developer with core skills in C#, Java, and PHP. Passionate about continuous learning and innovation.
          </p>
          <a
            href='#contact'
            className='py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300 px-8'>
            Contact Me
          </a>
          <div className='flex items-center mt-12 gap-4'>
            <div className='flex items-center'>
            </div>
            <div>
              <p className='text-sm font-normal text-grey max-w-56'>
                Need help?{' '}
                <Link href='#' className='text-primary hover:text-blue-700'>
                  Contact our experts
                </Link>{' '}
                Tell us about your project
              </p>
            </div>
          </div>
        </div>

        <div className="md:col-span-6 col-span-12 flex justify-center items-center relative before:absolute before:content-[''] before:bg-[url('/images/hero/line-leyar.svg')] before:bg-no-repeat before:left-1/2 before:top-0 before:h-24 before:w-52 before:-z-10 before:translate-x-70% before:-translate-y-40% lg:before:inline-block before:hidden after:absolute after:content-[''] after:bg-[url('/images/hero/round-leyar.svg')] after:bg-no-repeat xl:after:inline-block after:hidden after:left-0 after:bottom-0 after:h-6.25 after:w-6.25 after:-z-10 after:-translate-x-1/2 after:translate-y-1/2">
          {/* Apple Liquid Glass Style */}
          <div className="w-[28rem] h-[28rem] rounded-full overflow-hidden flex justify-center items-center shadow-2xl backdrop-blur-xl bg-white/20 dark:bg-white/5 border border-white/30 dark:border-white/10" style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.1) 100%)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.25)',
          }}>
            <Image
              src={getImgPath('/images/hero/hero-image.png')}
              alt='hero-image'
              width={448}
              height={448}
              quality={100}
              className="w-full h-full object-cover"
              priority
            />
          </div>

          {/* Classic Style - Uncomment to use */}
          {/* <div className="w-[28rem] h-[28rem] rounded-full overflow-hidden bg-white dark:bg-darklight border-4 border-white dark:border-darklight shadow-lg flex justify-center items-center">
            <Image
              src={getImgPath('/images/hero/hero-image.png')}
              alt='hero-image'
              width={448}
              height={448}
              quality={100}
              className="w-full h-full object-cover"
              priority
            />
          </div> */}
        </div>
      </div>
    </section >
  )
}

export default Hero
