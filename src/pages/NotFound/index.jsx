import React from 'react'

import { NavLink } from 'react-router-dom'

import './styles.scss'

const NotFound = () => {
    return <>
       <div className="frem">
        <p>404</p>
        <h2>Parece que estás perdido</h2>
        <h5>La página a la que intenta acceder, no está disponible</h5>
        <NavLink to="/">Ir al inicio</NavLink>
    </div>
    </>
}

export default NotFound