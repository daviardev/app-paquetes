import React from 'react'
import { NavLink } from 'react-router-dom'

import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/all'

import './styles.scss'

const Footer = () => {
    return <>
      <footer className="footer">
      <div className="footer__container">
        <div className="footer__section">
          <span className="footer__category">Sobre pqentrega</span>
          <NavLink to="/">Promociones</NavLink>
          <NavLink to="/">Nuestra empresa</NavLink>
          <NavLink to="/">Trabaja con nosotros</NavLink>
          <NavLink to="/">Contrato pqentrega</NavLink>
          <NavLink to="/">Protección de datos personales</NavLink>
        </div>
        <div className="footer__section">
          <span className="footer__category">Links de interés</span>
          <NavLink to="/">Noticias</NavLink>
          <NavLink to="/">Entregas rápidas</NavLink>
          <NavLink to="/">Forma parte</NavLink>
          <NavLink to='/'>Puntos físicos</NavLink>
        </div>
        <div className="footer__section">
          <span className="footer__category">Centro de ayuda</span>
          <NavLink to="/">Servicio al cliente</NavLink>
          <NavLink to="/">PQR's</NavLink>
          <NavLink to="/">Contrato</NavLink>
          <NavLink to="/">Contacto</NavLink>
          <NavLink to="/">Nuestra red</NavLink>
        </div>
        <div className="footer__section social-media">
          <span className="footer__category">Siguenos en</span>
          <div className="social-media__container">
            <NavLink to="/"><FaFacebookF size="18px" /></NavLink>
            <NavLink to="/"><FaTwitter size="18px" /></NavLink>
            <NavLink to="/"><FaYoutube size="18px" /></NavLink>
            <NavLink to="/"><FaInstagram size="18px" /></NavLink>
          </div>
        </div>
      </div>
    </footer>
    </>
}

export default Footer