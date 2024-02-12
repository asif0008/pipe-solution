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
        className='text-[2rem] sm:text-[3rem] md:text-[4rem] text-white font-semibold text-center pt-[9rem] md:pt-[9rem] pr-[2%]'
        >
          Pipe Solution Leader
        </h1>
        <div className='flex justify-center pt-[4.5rem] md:pr-[4rem]'>
          <p className='text-md text-center w-full md:w-[35rem] lg:w-[25rem] text-white'>
            Trusted by 200+ companies for 1000s of projects spanning the continent
          </p>
        </div>
        <p className='text-white text-md pt-[4rem] md:pt-[15rem] w-full md:w-[30rem]'>
        To integrate global expertise and excellence in PE and PB pipes and deliver comprehensive solutions, prioritizing unparalleled value for our clients and partners. 
        </p>
      </section>
      {/* <Image src="" width={100} height={100} /> */}
    </section>

    {/* section two */}
    <Footer />
    </>
    
  )
}

export default About
