import React from 'react'
import Ads from './Ads'
import image1 from './assets/Rectangle1.svg'
import image2 from './assets/Rectangle2.svg'
import image3 from './assets/Rectangle3.svg'
import image4 from './assets/Rectangle4.svg'
import image5 from './assets/Rectangle5.svg'
import image6 from './assets/Rectangle6.svg'
import image7 from './assets/Rectangle7.svg'
import image8 from './assets/Rectangle8.svg'
import image9 from './assets/Rectangle9.svg'


import img1 from './assets/Img1.svg'
import img2 from './assets/Img2.svg'
import img3 from './assets/Img3.svg'
import img4 from './assets/Img4.svg'
import img5 from './assets/Img5.svg'

import LogoTechnology from '../LogoTechnology/LogoTechnology'



const data= [
  {
    id: 1,
    image: image1,
    author: {
      avatar: img1,
      name: "Tracey Wilson",
      date: "August 20, 2022"
    },
  },
  {
    id: 2,
    image: image2,
    author: {
      avatar: img2,
      name: "Jason Francisco",
      date: "August 20, 2022"
    },
  },
  {
    id: 3,
    image: image3,
    author: {
      avatar: img3,
      name: "Elizabeth Slavin",
      date: "August 20, 2022"
    },
  },
  {
    id: 4,
    image: image4,
    author: {
      avatar: img4,
      name: "Ernie Smith",
      date: "August 20, 2022"
    },
  },
  {
    id: 5,
    image: image5,
    author: {
      avatar: img5,
      name: "Eric Smith",
      date: "August 20, 2022"
    },
  },
  {
    id: 6,
    image: image6,
    author: {
      avatar: img1,
      name: "Tracey Wilson",
      date: "August 20, 2022"
    },
  },
  {
    id: 7,
    image: image7,
    author: {
      avatar: img2,
      name: "Tracey Wilson",
      date: "August 20, 2022"
    },
  },
  {
    id: 8,
    image: image8,
    author: {
      avatar: img3,
      name: "Elizabeth Slavin",
      date: "August 20, 2022"
    },
  },
  {
    id: 9,
    image: image9,
    author: {
      avatar: img4,
      name: "Ernie Smith",
      date: "August 20, 2022"
    },
  }
]








function SectionCards({ hideFirstAds = false, hideSecondAds = false, text = false,view= false }) {
  return (
    <div className='w-full my-[100px]'>
      <div className="container mx-auto px-[165px] flex flex-col items-center gap-20">
        {!hideFirstAds && <Ads />}
        <div className="w-full flex flex-col gap-6">
          {!text && <h2 className='text-[24px] font-bold'>Latest Post</h2>}
          <div className="grid grid-cols-3 gap-5 ">
            {
              data.map((item) =>(
                <div key={item.id} className="w-[392px] h-[488px] border dark:border-[#242535] rounded-[12px] p-[16px] flex flex-col justify-around transform transition duration-700 hover:scale-105  sm:p-6  hover:shadow-xl" >
                  <div className="overflow-hidden rounded-2xl flex flex-grow">
                    <img className='transform transition duration-700 hover:scale-125 w-full' src={item.image} alt="" />
                  </div>
                  <div className="flex flex-col justify-around  h-[200px]">
                    <LogoTechnology bgColor='bg-[#f6f7ff]' textColor='text-[#4b6bfb]' darkBgColor='dark:bg-[#1c1e35]' darkTextColor='dark:text-[#4b6bfb]' />
                    <h2 className='text-[24px] font-semibold font-Work Sans'>The Impact of Technology on <br /> the Workplace: How <br /> Technology is Changing</h2>
                    <div className="flex items-center gap-3">
                      <img src={item.author.avatar} alt="" />
                      <p className='text-[16px] text-[#97989f] font-medium'>{item.author.name}</p>
                      <p className='text-[16px] text-[#97989f] font-medium'>{item.author.date}</p>
                    </div>
                  </div>
                </div>
              ))
            }
            {!view &&<div className="w-[142px] h-[48px] text-[16px] text-[#696A75] flex items-center justify-center font-medium rounded-[6px] border dark:border-[#303240] ml-[137%] mt-[20px] transform transition duration-700 hover:scale-105   hover:shadow-xl">View All Post</div>}
          </div>
        </div>
        {!hideSecondAds &&<Ads />}
      </div>
    </div>
  )
}

export default SectionCards
