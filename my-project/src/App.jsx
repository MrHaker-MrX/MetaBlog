import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Page from './Pages/Page/Page'
import Blog from './Pages/Blog/Blog'
import SinglePost from './Pages/SinglePost/SinglePost'
import Contact from './Pages/Contact/Contact'
import Footer from './Components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=" bg-white text-black dark:bg-[#181a2a] dark:text-white">
      

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route path="single-post" element={<SinglePost />} />
        <Route path="page" element={<Page />} />
        <Route path="contact" element={<Contact />} />
        
      </Routes>

      <Footer />


    </div>


  )
}

export default App
