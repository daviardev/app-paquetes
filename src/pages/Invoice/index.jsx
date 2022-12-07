import React, { useState, useEffect } from 'react'

import { db } from '../../services/client'
import { collection, orderBy, onSnapshot, query } from 'firebase/firestore'

import './styles.scss'

const Invoice = () => {
    const [get, setGet] = useState([])

    const today = new Date()

    const now = today.toLocaleDateString()

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
    return <>
        <div className='container'>
            <header>Factura</header>
            <form>
                {
                    get.map(data => (
                        <div className='form first'>
                            <div className='details personal'>
                                <div key={data.id} className="fields">
                                    
                                    <div className='input-field'>
                                        <strong>Número de envío</strong>
                                        <p>{data.id}</p>
                                    </div>

                                    <div className='input-field'>
                                        <strong>Cliente</strong>
                                        <p>{data.nombre_cliente}</p>
                                    </div>

                                    <div className='input-field'>
                                        <strong>Fecha de envío</strong>
                                        <p>{now}</p>
                                    </div>

                                    <div className='input-field'>
                                        <strong>Tipo de factura</strong>
                                        <select name='tipo_factura' required>
                                            <option disabled selected>Seleccione una opción</option>
                                            <option value='Contado'>Contado</option>
                                            <option value='Linea'>Línea</option>
                                        </select>
                                    </div>

                                    <div className="input-field">
                                        <strong>Número de documento</strong>
                                        <p>{data.cc_cliente}</p>
                                    </div>
                                </div>
                            </div>
                            <center>
                                <button><span className='btnText'>Realizar pago</span></button>
                            </center>
                        </div>
                    ))
                }
            </form>
        </div>
    </>
}

export default Invoice