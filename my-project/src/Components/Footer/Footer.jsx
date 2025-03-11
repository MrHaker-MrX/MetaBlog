import React from 'react'
import logo2 from './assets/logo2.svg'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';function Footer() {
  return (
    <div className='w-full pt-[70px] dark:bg-[#141624] bg-[#f6f6f7]'>
      <div className="container mx-auto px-[165px] flex flex-col gap-16 ">
        <div className="flex justify-between">
          <div className=" w-[289px] h-[230px] flex flex-col justify-between">
            <p className='text-[18px] font-bold'>About</p>
            <p className='w-[250px] text-[14px] font-normal text-[#696a75] dark:text-[#bababf]'>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore <br /> et dolore magna aliqua. Ut enim <br /> ad minim veniam</p>
            <p className='text-[#3b3c4a] text-[16px] dark:text-[#bababf]'>
              <span className='text-[16px] font-semibold dark:text-[#fff]'>Email</span> : info@jstemplate.net <br />
              <span className='text-[16px] font-semibold dark:text-[#fff]'>Phone</span> : 880 123 456 789  
            </p>
          </div>
          <div className=" h-[230px] flex flex-col justify-between">
            <p className='text-[18px] font-bold'>Quick Link</p>
            <ul className='flex flex-col gap-[8px] dark:text-[#bababf] text-[#3b3c4a]'>
              <li>Home</li>
              <li>About</li>
              <li>Blog</li>
              <li>Archived</li>
              <li>Author</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className=" h-[230px] flex flex-col justify-between">
            <p className='text-[18px]  font-bold'>Category</p>
            <ul className='flex flex-col gap-[8px] dark:text-[#bababf] text-[#3b3c4a]'>
              <li>Lifestyle</li>
              <li>Technology</li>
              <li>Travel</li>
              <li>Business</li>
              <li>Economy</li>
              <li>Sports</li>
            </ul>

          </div>
          <div className="w-[392px] h-[254px] rounded-[12px] dark:bg-[#242535] bg-[#fff] flex flex-col items-center justify-center gap-[20px]">
            <div className=" flex items-center flex-col">
              <p className='text-[20px] font-bold'>Weekly Newsletter</p>
              <p className='text-[#696A75] text-[16px]'>Get blog articles and offers via email</p>
            </div>
            <div className=" flex flex-col gap-3 ">
              <div className="relative">
                  <input
                      className="rounded-[10px] w-[320px] h-[48px]  p-[20px] outline-none border border-[#dcdddf]"
                      type="search"
                      placeholder="Your Email"
                  />
                  <EmailOutlinedIcon className="absolute  top-1/2 transform -translate-y-1/2 right-[20px] text-gray-500 w-5 h-5" />
              </div>
              <div className="w-[320px] h-[48px] flex items-center justify-center bg-[#4b6bfb] rounded-[10px]">Subscribe</div>
            </div>
          </div>

        </div>
        <div className="flex justify-between py-8 items-center border-t">
          <img src={logo2} alt="" />

          <ul className='flex text-[16px] font-normal gap-6 dark:text-[#bababf]'>
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
