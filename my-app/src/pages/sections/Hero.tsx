import React, { useState } from 'react'

const Hero = () => {
  return (
    <section>
      <div className="grid grid-cols-2 text-center gap-y-1 items-center">

        <div className="mx-2 order-1 col-span-2 pt-36 pb-20 px-5">
          <h1 className='py-5 text-6xl font-semibold'>Home of Photographers</h1>
          <p className='py-5 font-semibold'>Phlog is a place for people to promote their photography and appreciate other photography arts. To get started, you’ll need a Phlog account. It’s free to sign up, and you’ll get access to special content formats, custom analytics and more.</p>
          <button className=' font-semibold shadow-xl bg-gradient-to-r from-sky-500 to-indigo-500 mt-5 px-5 py-2 bg-blue-500 justify-self-end w-48 rounded-3xl hover:text-gray-100 transition ease-in-out delay-100'>Create a Business Account</button>
        </div>

        <div className="order-2 text-center col-span-2 md:col-span-1 py-5">
          <img className="" src="GolfCart.JPG" alt="" />
        </div>

        <div className='order-3 col-span-2 md:col-span-1 px-14 py-36'>
          <h2 className='bg-gradient-to-r from-sky-500 to-indigo-500 text-transparent bg-clip-text text-5xl md:text-4xl lg:text-6xl font-semibold mb-5'>Grow your business with a free ads consultation</h2>
          <p className='text-xl lg:text-3xl'>Use Phlog Ads for marketing goals like awareness, consideration and conversions. Combine flexible formats with tailored targeting to launch successful campaigns</p>
        </div>

        <div className='order-5 md:order-4 col-span-2 md:col-span-1 px-14 py-36'>
          <h2 className='bg-gradient-to-r from-sky-500 to-indigo-500 text-transparent bg-clip-text text-5xl md:text-4xl lg:text-6xl font-semibold mb-5'>Benefits from analytics customization</h2>
          <p className='text-xl lg:text-3xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ea soluta consequatur officiis in, ipsam quos voluptate, fuga quaerat, tempora possimus. Quasi, accusantium! Quas eveniet cumque quaerat, dolor maiores ducimus.</p>
        </div>

        <div className='order-4 md:order-5 py-5 col-span-2 md:col-span-1'>
          <img src="Goal.jpg" alt="" />
        </div>

      </div>
    </section>
  )
}

export default Hero