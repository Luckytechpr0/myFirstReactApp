import React from 'react'
const Header = () => {
  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <a className='navbar-brand' href='#'>
          Lucky Tech Pro
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item active'>
              <a className='nav-link' href='#'>
                Home
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                About Us
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                Services
              </a>
            </li>

            <li className='nav-item'>
              <a className='nav-link' href='#'>
                Contact Us
              </a>
            </li>

            <li className='nav-item'>
              <a className='nav-link' href='#'>
                Policy
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}
export default Header
