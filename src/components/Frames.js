import React from 'react'

export const Frames = (Props) => {
  return (
    <div>
        <div>
            <h4>{Props.name}</h4>
            <p>{Props.social}</p>
            <img className='certiimg' src= {Props.src}></img>
        </div>
    </div>
  )
}
