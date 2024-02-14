'use client'

// Contact.js
import Header from '../components/Header';
import Footer from '../components/Footer';
import CustomInput from './CustomInput';
import Link from 'next/link';
import SocialIcons from './SocialIcons';
import Map from './Map';

const Contact = () => {

  return (
    <>
      <Header />
      <section className='bg-background pt-[3rem] pb-[5rem]'>
        <section className='container-size'>
          <h1 className='text-primary font-semibold text-[1.5rem] md:text-[2.5rem]'>Contact us</h1>
          <div className='flex flex-col-reverse lg:flex-row gap-[3rem] mt-[1rem]'>
            <div className='flex-[1]'>
              <form className='bg-white px-12 py-6'>
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
                  <div className='flex items-center gap-[1rem]'>
                  <input type="checkbox" className="form-checkbox h-6 w-6 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" />
                    <p className='flex items-center gap-1'>
                      By submitting you agree to our 
                      <Link className='text-primary' href="/privacy-policy">privacy policy</Link>
                    </p>
                  </div>
                  <input 
                    type='button' 
                    value='Submit' 
                    className='bg-primary px-10 py-2 text-md text-white rounded-md cursor-pointer' 
                  />
                </div>
              </form>
              <div className='block lg:hidden mt-[3rem]'>
                <Map />
              </div>
            </div>
            
            <div className='flex-[0.8]'>
              <SocialIcons />
              <div className='hidden lg:block'>
                <Map />
              </div>
            </div>
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
};

export default Contact;

