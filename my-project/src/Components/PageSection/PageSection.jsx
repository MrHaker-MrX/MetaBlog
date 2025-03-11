import React from 'react'
import SectionCards from '../SectionCards/SectionCards'
import Profile from './assets/Profile.svg'
import abutton1 from './assets/a-button1.svg'
import abutton2 from './assets/a-button2.svg'
import abutton3 from './assets/a-button3.svg'
import abutton4 from './assets/a-button4.svg'

function PageSection() {
  return (
    <div className='flex flex-col items-center'>
        <div className="w-[1218px] h-[344px] dark:bg-[#242535] bg-[#F6F6F7] flex flex-col items-center justify-center gap-7">
            <div className="flex items-center gap-5">
                <img src={Profile} alt="" />
                <div className="">
                    <p className='text-[20px] font-medium'>Jonathan Doe</p>
                    <p className='text-[14px] text-[#696A75]'>Collaborator & Editor</p>
                </div>
            </div>
            <div className="w-[670px]">
                <p className='text-[#3B3C4A] text-center'>Meet Jonathan Doe, a passionate writer and blogger with a love for <br /> technology and travel. Jonathan holds a degree in Computer Science and <br /> has spent years working in the tech industry, gaining a deep understanding <br /> of the impact technology has on our lives.</p>
            </div>
            <div className="flex gap-1">
                <img src={abutton1} alt="" />
                <img src={abutton2} alt="" />
                <img src={abutton3} alt="" />
                <img src={abutton4} alt="" />


            </div>
        </div>
        <SectionCards hideFirstAds ='true' hideSecondAds ='true' view='true' />
    </div>
  )
}

export default PageSection
