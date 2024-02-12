import Header from '../components/Header'
import Footer from '../components/Footer'
// import Image from 'next/image'

const About = () => {
  return (
    <>
    <Header />
    {/* section one */}
    <section className='bg-cover bg-center bg-[url("/images/about-img-1.jpg")] h-screen'>
      <section className='container-size relative h-full'>
        <h1 
        className='text-[2rem] sm:text-[3rem] md:text-[4rem] text-white font-semibold text-center pt-[10rem] md:pt-[9rem] pr-[2%]'
        >
          Pipe Solution Leader
        </h1>
        <div className='flex justify-center pt-[4.5rem] md:pr-[4rem]'>
          <p className='text-md text-center w-full md:w-[35rem] lg:w-[25rem] text-white'>
            Trusted by 200+ companies for 1000s of projects spanning the continent
          </p>
        </div>
        <p className='text-white text-md pt-[15rem] w-full md:w-[30rem]'>
        To integrate global expertise and excellence in PE and PB pipes and deliver comprehensive solutions, prioritizing unparalleled value for our clients and partners. 
        </p>
      </section>
    </section>

    {/* section two */}
    <section className='bg-cover bg-center bg-[url("/images/about-img-2.jpg")] h-screen'>
      <section className='container-size relative h-full'>
          <p className='w-full md:w-[35rem] lg:w-[25rem] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-md text-center text-white'>
          For 20+ years we have prioritised unparalleled value for our clients and partners.
          </p>
        <p className='text-white text-md absolute top-[70%] right-[0%] translate-x-[-0%] translate-y-[-70%] md:w-[17rem]'>
        To deliver VIRTUE - in every aspect of our service. 
        </p>
      </section>
    </section>

    {/* section three */}
    <section className='bg-cover bg-center bg-[url("/images/about-img-3.jpg")] h-screen'>
      <section className='container-size relative h-full'>
          <div className='absolute top-[40%] right-[0%] translate-x-[0%] translate-y-[-40%]'>
            <h4 className='text-white text-[2rem] md:text-[3rem] font-semibold leading-10'>
              <span className='text-[3rem] md:text-[5rem]'>V</span>alue
            </h4>
            <p className='text-white text-md md:w-[15rem]'>
              Efficient operations provide  solutions without compromising affordability or quality.
            </p>
          </div>
          <div className='absolute top-[70%] left-[0%] translate-x-[0%] translate-y-[-70%]'>
            <h4 className='text-white text-[2rem] md:text-[3rem] font-semibold leading-none'>
              <span className='text-[3rem] md:text-[5rem]'>I</span>nnovative <br />
              Solutions
            </h4>
            <p className='text-white text-md md:w-[15rem]'>
            Dedicated to evolving with industry trends, technologies, and client needs.
            </p>
          </div>
      </section>
    </section>
    <Footer />
    </>
    
  )
}

export default About
