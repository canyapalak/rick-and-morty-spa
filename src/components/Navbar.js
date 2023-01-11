import React from 'react'
import Pickle1 from './pickle-1.png'
import Pickle2 from './pickle-2.png'

function Navbar() {

  return (
    <div className='navbar'>
        <div><img src={Pickle1} alt="Pickle Rick 1" id="pickle-1"/></div>
        <div className = "title-search">
            <h2>RICK AND MORTY CARDS</h2>
            <input
              id="search-box"
              type="search"
              placeholder="Search a character"/>
        </div>
        <div><img src={Pickle2} alt="Pickle Rick 2" id="pickle-2"/></div>
    </div>
  )
}

export default Navbar