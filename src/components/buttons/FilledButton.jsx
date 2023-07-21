import { ChevronDownIcon } from '@heroicons/react/20/solid'
import React from 'react'

function FilledButton({title, Icon,className, hideIcon}) {
  return (
    <div className={` flex place-items-center font-semibold cursor-pointer transition-all duration-500 ease-in-out text-gray-50 bg-primary-100 hover:bg-[#333333] whitespace-nowrap gap-2 border-[1px] border-gray-700 rounded-full ${className}`}>
        {title} {!hideIcon && (Icon ? <Icon className="h-5 w-5"/> : <ChevronDownIcon className='h-5 w-5 '/>) }
    </div>
  )
}

export default FilledButton;