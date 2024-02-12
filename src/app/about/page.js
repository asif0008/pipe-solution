import Header from '../components/Header'
import Footer from '../components/Footer'
// import Image from 'next/image'

const About = () => {
  return (
    <>
    <Header />
    <section className='bg-cover bg-center bg-[url("/images/about-img-1.jpg")] h-screen'>
      <section className='container-size relative'>
        <h1 
        className='text-[2rem] sm:text-[3rem] md:text-[4rem] text-white font-medium'
        >
          Pipe Solution Leader
        </h1>
      </section>
      {/* <Image src="" width={100} height={100} /> */}
    </section>
    <Footer />
    </>
    
  )
}

export default About
