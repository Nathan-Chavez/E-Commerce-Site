import React from 'react';
import '../styles/NavBar.css';
import Logo from '../assets/logo.svg'

function NavBar() {
  return (
    <div className='navBar'>

      <img
        className='navBar_logo'
        src= {Logo}
        alt= 'test'
      />

      <div className='naveBar_search'>
        <input className='navBar_searchInput'
        type="text"
        />
        {/*<SearchIcon className="header__searchIcon" />*/}
      </div>

      <div className='navBar_nav'>
        <div className='navBar_option'>
          <span className="header__optionLineOne">Hello Guest</span>
          <span className="header__optionLineTwo">Sign In</span>
        </div>
      </div>
    </div>
  )
}

export default NavBar

