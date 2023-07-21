import { ChevronDownIcon } from '@heroicons/react/20/solid'
import React from 'react'

function OutlinedButton({title, Icon,className, hideIcon}) {
  return (
    <div className={`px-4 p-1.5 sm2:py-1 sm2:px-2  sm:text-[0.55rem]  flex place-items-center font-semibold text-gray-500 cursor-pointer transition-all duration-500 ease-in-out hover:text-gray-50 hover:bg-primary-100 whitespace-nowrap gap-2 border-[1px] border-gray-700 rounded-full ${className}`}>
        {title} {!hideIcon && (Icon ? <Icon className="h-5 w-5"/> : <ChevronDownIcon className='h-5 w-5 '/>) }
    </div>
  )
}

export default OutlinedButton;