import React from 'react'

import './styles.scss'

const Card = ({ title, text }) => {
    return <>
        <div className="card__container">
            <div className="card">
                <a href="#">
                    <h3 className='title'>{title}</h3>
                    <p className='text'>{text}</p>
                </a>
            </div>
        </div>
    </>
}

export default Card