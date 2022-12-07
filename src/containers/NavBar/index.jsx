import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import './styles.scss'

const NavBar = () => {
    const [toggle, setToggle] = useState(false)
    return <>
      <header className='app-navbar'>
        <section className="navbar-container">
          <NavLink to='/' className="app-navbar-logo">
            <img src="/src/assets/favicon.svg" alt="logo del proyecto" />
            <span>pqentrega</span>
          </NavLink>
        <a href="#open" className='app-navbar-menu-btn' onClick={() => setToggle(!toggle)}>
          <span id='open-menu' className={`navbar-burguer ${toggle && 'navbar-burguer-anim'}`} />
        </a>
      <nav className={`nav-menu ${toggle && 'nav-toggle'}`}>
        <NavLink onClick={() => setToggle(false)} to='/'>Inicio</NavLink>
        <NavLink onClick={() => setToggle(false)} to='/envio'>Envio</NavLink>
        <NavLink onClick={() => setToggle(false)} to='/sobre-nosotros'>Sobre nosotros</NavLink>
        <NavLink onClick={() => setToggle(false)} to='/contacto'>Contacto</NavLink>
      </nav>
      </section>
    </header>
    </>
}

export default NavBar