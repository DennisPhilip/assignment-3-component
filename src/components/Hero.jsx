import React from 'react'
import gsap from 'gsap'
import image1 from './sj.jpg'

const Hero = () => {
gsap.to('.t1', {duration: 4, x:100,repeat:1})
  return (
    <div className='relative h-screen'>
      <div className=' inset-0 flex flex-row'>
        <img className='w-96'
          src={image1}
          alt='bg-image' />
          <h1 className='absolute shadow-xl shadow-orange-400 font-mono text-white w-96 bg-transparent '>Steve Jobs</h1>
      </div>



    </div>
  )
}

export default Hero