import React from 'react'
import { Metadata } from "next";
import Hero from '@/components/Home/Hero';
import Progresswork from '@/components/Home/WorkProgress';
import Experience from '@/components/Home/Experience';
import Services from '@/components/Home/Services';
import Contactform from '@/components/Home/Contact';
import Certifications from '@/components/Home/Certifications';

export const metadata: Metadata = {
  title: "Dilshan kavishka Sampath | Portfolio",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Progresswork isColorMode={false} />
      <Experience />
      <Certifications />
      <Contactform />
    </main>
  )
}
