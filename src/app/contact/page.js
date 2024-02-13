'use client'

// Contact.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CustomInput from './CustomInput';
import { Link } from 'next/link'; 

const Contact = () => {
  return (
    <>
      <Header />
      <section className='bg-background pt-[3rem] pb-[5rem]'>
        <section className='container-size'>
          <h1 className='text-primary font-semibold text-[1.5rem] md:text-[2.5rem]'>Contact us</h1>
          <div className='flex flex-col lg:flex-row gap-[3rem] mt-[1rem]'>
            <div className='flex-[1] bg-white px-12 py-6'>
              <form>
                <div className='flex flex-col md:flex-row gap-[2rem]'>
                  <CustomInput labelText='Name*' inputType={'text'} tagType={'input'} />
                  <CustomInput labelText='Surname*' inputType={'text'} tagType={'input'} />
                </div>
                <div className='flex flex-col md:flex-row gap-[2rem] mt-[2rem]'>
                  <CustomInput labelText='Email*' inputType={'email'} tagType={'input'} />
                  <CustomInput labelText='Phone' inputType={'tel'} tagType={'input'} />
                </div>
                <div className='flex flex-col md:flex-row gap-[2rem] mt-[2rem]'>
                  <CustomInput labelText='Message*' tagType={'textarea'} />
                </div>
                <div className='flex flex-col md:flex-row items-center justify-between mt-[2rem]'>
                  <div>
                    <input type='checkbox' />
                    <p className='flex items-center gap-[1rem]'>
                      By submitting you agree to our 
                      <Link href="/privacy-policy">privacy policy</Link> 
                    </p>
                  </div>
                </div>
              </form>
            </div>
            <div className='flex-[0.8] bg-white'>
              contact info
            </div>
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
};

export default Contact;

