import React, { useEffect, useState } from 'react'

import { db } from '../../services/client'
import { collection, orderBy, onSnapshot, query } from 'firebase/firestore'

const Detail = () => {
    const [get, setGet] = useState([])

    useEffect(() => {
        const getPackage = async () => {
            try {
                const collectionRef = collection(db, 'envios')
                const order = query(collectionRef, orderBy('createdAt', 'asc'))

                const unSub = onSnapshot(order, (snapshot) => {
                    setGet(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
                })
                return unSub
            } catch (error) {
                console.error(error)
            }
        }
        getPackage()
    }, [get])
    return (
        <div className='container'>
            <header>DETALLES</header>
            <form>
                {
                    get.map(data => (
                        <div className='form first'>
                            <div className='details personal'>
                                <strong className='title'>Remitente / Origen</strong>
                                <h1>Guia #3218334</h1>
                                <div className='fields'>
                                    <div className='input-field'>
                                        <strong>Ciudad de recogida</strong>
                                        <p>{data.ciudad_cliente}</p>
                                    </div>

                                    <div className='input-field'>
                                        <strong>Ciudad de destino</strong>
                                        <p>{data.ciudad_recibe}</p>
                                    </div>

                                    <div className='input-field'>
                                        <strong>Cédula de contacto</strong>
                                        <p>{data.cc_cliente}</p>
                                    </div>

                                    <div className='input-field'>
                                        <strong htmlFor='typePackage'>Fecha de entrega</strong>
                                        <p>Hoy</p>
                                    </div>

                                    <div className="input-field">
                                        <strong>Número de contacto</strong>
                                        <p>{data.telefono_cliente}</p>
                                    </div>

                                    <div className='input-field'>
                                        <strong>Nombre contacto</strong>
                                        <p>{data.nombre_cliente}</p>
                                    </div>

                                    <div className='input-field'>
                                        <strong>Dirección</strong>
                                        <p>{data.direccion_cliente}</p>
                                    </div>

                                    <div className='input-field'>
                                        <strong>Tipo de paquete</strong>
                                        <p>{data.paquete}</p>
                                    </div>
                                </div>
                            </div>

                            <div className='details ID'>
                                <strong className='title'>Destinatario / Destino</strong>

                                <div className='fields'>
                                    <div className='input-field'>
                                        <strong>Ciudad de recogida</strong>
                                        <p>{data.ciudad_cliente}</p>
                                    </div>

                                    <div className='input-field'>
                                        <strong>Ciudad de destino</strong>
                                        <p>{data.ciudad_recibe}</p>
                                    </div>

                                    <div className='input-field'>
                                        <strong>Cédula de contacto</strong>
                                        <p>{data.cc_recibe}</p>
                                    </div>

                                    <div className='input-field'>
                                        <strong>Fecha de entrega</strong>
                                        <p>Hoy</p>
                                    </div>

                                    <div className="input-field">
                                        <strong>Número de contacto</strong>
                                        <p>{data.telefono_recibe}</p>
                                    </div>

                                    <div className='input-field'>
                                        <strong>Nombre contacto</strong>
                                        <p>{data.nombre_recibe}</p>
                                    </div>

                                    <div className='input-field'>
                                        <strong>Dirección</strong>
                                        <p>{data.direccion_recibe}</p>
                                    </div>

                                    <div className='input-field'>
                                        <strong>Tipo de paquete</strong>
                                        <p>{data.paquete}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </form>
        </div>
    )
}

export default Detail