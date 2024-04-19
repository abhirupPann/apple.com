import React from 'react'

function Home() {
  return (
    <div className='pt-[8vh] bg-[#1d1c1f] '>
        <div className='flex items-center justify-center pb-[2vh]'>
           <p className='text-white tracking-tight cursor-pointer'>Join us this Earth Day by recycling your Apple devices. <span className=' text-[#2b96fa] font-extralight hover:underline'>Recycle for free</span></p>
        </div>
        <div className='mb-[1vh]'>
        <video src="https://www.apple.com/105/media/us/home/2024/6478a4e9-322b-4f75-8024-cbacb632a0e4/anim/hero/xlarge.mp4" autoPlay loop ></video>
        </div>
      
    </div>
  )
}

export default Home
