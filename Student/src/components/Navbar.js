import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };
  

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          Thesis Management System
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/thesis'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Thesis <i className='fas fa-caret-down' />
            </Link>
            {{onMouseEnter}&& dropdown && <Dropdown />}
          </li>
          <li className='nav-item'>
            <Link
              to='/courses'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Courses
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/progress-report'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Progress Report
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/profile'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              <img src="https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png" alt="" style={{
                width:"40px",
                height:"30px",
                borderRadius:"20px"
            }} />
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
