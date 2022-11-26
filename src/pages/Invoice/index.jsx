import React, { useState } from 'react'
import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'

import { db } from '../../services/client'
import { collection, getDocs } from 'firebase/firestore'

import './styles.scss'

const Invoice = () => {
    const [get, setGet] = useState([])

    useEffect(() => {
        const getPackage = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'envios'))
                const docs = []
                querySnapshot.forEach((doc) => {
                    docs.push({ ...doc.data(), id: doc.id })
                })
                setGet(docs)
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
                <div className='form first'>
                    <div className='details personal'>
                        {
                            get.map(data => (
                                <div key={data.id} className="fields">
                                    <div className='input-field'>
                                        <strong>Número de envío</strong>
                                        <p>#2409202201</p>
                                    </div>

                                    <div className='input-field'>
                                        <strong>Cliente</strong>
                                        <p>{data.nombre_cliente}</p>
                                    </div>

                                    <div className='input-field'>
                                        <strong>Fecha de envío</strong>
                                        <p>Hoy</p>
                                    </div>

                                    <div className='input-field'>
                                        <strong>Fecha de entrega</strong>
                                        <p>2 días</p>
                                    </div>

                                    <div className='input-field'>
                                        <strong>Número de factura</strong>
                                        <p>#099983242</p>
                                    </div>

                                    <div className='input-field'>
                                        <strong>Tipo de factura</strong>
                                        <select required>
                                            <option disabled selected>Seleccione una opción</option>
                                            <option value='contado'>Contado</option>
                                            <option value='linea'>Línea</option>
                                        </select>
                                    </div>

                                    <div className="input-field">
                                        <strong>Número de documento</strong>
                                        <p>{data.cc_cliente}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <center>
                        <NavLink to='/detalle'>
                            <button>
                                <span className='btnText'>Realizar pago</span>
                                <i className='uil uil-navigator'></i>
                            </button>
                        </NavLink>
                    </center>
                </div>
            </form>
        </div>
    </>
}

export default Invoice