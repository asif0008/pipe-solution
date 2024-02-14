'use client'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Accordion from './Accordion'
import Image from 'next/image'

const items = [
  {
    title: 'Catalogue',
    content: [
      { title: 'PE Pipes', language: 'English, Thai', size: '900.01 KB', fileUrl: '/image/white-logo.png' },
      { title: 'Item PE Accessories', language: 'English, Thai', size: '700.01 KB', fileUrl: '/image/white-logo.png' },
      { title: 'PB Pipes and Accessories', language: 'English', size: '1 MB', fileUrl: '/image/white-logo.png' }
    ]
  },
  {
    title: 'Certificates',
    content: [
      { title: 'PE Pipes', language: 'English, Thai', size: '900.01 KB', fileUrl: '/image/white-logo.png' },
      { title: 'Item PE Accessories', language: 'English, Thai', size: '700.01 KB', fileUrl: '/image/white-logo.png' },
      { title: 'PB Pipes and Accessories', language: 'English', size: '1 MB', fileUrl: '/image/white-logo.png' }
    ]
  },
];

const Resources = () => {
  return (
    <>
    <Header />
    <section className='bg-white'>
      <section className='container-size pt-[3rem] pb-[6rem]'>
        <h1 
            className='text-primary font-semibold text-[1.5rem] md:text-[2.5rem] border-b border-gray-300 pb-1'
            >Resources
        </h1>
        <div className='mt-5'>
          <Accordion items={items} />
        </div>
      </section>
    </section>
    <Footer />
    </>
  )
}

export default Resources
