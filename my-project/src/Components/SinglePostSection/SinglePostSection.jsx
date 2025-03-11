import React from 'react'
import LogoTechnology from '../LogoTechnology/LogoTechnology'
import Ads from '../SectionCards/Ads'
import ProfileImg from './assets/ProfileImg.svg'
import Image1 from './assets/Image1.svg'
import Image2 from './assets/Image2.svg'

function SinglePostSection() {
  return (
    <div className='w-full flex items-center justify-center py-8'>
      <div className="w-[800px] flex flex-col ">
        <div className="flex flex-col gap-3">
            <LogoTechnology bgColor='bg-[#4b6bfb]' textColor='text-[#fff]' />
            <p className='text-[38px] font-bold'>The Impact of Technology on the Workplace: How Technology is Changing</p>
            <div className="flex items-center gap-3">
                <img src={ProfileImg} alt="" />
                <p className='text-[14px] text-[#696a75] font-medium'>Tracey Wilson</p>
                <p className='text-[14px] text-[#696a75] font-normal'>August 20, 2022</p>
            </div>
        </div><br />
        <div className="flex flex-col gap-6">
            <img src={Image1} alt="" />
            <p className='text-[#3B3C4A] dark:text-[#BABABF] text-[20px]'>
              Traveling is an enriching experience that opens up new horizons, exposes us to different cultures, and creates memories that last a lifetime. However, traveling can also be stressful and overwhelming, especially if you don't plan and prepare adequately. In this blog article, we'll explore tips and tricks for a memorable journey and how to make the most of your travels.
              <br /> <br />
              One of the most rewarding aspects of traveling is immersing yourself in the local culture and customs. This includes trying local cuisine, attending cultural events and festivals, and interacting with locals. Learning a few phrases in the local language can also go a long way in making connections and showing respect.
            </p>
            <h3 className='text-[24px] font-bold'>Research Your Destination</h3>
            <p className='text-[#3B3C4A] dark:text-[#BABABF] text-[20px]'>
              Before embarking on your journey, take the time to research your destination. This includes understanding the local culture, customs, and laws, as well as identifying top attractions, restaurants, and accommodations. Doing so will help you navigate your destination with confidence and avoid any cultural faux pas.
                <br /><br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In hendrerit gravida rutrum quisque non tellus orci ac auctor. Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Viverra adipiscing at in tellus.
            </p>
            <h3 className='text-[24px] font-bold'>Plan Your Itinerary</h3>
            <p className='text-[#3B3C4A]  dark:text-[#BABABF] text-[20px]'>
              While it's essential to leave room for spontaneity and unexpected adventures, having a rough itinerary can help you make the most of your time and budget. Identify the must-see sights and experiences and prioritize them according to your interests and preferences. This will help you avoid overscheduling and ensure that you have time to relax and enjoy your journey.
              <br /><br />
              Vitae sapien pellentesque habitant morbi tristique. Luctus venenatis lectus magna fringilla. Nec ullamcorper sit amet risus nullam eget felis. Tincidunt arcu non sodales neque sodales ut etiam sit amet.
            </p>
            <div className="w-[800px] h-[128px] bg-[#f6f6f7] dark:bg-[#242535] text-[24px] flex items-center justify-center rounded-[12px]  border-l-4">
              “ Traveling can expose you to new environments and potential health <br /> risks, so it's crucial to take precautions to stay safe and healthy. ”
            </div><br />
        </div>
        
        <div className="flex flex-col gap-6 items-center">
            <img src={Image2} alt="" />
            <Ads />

            <div className="flex flex-col gap-4">
              <h3 className='text-[24px] font-bold'>Pack Lightly and Smartly</h3>
              <p className='text-[#3B3C4A] text-[20px] dark:text-[#BABABF]'>
                Packing can be a daunting task, but with some careful planning and smart choices, you can pack light and efficiently. Start by making a packing list and sticking to it, focusing on versatile and comfortable clothing that can be mixed and matched. Invest in quality luggage and packing organizers to maximize space and minimize wrinkles.
               </p>
              <h3 className='text-[24px] font-bold'>Stay Safe and Healthy</h3>
              <p className='text-[#3B3C4A] text-[20px] dark:text-[#BABABF]'>
                Traveling can expose you to new environments and potential health risks, so it's crucial to take precautions to stay safe and healthy. This includes researching any required vaccinations or medications, staying hydrated, washing your hands frequently, and using sunscreen and insect repellent. It's also essential to keep your valuables safe and secure and to be aware of your surroundings at all times.
              </p>
              <h3 className='text-[24px] font-bold'>Immerse Yourself in the Local Culture</h3>
              <p className='text-[#3B3C4A] text-[20px] dark:text-[#BABABF]'>
                One of the most rewarding aspects of traveling is immersing yourself in the local culture and customs. This includes trying local cuisine, attending cultural events and festivals, and interacting with locals. Learning a few phrases in the local language can also go a long way in making connections and showing respect.
              </p>
              <h3 className='text-[24px] font-bold'>Capture Memories</h3>
              <p className='text-[#3B3C4A] text-[20px] dark:text-[#BABABF]'>
                Finally, don't forget to capture memories of your journey. Whether it's through photographs, journaling, or souvenirs, preserving the moments and experiences of your travels can bring joy and nostalgia for years to come. However, it's also essential to be present in the moment and not let technology distract you from the beauty of your surroundings.
              </p>
              <h3 className='text-[24px] font-bold'>Conclusion:</h3>
              <p className='text-[#3B3C4A] text-[20px] dark:text-[#BABABF]'>
                Traveling is an art form that requires a blend of planning, preparation, and spontaneity. By following these tips and tricks, you can make the most of your journey and create memories that last a lifetime. So pack your bags, embrace the adventure, and enjoy the ride.
              </p>
            </div>

        </div>
      </div>
    </div>
  )
}

export default SinglePostSection
