import { ChevronDownIcon } from '@heroicons/react/20/solid'
import React from 'react'

function OutlinedChips({title, Icon,className, hideIcon}) {
  return (
    <div className={`px-4 p-2 xs:py-1 xs:px-2 xs:text-sm flex place-items-center font-bold text-gray-600 whitespace-nowrap gap-2 border-2 border-gray-300 rounded-full ${className}`}>
        {title} {!hideIcon && (Icon ? <Icon className="h-5 w-5"/> : <ChevronDownIcon className='h-5 w-5 '/>) }
    </div>
  )
}

export default OutlinedChips;