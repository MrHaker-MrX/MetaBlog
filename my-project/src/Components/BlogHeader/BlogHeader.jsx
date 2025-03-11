import React from 'react'

import BgImg from './assets/BgImg.svg'


function BlogHeader() {
  return (
    <div className='flex flex-col items-center gap-12 mt-10'>
      <div className="flex flex-col items-center">
        <p className='text-[30px] font-bold'>Page Title</p>
        <p className='text-[16px] text-[#696a75] font-normal'>Home | Link One</p>
      </div>
      <img src={BgImg} alt="" />
    </div>
  )
}

export default BlogHeader
