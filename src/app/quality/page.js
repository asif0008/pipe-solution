'use client';

import Header from '../components/Header'
import Footer from '../components/Footer'
import { quality } from '../data';
import Image from 'next/image';
import DetailPage from './DetailPage';
import { useState } from 'react';

const Quality = () => {
  const [selectedItem, setSeletedItem] = useState(null);

  const handleSelectedItem = (item) => {
    setSeletedItem(item);
  } 

  const handleBack = () => {
    setSeletedItem(null);
  }

  return (
    <>
    <Header />
    <div className='bg-white'>
      <div className='container-size pt-[3rem] pb-[6rem]'>
        <h1 
          className='text-primary font-semibold text-[1.5rem] md:text-[2.5rem] border-b border-gray-300 pb-1'
          >Quality Assurance
        </h1>
        <p className='text-sm text-gray-400 pt-3 pl-5'>
        We are committed to delivering unparalleled quality and reliability in our products, embodying the inherent value we offer our clients. Through the utilization of industry-leading testing systems, our products surpass safety requirements, ensuring the highest standards of quality and reliability.
        </p>
        <div className='mt-14'>
          {selectedItem ? (
            <DetailPage item={selectedItem} back={handleBack} />
          ) : (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[4rem]'>
            {quality.map((item, i) => (
                <div className='flex flex-col items-center gap-3' key={i}>
                  <h2 className='text-primary text-xl font-medium'>{item.heading}</h2>
                  <div className='flex items-center justify-center bg-grey1 py-2 w-[80%] rounded-2xl'>
                    <Image src={item.image} width={100} height={100}></Image>
                  </div>
                  <button 
                  onClick={() => setSeletedItem(item)}
                  className='text-primary text-lg flex items-center gap-3'>
                    Discover More
                    <svg xmlns="http://www.w3.org/2000/svg" width="43" height="30" viewBox="0 0 43 30" fill="none">
                      <ellipse opacity="0.2" cx="28.1368" cy="14.6367" rx="14.5" ry="14.8634" transform="rotate(-90 28.1368 14.6367)" fill="#2D4A84"/>
                      <path d="M1.38281 14.1367C1.10667 14.1367 0.882812 14.3606 0.882812 14.6367C0.882812 14.9129 1.10667 15.1367 1.38281 15.1367V14.1367ZM31.4631 14.9903C31.6584 14.795 31.6584 14.4784 31.4631 14.2832L28.2812 11.1012C28.0859 10.9059 27.7693 10.9059 27.5741 11.1012C27.3788 11.2964 27.3788 11.613 27.5741 11.8083L30.4025 14.6367L27.5741 17.4651C27.3788 17.6604 27.3788 17.977 27.5741 18.1723C27.7693 18.3675 28.0859 18.3675 28.2812 18.1723L31.4631 14.9903ZM1.38281 15.1367H31.1096V14.1367H1.38281V15.1367Z" fill="#2D4A84"/>
                    </svg>
                  </button>
                </div>
            ))}
          </div>
          ) }
        </div>
      </div>
    </div>
    <Footer />
  </>
    
  )
}

export default Quality
