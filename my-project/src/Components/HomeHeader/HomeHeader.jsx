import React from 'react'

import Image from './assets/Image.svg'
import ProfileImg from './assets/ProfileImg.svg'
import LogoTechnology from '../LogoTechnology/LogoTechnology'
function HomeHeader() {
  return (
    <div className='w-full flex justify-center items-center py-[20px]'>
      <div className="flex justify-center relative">
        <img src={Image} alt="" />
        <div className="w-[598px] h-[304px] bg-[#fff] dark:bg-[#181a2a] absolute flex flex-col  top-[360px] gap-3 left-[64px] rounded-[12px] p-[40px] shadow-md">
            <LogoTechnology bgColor='bg-[#4b6bfb]' textColor='text-[#fff]'/>
            <p className='text-[30px] font-semibold'>The Impact of Technology on the Workplace: How <br /> Technology is Changing</p>
            <div className="flex items-center gap-3">
                <img src={ProfileImg} alt="" />
                <p className='text-[16px] text-[#97989f] font-medium'>Jason Francisco</p>
                <p className='text-[16px] text-[#97989f] font-medium'>August 20, 2022</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default HomeHeader
