import React, { useState } from 'react'

export const User = ({name}) => {
  const [count, setCount] =useState(0)

  return (
   
    <div className='user-card  '>
      <h1>count : {count}</h1>
      <button onClick={(()=>{
        setCount(count + 1)
      })}>count</button>
    <h2>Name : {name}</h2>
    <h2>Location : Delhi</h2>
    <h2>Contact : sejal@</h2>
    </div>
  )
}
