import React, { useState } from 'react'

const ColorPalette = ({changeBg}) => {
  const [showColors, setShowColors] = useState(false);

  return (
    <div>
      <i className="fa-solid fa-palette" title="choose background color" onClick={() => setShowColors(true)}></i>
      {
        showColors && <>
        <div onClick={() => setShowColors(false)}>
          <div>
            <span className='colors bg-white'></span>
            <span className='colors bg-orange'></span>
            <span className='colors bg-green'></span>
            <span className='colors bg-red'></span>
            <span className='colors bg-indigo'></span>
            <span className='colors bg-yellow'></span>
            <span className='colors bg-purple'></span>
          </div>
        </div>
        </>
      }
    </div>
  )
}

export default ColorPalette
