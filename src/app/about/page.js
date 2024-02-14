import Header from '../components/Header'
import Footer from '../components/Footer'
import Image from 'next/image'
import Link from 'next/link'

const About = () => {
  return (
    <>
    <Header />
    {/* section one */}
    <section className='bg-cover bg-center bg-[url("/images/about-img-1.webp")] h-screen'>
      <section className='container-size relative h-full'>
        <h1 
        className='text-[2rem] sm:text-[3rem] md:text-[4rem] text-white font-semibold text-center absolute top-[17%] left-[50%] translate-x-[-50%] translate-y-[17%] w-full'
        >
          Pipe Solution Leader
        </h1>
        <div className='flex justify-center absolute top-[40%] left-[50%] translate-x-[-50%] translate-y-[40%]'>
          <p className='text-md text-center w-full md:w-[35rem] lg:w-[25rem] text-white'>
            Trusted by 200+ companies for 1000s of projects spanning the continent
          </p>
        </div>
        <p className='text-white text-md absolute top-[60%] left-[0%] translate-x-[-0%] translate-y-[60%] w-full md:w-[30rem]'>
        To integrate global expertise and excellence in PE and PB pipes and deliver comprehensive solutions, prioritizing unparalleled value for our clients and partners. 
        </p>
      </section>
    </section>

    {/* section two */}
    <section className='bg-cover bg-center bg-[url("/images/about-img-2.webp")] h-screen'>
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
    <section className='bg-cover bg-center bg-no-repeat bg-[url("/images/about-img-3.webp")] h-screen'>
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

    {/* section four */}
    <section className='bg-cover bg-center bg-no-repeat bg-[url("/images/about-img-4.webp")] h-screen'>
      <section className='container-size relative h-full'>
          <div className='absolute top-[30%] left-[50%] translate-x-[-50%] translate-y-[-30%]'>
            <h4 className='text-white text-[2rem] md:text-[3rem] font-semibold' style={{lineHeight:'42px'}}>
              <span className='text-[3rem] md:text-[5rem]'>R</span>eliable <br />
              Timeliness
            </h4>
            <p className='text-white text-md md:w-[15rem]'>
            Spotless record of reliability and  on-time delivery, ensuring your projects progress seamlessly.
            </p>
          </div>
          <div className='absolute top-[70%] right-[0%] translate-x-[0%] translate-y-[-70%]'>
            <h4 className='text-white text-[2rem] md:text-[3rem] font-semibold leading-10'>
              <span className='text-[3rem] md:text-[5rem]'>T</span>ailored <br />
              Services
            </h4>
            <p className='text-white text-md md:w-[15rem]'>
            Providing consulting and total solutions as your comprehensive piping partner.
            </p>
          </div>
      </section>
    </section>

    {/* section five */}
    <section className='bg-cover bg-center bg-no-repeat bg-[url("/images/about-img-5.webp")] h-screen'>
      <section className='container-size relative h-full'>
          <div className='absolute top-[30%] right-[0%] translate-x-[-0%] translate-y-[-30%]'>
            <h4 className='text-white text-[2rem] md:text-[3rem] font-semibold' style={{lineHeight:'42px'}}>
              <span className='text-[3rem] md:text-[5rem]'>U</span>nrivaled <br />
              Quality
            </h4>
            <p className='text-white text-md md:w-[15rem]'>
            Committed to industry leading standards, ensuring utmost quality and reliability.
            </p>
          </div>
          <div className='absolute top-[80%] left-[0%] translate-x-[0%] translate-y-[-70%]'>
            <h4 className='text-white text-[2rem] md:text-[3rem] font-semibold leading-none'>
              <span className='text-[3rem] md:text-[5rem]'>E</span>xcellence 
            </h4>
            <p className='text-white text-md md:w-[15rem]'>
            Directors with leading industry experiences drive excellence, delivering unparalleled solutions and value.
            </p>
          </div>
      </section>
    </section>

    {/* section six */}
    <section className='bg-cover bg-center bg-no-repeat bg-[url("/images/about-img-6.webp")] h-screen'>
      <section className='container-size relative h-full'>
          <div className='flex items-center flex-col gap-2 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            <Image src="/images/white-logo.png" width={70} height={70}></Image>
            <p className='text-white text-md text-center md:w-[15rem]'>
              We are poised to deliver VIRTUE as your trusted piping solution provider.
            </p>
            <div className='flex justify-end md:w-[15rem]'>
              <Link href="/contact" className='flex items-center gap-2 text-white text-sm font-semibold'>
                Contact
                <svg className='animate-bounce-x-axis' xmlns="http://www.w3.org/2000/svg" width="24" height="12" viewBox="0 0 24 12" fill="none">
                  <path d="M1 5.29834C0.585786 5.29834 0.25 5.63413 0.25 6.04834C0.25 6.46255 0.585786 6.79834 1 6.79834L1 5.29834ZM23.5303 6.57867C23.8232 6.28577 23.8232 5.8109 23.5303 5.51801L18.7574 0.745037C18.4645 0.452144 17.9896 0.452144 17.6967 0.745038C17.4038 1.03793 17.4038 1.5128 17.6967 1.8057L21.9393 6.04834L17.6967 10.291C17.4038 10.5839 17.4038 11.0587 17.6967 11.3516C17.9896 11.6445 18.4645 11.6445 18.7574 11.3516L23.5303 6.57867ZM1 6.79834L23 6.79834L23 5.29834L1 5.29834L1 6.79834Z" fill="white"/>
                </svg>
              </Link>
            </div>
          </div>
      </section>
    </section>
    <Footer />
    </>
    
  )
}

export default About
