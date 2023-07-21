import { ChevronDownIcon } from '@heroicons/react/20/solid'
import React from 'react'

function OutlinedButton({title, Icon,className, hideIcon}) {
  return (
    <div className={` flex place-items-center font-semibold text-gray-500 cursor-pointer transition-all duration-500 ease-in-out hover:text-gray-50 hover:bg-primary-100 whitespace-nowrap gap-2 border-[1px] border-gray-700 rounded-full ${className}`}>
        {title} {!hideIcon && (Icon ? <Icon className="h-5 w-5"/> : <ChevronDownIcon className='h-5 w-5 '/>) }
    </div>
  )
}

export default OutlinedButton;