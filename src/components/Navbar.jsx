import React from 'react'

export default function Navbar() {
  return (
    <div className='navbar'>
        <h3 className='title'>Currency Exchange App</h3>
        <i onClick={()=>document.body.classList.toggle('light_mode')} className='fas fa-moon' id='icon'></i>
    </div>
  )
}
