import React from 'react'
import BlogHeader from '../../Components/BlogHeader/BlogHeader'
import SectionCards from '../../Components/SectionCards/SectionCards'

function Blog() {
  return (
    <div>
      <BlogHeader />
      <SectionCards hideFirstAds={true} text={true} />
    </div>
  )
}

export default Blog
