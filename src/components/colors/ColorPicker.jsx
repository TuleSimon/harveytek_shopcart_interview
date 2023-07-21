'use client'

import React, { useState } from 'react'

const colors = [
    {
      main: "#E3544C",
      secondary: "#F7CCC9",
    },
    {
      main: "#C5C5C4",
      secondary: "#3C3D3A",
    },
    {
      main: "#AFBFAB",
      secondary: "#E7ECE6",
    },
    {
      main: "#F2F2F2",
      secondary: "#D2D3D4",
    },
    {
      main: "#30506C",
      secondary: "#C8D1D9",
    },
  ];

function ColorPicker() {

    const [selected, setSelected] = useState(0);

  return (
    <div className="flex gap-4 mt-4">
    {colors.map((color, index) => (
        <div
          key={index}
          onClick={e=> setSelected(index)}
          className={`sm:w-8 sm:h-8 w-12 h-12 aspect-square border-2 cursor-pointer hover:scale-110 hover:shadow-md transition-all duration-500 ease-in ${(selected==index) ?"border-green-600 shadow-md":""} rounded-full grid grid-rows-2 overflow-hidden p-[0.2rem]`}
        >
        {console.log(color)}
          <div style={{backgroundColor:color.main}} className={`w-full h-full rounded-t-full`} />
          <div style={{backgroundColor:color.secondary}} className={` w-full h-full rounded-b-full`} />
        </div>
      ))}
          
    </div>
  )
}

export default ColorPicker