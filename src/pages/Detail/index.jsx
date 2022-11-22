import React from 'react'

import { useAuthContext } from '../../context/AuthContext'

import './styles.scss'

const Detail = () => {

    const appContext = useAuthContext()
    console.log(appContext)
    const number = 192345236
    return <>
        <div className="detail__container">
            <section className="wrapper">
                <div className="clear" />
                <section className="detail__tabs">
                    <div className="detail__guide">
                        <h1>Guía # {number} </h1>
                    </div>
                </section>
            </section>
        </div>
    </>
}

export default Detail