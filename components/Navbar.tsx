'use client'
import React, { useState, useEffect } from 'react'

const Navbar = () => {
  const [visible, setVisible] = useState(true);

  // Auto hide after 30 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 59000);

    return () => clearTimeout(timer); // cleanup
  }, []);

  return (
    <>
      {visible && 
        <div className='w-full bg-[#074842] text-white'>
          <div className='max-w-7xl mx-auto py-2.5 px-5 flex items-center justify-center'>
            
            {/* Center Content */}
            <div className='flex flex-col sm:flex-row items-center gap-3 text-center'>
            <p className='text-sm sm:text-[13px] lg:text-sm'>
              RocketSingh is looking for Business Partners in Nepal. 
            </p>

            <a href="/partnership">
              <button className='text-sm italic hover:bg-[#ebebeb] hover:text-[#074842] border border-[#ebebeb] px-2 py-1 rounded-md'>
                Apply Now
              </button>
            </a>
          </div>

          </div>
        </div>
      }
    </>
  )
}

export default Navbar