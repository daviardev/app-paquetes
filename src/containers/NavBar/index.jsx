import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

import Google from '../../components/Icons/Google'

import { loginGoogle } from '../../services/client'

import './styles.scss'

const NavBar = () => {
    const navigate = useNavigate()
    const [toggle, setToggle] = useState(false)

    const handleSubmit = e => {
      e.preventDefault()
      
      try {
        loginGoogle()
        navigate('/')
      } catch (err) {
        console.error(err)
      }
    }
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
        <NavLink onClick={() => setToggle(false)} to='/sobre nosotros'>Sobre nosotros</NavLink>
        <NavLink onClick={() => setToggle(false)} to='/contacto'>Contacto</NavLink>
        <button onClick={handleSubmit} id='googleAuth' className="btn btn-button">
          <Google width={12} height={12} />
            Ingresar
        </button>
      </nav>
      </section>
    </header>
    </>
}

export default NavBar