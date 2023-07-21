'use client'

import React, { useState } from 'react'
import { FiHeart } from 'react-icons/fi'
import Rating from '../rating/Rating'
import Image from 'next/image'
import OutlinedButton from '../buttons/OutlinedButton'

function ProductsCard({title, image, price, rating, ratingNum, description,}) {

    const [like, setLike] = useState(false);

  return (
    <div className='w-full flex flex-col sm2:gap-1 gap-3 cursor-pointer'>

    <div className='w-full mdh:h-[16rem] smh:h-[10rem] smh2:h-[7rem] h-[18rem] xl:h-[20rem] lg:h-[16rem] bg-[#F5F6F6] flex place-content-center rounded-lg p-8 overflow-hidden relative'>

        <Image src={image} width={500} height={500} alt={title} className="h-full w-auto hover:scale-125 transition-all ease-in-out duration-500"/>

        <button className={`rounded-full absolute top-4 right-4  ${like?"bg-red-500 text-white":"bg-white text-gray-500"} hover:bg-red-200 transition-all duration-300 ease-in-out p-2`}
        onClick={e => {setLike(!like)}}>

            <FiHeart className=' sm2:h-4 sm2:w-4 xs:h-2 xs:w-2  h-6 w-6 '/>

        </button>

    </div>

    <div className='flex place-content-between text-gray-700'>
    <p className='font-bold  smh2:text-xs lg:text-base lg:line-clamp-2 sm2:line-clamp-3'> {title} </p>
    <p className='smh2:ml-1 ml-2 font-bold smh2:text-xs text-base lg:text-lg'> <sup>$</sup>{price.toString()?.split(".")[0]}<sup>.{price.toString()?.split(".")[1]}</sup> </p>
    </div>

    <p className=' sm2:text-[0.6rem] text-sm text-gray-500 line-clamp-1'> {description} </p>


    <div className='flex flex-cols place-items-center '>
    <Rating rating={rating}/>
    <sup className='text-gray-600 sm2:text-[0.54rem] text-xs'> ({ratingNum}) </sup>
    </div>

    <OutlinedButton title="Add to Cart" className="w-fit" hideIcon={true} />

    </div>
  )
}

export default ProductsCard