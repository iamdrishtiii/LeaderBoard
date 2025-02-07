import React, { useState } from 'react'


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const navMobileStyles = {
    display: isMenuOpen ? 'block' : 'none',
    position: 'absolute',
    top: '100px',
    left:'40px',
    backgroundColor: 'oklch(0.379 0.146 265.522)',
    padding:'4px',
    margin:'10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    flexDirection: 'column',
  };

    return (
        <div className='lg:flex lg:flex-wrap nav-wrapper gap-24 bg-blue-900 h-30 lg:h-24 text-white py-3'>
            <div className=' text-4xl font-bold mt-2 pl-4 md:pr-4'>Leader Board</div>

            <button onClick={toggleMenu} >
              <p  className=' text-4xl font-bold mt-2  px-4 lg:hidden'>=</p>  
             <ul style={navMobileStyles}> <li ><a href="/dashboard">Home</a></li>
                <li><a href="/score">Score</a></li>
                <li><a href="/popularplayer">Popular Player</a></li>
                <li><a href="/about-us">About us</a></li>
                <li><a href="/contact-us">Contact us</a></li></ul>
            </button>


            <div className='text-xl '><ul id="nav-mobile" className="lg:flex md:flex-row gap-4 pr-2 pb-4 sm:py-2 hidden">
                <li ><a href="/dashboard">Home</a></li>
                <li><a href="/score">Score</a></li>
                <li><a href="/popularplayer">Popular Player</a></li>
                <li><a href="/about-us">About us</a></li>
                <li><a href="/contact-us">Contact us</a></li>

            </ul> </div>
        </div>
    )
}

export default Navbar