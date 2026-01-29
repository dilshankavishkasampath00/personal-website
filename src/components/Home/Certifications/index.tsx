import React from 'react'
import Link from 'next/link'
import { Certifications as CertificationsData } from '@/app/api/data'
import { Icon } from '@iconify/react'
import Image from 'next/image'

const Certifications = () => {
    return (
        <section className='bg-section dark:bg-darklight' id='certifications'>
            <div className='container mx-auto max-w-6xl px-4'>
                <div
                    className='flex gap-2 items-center justify-center'
                    data-aos='fade-up'
                    data-aos-delay='200'
                    data-aos-duration='1000'>
                    <span className='w-3 h-3 rounded-full bg-success'></span>
                    <span className='font-medium text-midnight_text text-sm dark:text-white/50'>
                        My Achievements
                    </span>
                </div>
                <h2
                    className='sm:text-4xl text-[28px] leading-tight font-bold text-midnight_text md:text-center text-start pt-7 pb-20 md:w-4/6 w-full m-auto dark:text-white'
                    data-aos='fade-up'
                    data-aos-delay='200'
                    data-aos-duration='1000'>
                    Certifications
                </h2>
                <div className='grid md:grid-cols-12 sm:grid-cols-8 grid-cols-1 gap-7'>
                    {CertificationsData.map((item, index) => (
                        <div
                            key={index}
                            data-aos='fade-up'
                            data-aos-delay={`${index * 200}`}
                            data-aos-duration='1000'
                            data-aos-offset='300'
                            className='col-span-4 bg-white flex flex-col justify-between items-center text-center py-14 px-7 shadow-service rounded-md gap-8 dark:bg-darkmode'>
                            {/* Using a generic trophy/certificate icon since we don't have specific icons for each cert yet */}
                            <div className='w-10 h-10 flex items-center justify-center text-4xl text-primary'>
                                <Icon icon="mdi:certificate" />
                            </div>
                            <h3 className='max-w-44 mx-auto text-xl font-bold'>
                                {item.title}
                            </h3>
                            <p className='dark:text-white/50 text-base font-normal'>
                                {item.provider}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Certifications
