import React, { useState } from 'react'
import ImageText from './ImageText'
import HeadingText from './HeadingText'

const Hero = () => {
  return (
    <section>
      <div className="flex flex-wrap text-center gap-y-1 items-center">

        <div className="mx-2 flex-col pt-36 pb-20 px-5">

          {/* <HeadingText title='Home of Photographers' subTitle='Phlog is a place for people to promote their photography and appreciate other photography arts. To get started, you’ll need a Phlog account. It’s free to sign up, and you’ll get access to special content formats, custom analytics and more.'/> */}

          <h1 className='py-5 text-6xl font-semibold'>Home of Photographers</h1>
          <p className='py-5 font-semibold'>Phlog is a place for people to promote their photography and appreciate other photography arts. To get started, you’ll need a Phlog account. It’s free to sign up, and you’ll get access to special content formats, custom analytics and more.</p>

          <div className='flex flex-col flex-wrap sm:flex-row gap-2 items-center justify-center'>
            <button className='shadow-xl bg-gradient-to-r from-sky-500 to-indigo-500 px-5 py-2 justify-self-end w-48 rounded-3xl hover:text-gray-100 transition ease-in-out delay-100 mt-5'>
              <a href="form" className="font-semibold ">
                Create an Account
              </a>
            </button>

            <button className='shadow-xl bg-gradient-to-r from-sky-500 to-indigo-500 px-5 py-2 justify-self-end w-48 rounded-3xl hover:text-gray-100 transition ease-in-out delay-100 mt-5'>
              <a href="photos" className="font-semibold ">
                Gallery
              </a>
            </button>

          </div>

        </div>

        <ImageText
          text="Use Phlog Ads for marketing goals like awareness, consideration and conversions. Combine flexible formats with tailored targeting to launch successful campaigns"
          title="Grow your business with a free ads consultation"
          src="/GolfCart.JPG"
          order={1}
        />

        <ImageText
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ea soluta consequatur officiis in, ipsam quos voluptate, fuga quaerat, tempora possimus. Quasi, accusantium! Quas eveniet cumque quaerat, dolor maiores ducimus."
          title="Benefits from analytics customization"
          src="/Goal.jpg"
          order={2}
        />

        <ImageText
          text="3Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ea soluta consequatur officiis in, ipsam quos voluptate, fuga quaerat, tempora possimus. Quasi, accusantium! Quas eveniet cumque quaerat, dolor maiores ducimus."
          title="Benefits from analytics customization"
          src="/Punch.JPG"
          order={3}
        />

      </div>
    </section>
  )
}

export default Hero