import React from 'react'
import { Link } from 'react-router-dom'

import { WiDirectionRight } from 'react-icons/wi'

import './styles.scss'

const Home = () => {
    return <>
    <div className="home__container">
        <div className="card__content">
            <div className="card__line" />
            <p className='card__p'>La distancia mas corta entre usted y sus paquetes no es una linea recta, es PQENTREGA.</p>
            <div className="search__container">
                <p>Consultar envío</p>
                <input type="text" placeholder=' Guia'/>
                <Link to='/envio'>
                    <button>
                        <WiDirectionRight className='icon' />
                    </button>
                </Link>
            </div>
        </div>
        <div className='img'/>
    </div>
    </>
}

export default Home