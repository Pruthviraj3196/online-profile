import React from 'react'

const Morefiles = (Props) => {
  return (
    <div>
        <div>
           <img src={Props.src}></img>
           <p>{Props.heading}</p>
           <h3>{Props.mainhead}</h3>
           <p> {Props.para} </p>
        </div>
    </div>
  )
}
export default Morefiles;