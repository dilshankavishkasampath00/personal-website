import React, { FC } from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react'

const Footer: FC = () => {
  return (
    <footer className='bg-darkmode relative z-1 border-t border-dark_border px-6'>
      <div className='container mx-auto max-w-6xl px-4'>
        <div className='grid md:grid-cols-12 grid-cols-1 sm:grid-cols-12'>
          <div className='md:col-span-4 sm:col-span-6 col-span-12 sm:border-r border-b border-solid border-dark_border flex items-center sm:border-b-0 sm:min-h-25 py-10 shrink-0 '>
            <div className='sm:content-normal sm:text-start text-center content-center sm:w-auto w-full'>
              <h2 className='text-white py-10 text-[40px] leading-tight font-bold'>
                Let's Connect
              </h2>
              <Link
                href='#contact'
                className='px-9 py-3 rounded-lg bg-primary text-white hover:bg-blue-700 hover:shadow-none'>
                Contact Me
              </Link>
            </div>
          </div>
          <div className='md:col-span-4 sm:col-span-6 col-span-12 sm:flex items-center sm:min-h-25 py-10 justify-center shrink-0 md:border-r border-b sm:border-b-0 border-solid border-dark_border'>
            <div className='flex flex-col items-center text-center'>
              <span className='text-lg font-bold text-white pb-4 inline-block'>
                Contact Info
              </span>
              <div className='pb-5 flex flex-col items-center'>
                <p className='text-base font-bold text-white'>Phone</p>
                <Link
                  href='tel:+94704286992'
                  className='text-xl text-white/50 hover:text-white'>
                  +94704286992
                </Link>
              </div>
              <div className='flex flex-col items-center gap-1'>
                <p className='text-base font-bold text-white'>Email</p>
                <Link
                  href='mailto:dilshankavishkasampath200@gmail.com'
                  className='text-xl text-white/50 hover:text-white break-all'>
                  dilshankavishkasampath200@gmail.com
                </Link>
              </div>
              <div>
                <ul className='flex items-center gap-3 mt-[1.875rem] flex-wrap'>
                  <li className='group'>
                    <Link
                      href='https://www.linkedin.com/in/dilshankavishka-sampath-834360313'
                      target='_blank'
                      className='w-10 h-10 flex items-center justify-center rounded-full border border-white/20 hover:bg-primary hover:border-primary transition-all text-white'>
                      <Icon icon="mdi:linkedin" width="24" height="24" />
                    </Link>
                  </li>
                  <li className='group'>
                    <Link
                      href='https://github.com/dilshankavishkasampath00'
                      target='_blank'
                      className='w-10 h-10 flex items-center justify-center rounded-full border border-white/20 hover:bg-primary hover:border-primary transition-all text-white'>
                      <Icon icon="mdi:github" width="24" height="24" />
                    </Link>
                  </li>
                  <li className='group'>
                    <Link
                      href='#'
                      target='_blank'
                      className='w-10 h-10 flex items-center justify-center rounded-full border border-white/20 hover:bg-primary hover:border-primary transition-all text-white'>
                      <Icon icon="mdi:instagram" width="24" height="24" />
                    </Link>
                  </li>
                  <li className='group'>
                    <Link
                      href='#'
                      target='_blank'
                      className='w-10 h-10 flex items-center justify-center rounded-full border border-white/20 hover:bg-primary hover:border-primary transition-all text-white'>
                      <Icon icon="ic:baseline-tiktok" width="24" height="24" />
                    </Link>
                  </li>
                  <li className='group'>
                    <Link
                      href='#'
                      target='_blank'
                      className='w-10 h-10 flex items-center justify-center rounded-full border border-white/20 hover:bg-primary hover:border-primary transition-all text-white'>
                      <Icon icon="mdi:youtube" width="24" height="24" />
                    </Link>
                  </li>
                  <li className='group'>
                    <Link
                      href='#'
                      target='_blank'
                      className='w-10 h-10 flex items-center justify-center rounded-full border border-white/20 hover:bg-primary hover:border-primary transition-all text-white'>
                      <Icon icon="mdi:whatsapp" width="24" height="24" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='md:col-span-4 col-span-12 border-t md:border-none border-solid border-dark_border sm:flex items-center justify-end md:min-h-25 py-10 shrink-0'>
            <div className='md:w-3/4 w-full sm:text-start text-center'>
              <span className='font-bold text-white pb-4 inline-block text-2xl'>
                Stay Updated
              </span>
              <p className='text-MistyBlue text-base pb-7 text-white/50'>
                Follow my work and latest updates.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='text-center gap-4 md:gap-0 flex-wrap p-7 border-t border-solid border-dark_border'>
        <div>
          <ul className='flex justify-center mb-4 items-center sm:gap-7 gap-3'>
            <li className='text-base text-white/50'>
              <Link href='/#about' className='hover:text-primary'>
                About
              </Link>
            </li>
            <li className='text-base text-white/50'>
              <Link href='/#experience' className='hover:text-primary'>
                Experience
              </Link>
            </li>
            <li className='text-base text-white/50'>
              <Link href='/#certifications' className='hover:text-primary'>
                Certifications
              </Link>
            </li>
            <li className='text-base text-white/50'>
              <Link href='/#contact' className='hover:text-primary'>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className='text-base text-white/50'>
            © {new Date().getFullYear()} Dilshan kavishka Sampath. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
