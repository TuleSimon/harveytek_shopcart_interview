

import { ChevronDownIcon } from '@heroicons/react/20/solid'
import React from 'react'

function FilledChips({title, Icon, className}) {
  return (
    <div className={`px-4 p-2 xs:text-sm xs:py-1 xs:px-2 flex place-items-center font-bold text-gray-600 whitespace-nowrap gap-2 bg-gray-100 rounded-full ${className}`} >
        {title} {Icon ? <Icon className="h-4 w-4"/> : <ChevronDownIcon className='h-5 w-5 '/> }
    </div>
  )
}

export default FilledChips;