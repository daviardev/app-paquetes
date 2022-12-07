import React from 'react'
// Partners
import andrea from '../../assets/partners/andrea.jpeg'
import carlos from '../../assets/partners/carlos.jpeg'
import jerson from '../../assets/partners/jerson.jpg'
import lina from '../../assets/partners/lina.jfif'
import sarai from '../../assets/partners/sarai.jfif'

import './styles.scss'

const AboutUs = () => {
    return <>
        <div className='container__items'>
            <h1 className='title'>Colaboradores</h1>

            <div className='container__images'>

                <div className='content_img'>
                    <img src={sarai} alt='' />
                    <h3 className='name'>Sarai Mercado</h3>
                    <p>Documentación</p>
                </div>

                <div className='content_img'>
                    <img src={jerson} alt='' />
                    <h3 className='name'>Jerson Silva</h3>
                    <p>Dev FullStack</p>
                </div>

                <div className='content_img'>
                    <img src={lina} alt='' />
                    <h3 className='name'>Lina Martinez</h3>
                    <p>Dev Front-End</p>
                </div>

                <div className='content_img'>
                    <img src={carlos} alt='' />
                    <h3 className='name'>Carlos Muñoz</h3>
                    <p>Dev Back-End</p>
                </div>

                <div className='content_img'>
                    <img src={andrea} alt='' />
                    <h3 className='name'>Paula Gomez</h3>
                    <p>Ciencia de datos</p>
                </div>

            </div>
        </div>
    </>
}

export default AboutUs