import Image from 'next/image'
import React from 'react'

function CategoriesCard({title, image,className}) {
  return (
    <div className={`rounded-xl p-2 group py-6 cursor-pointer place-content-center w-full sm2:h-52 sm:h-48 xs:h-36 h-72 text-white flex relative overflow-hidden ${className}`}>

        <Image src={image} alt={title} className='w-full group-cursor-pointer group-hover:scale-125 transition-all duration-500 ease-in-out h-full  bg-cover absolute top-0 left-0 after:'
         width={400} height={400}  />

        <p className='text-white font-bold xs:text-xl text-2xl z-10 '> {title} </p>

    </div>
  )
}

export default CategoriesCard