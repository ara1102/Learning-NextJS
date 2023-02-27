import React from 'react'

type headingTextProps={
    title: string,
    subTitle: string
} 

const HeadingText = ({title, subTitle}:headingTextProps) => {
  return (
    <>
        <p className='text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-500 font-bold text-2xl sm:text-5xl md:text-6xl self-center sm:p-3'>{title}</p>
        <p className='text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-500 font-bold text-lg sm:text-2xl self-center'>{subTitle}</p>
    </>
    )
}

export default HeadingText