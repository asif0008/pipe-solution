import { useState } from "react";


const Map = () => {
    const [googleMap, setGoogleMap] = useState('office');

  const handleMap = (mapType) => {
    setGoogleMap(mapType)
  }

  return (
    <div className='mt-5'>
                <div className='flex items-center'>
                  <span className="bg-white rounded-tr-md">
                    <button 
                    className={`px-3 py-[2px] w-[100px] text-left rounded-tr-md ${googleMap === 'office' ? 'bg-primary text-white' : 'bg-white text-primary'}`}
                    onClick={() => handleMap('office')}
                    >Office
                    </button>
                    <button 
                    className={`px-3 py-[2px] w-[100px] text-left rounded-tr-md ${googleMap === 'factory' ? 'bg-primary text-white' : 'bg-white text-primary'}`}
                    onClick={() => handleMap('factory')}
                    >Factory
                    </button>
                  </span>
                </div>
                {googleMap === 'office' ? (
                  <>
                  <div className='py-6 px-10 bg-white'>
                    <div className='flex flex-col items-center'>
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.770158783826!2d100.52477797993372!3d13.7323605522547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29f18734f020d%3A0xd47e178914055248!2sThanon%20Rama%20IV%2C%20Krung%20Thep%20Maha%20Nakhon%2010500%2C%20Thailand!5e0!3m2!1sen!2s!4v1707939428721!5m2!1sen!2s" width="100%" height="305" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                      <p className='text-lg text-primary mt-3 w-[70%] text-center'>
                      496/6 Soi Jareonkij, Rama IV Rd.,Bangruk, Bangkok 10500
                      </p>
                    </div>
                  </div>
                  </>
                ): googleMap === 'factory' ? (
                  <>
                  <div className='py-6 px-10 bg-white'>
                    <div className='flex flex-col items-center'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.772064747593!2d100.52508357993366!3d13.73224525225504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29f18734f020d%3A0xd47e178914055248!2sThanon%20Rama%20IV%2C%20Khet%20Bang%20Rak%2C%20Krung%20Thep%20Maha%20Nakhon%2C%20Thailand!5e0!3m2!1sen!2s!4v1707939832867!5m2!1sen!2s" width="100%" height="276" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                      <p className='text-lg text-primary mt-3 text-center'>
                      496/6 Soi Jareonkij, Rama IV Rd., Mahaphuttharam Sub-district, Bangruk District, Bangko
                      </p>
                    </div>
                  </div>
                  </>
                ) : null}
              </div>
  )
}

export default Map
