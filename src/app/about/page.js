import Header from '../components/Header'
import Footer from '../components/Footer'
// import Image from 'next/image'

const About = () => {
  return (
    <>
    <Header />
    <section className='bg-cover bg-center bg-[url("/images/about-img-1.jpg")] h-screen'>
      <section className='container-size relative h-full'>
        <h1 
        className='text-[2rem] sm:text-[3rem] md:text-[4rem] text-white font-semibold absolute top-[18%] left-[20%] translate-y-[0%]
        translate-x-[5%]'
        >
          Pipe Solution Leader
        </h1>
        <p className='text-md text-center w-full md:w-[25%] text-white absolute top-[40%] left-[28%] translate-y-[55%] translate-x-[28%]'>
        Trusted by 200+ companies for 1000s of projects spanning the continent
        </p>
      </section>
      {/* <Image src="" width={100} height={100} /> */}
    </section>
    <Footer />
    </>
    
  )
}

export default About
