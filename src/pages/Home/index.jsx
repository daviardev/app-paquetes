import React from 'react'

import { Card } from '../../utils/import'
import { useAuth } from '../../context/AuthProvider'

import './styles.scss'

const Home = () => {
    const { user } = useAuth()
    console.log(user)
    return <>
    <div className="home__container">
        <div className="card__content">
            <div className="card__line" />
            <h1 className='card__title'>pqentrega</h1>
            <p className='card__p'>La distancia mas corta entre usted y sus paquetes no es una linea recta, es PQENTREGA.</p>
            <div className="search__container">
                <p>Consultar envío</p>
                <input type="text" placeholder='Ingresa el # de envío' required />
                    <button>
                        >
                    </button>
            </div>
        </div>
        <div className='img'/>
        <br /> <br />
        <h2 className='title'>Conoce nuestros servicios</h2>
        <Card
            title='Soluciones digitales'
            text='Entregas electrónicas, SMS, email masivo y más para publicidad, legales y otros.'
        />
        <Card
            title='Soluciones de Transporte y Entrega'
            text='Recogemos en tu puerta y entregamos en el tiempo que requieras.'
        />
        <Card
            title='Soluciones de Logística'
            text='Optimizamos tu logística para campañas y tu almacenamiento.'
        />
    </div>
    </>
}

export default Home