import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { sendPackage } from '../../services/client'

import './styles.scss'

const SendPackage = () => {
    const navigate = useNavigate()
    const [input, setInput] = useState({
        // Datos cliente
        paquete: '',
        cc_cliente: '',
        ciudad_cliente: '',
        nombre_cliente: '',
        telefono_cliente: '',
        direccion_cliente: '',
        // Datos recibe
        cc_recibe: '',
        pais_recibe: '',
        ciudad_recibe: '',
        nombre_recibe: '',
        telefono_recibe: '',
        direccion_recibe: ''
    })

    const handleChange = ({ target: { name, value } }) => {
        setInput({ ...input, [name]: value })
    }

    const handleSubmit = e => {
        e.preventDefault()
        sendPackage({
            // Datos cliente
            paquete: input.paquete,
            cc_cliente: input.cc_cliente,
            ciudad_cliente: input.ciudad_cliente,
            nombre_cliente: input.nombre_cliente,
            telefono_cliente: input.telefono_cliente,
            direccion_cliente: input.direccion_cliente,
            // Datos recibe
            cc_recibe: input.cc_recibe,
            pais_recibe: input.pais_recibe,
            ciudad_recibe: input.ciudad_recibe,
            nombre_recibe: input.nombre_recibe,
            telefono_recibe: input.telefono_recibe,
            direccion_recibe: input.direccion_recibe
        })
            .then(() => {
                navigate('/factura')
            }).catch((error) => {
                console.error(error)
            })
    }

    return (
        <div className='container'>
            <header>Solicitud de envío de paquetes</header>
            <form>
                <div className='form first'>
                    <div className='details personal'>
                        <span className='title'>Información del cliente</span>

                        <div className='fields'>
                            <div className='input-field'>
                                <label htmlFor='nombre_cliente'>Nombre quien envía</label>
                                <input onChange={handleChange} type='text' name='nombre_cliente' placeholder='Ingrese sus nombres y apellidos' required />
                            </div>

                            <div className='input-field'>
                                <label htmlFor='direccion_cliente'>Dirección de recogida</label>
                                <input onChange={handleChange} type='text' name='direccion_cliente' placeholder='Ingrese la dirección de su domicilio' required />
                            </div>

                            <div className='input-field'>
                                <label htmlFor='telefono_cliente'>No. de contacto</label>
                                <input onChange={handleChange} type='number' name='telefono_cliente' placeholder='Ingrese su número de celular' required />
                            </div>

                            <div className='input-field'>
                                <label htmlFor='paquete'>Tipo de paquete</label>
                                <select onChange={handleChange} name='paquete'>
                                    <option disabled selected>Seleccione una opción</option>
                                    <option value='Documento'>Documento</option>
                                    <option value='Paquete'>Paquete</option>
                                </select>
                            </div>

                            <div className="input-field">
                                <label htmlFor='cc_cliente'>Número de documento</label>
                                <input onChange={handleChange} type="number" name='cc_cliente' placeholder='Ingrese su número de documento' />
                            </div>

                            <div className='input-field'>
                                <label htmlFor='ciudad_cliente'>Ciudad</label>
                                <select onChange={handleChange} name='ciudad_cliente' required>
                                    <option disabled selected>Seleccione una ciudad</option>
                                    <option value='Santa Marta'>Santa Marta</option>
                                    <option value='Barranquilla'>Barranquilla</option>
                                    <option value='Cartagena'>Cartagena</option>
                                    <option value='Bogotá'>Bogotá</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className='details ID'>
                        <span className='title'>Información del destinatario</span>

                        <div className='fields'>
                            <div className='input-field'>
                                <label htmlFor='nombre_recibe'>Nombre quien recibe</label>
                                <input onChange={handleChange} name='nombre_recibe' type='text' placeholder='Ingrese los nombres y apellidos' required />
                            </div>

                            <div className='input-field'>
                                <label htmlFor='telefono_recibe'>No. de contacto</label>
                                <input onChange={handleChange} name='telefono_recibe' type='number' placeholder='Ingrese el número de celular' required />
                            </div>

                            <div className='input-field'>
                                <label htmlFor='ciudad_recibe'>Ciudad</label>
                                <select onChange={handleChange} name='ciudad_recibe' required>
                                    <option disabled selected>Seleccione una ciudad</option>
                                    <option value='Santa Marta'>Santa Marta</option>
                                    <option value='Barranquilla'>Barranquilla</option>
                                    <option value='Cartagena'>Cartagena</option>
                                    <option value='Bogotá'>Bogotá</option>
                                </select>
                            </div>

                            <div className='input-field'>
                                <label htmlFor='pais_recibe'>País</label>
                                <select onChange={handleChange} name='pais_recibe' required>
                                    <option disabled selected>Seleccione un país</option>
                                    <option value='Colombia'>Colombia</option>
                                    <option value='Estados Unidos'>Estados Unidos</option>
                                    <option value='España'>España</option>
                                    <option value='Argentina'>Argentina</option>
                                </select>
                            </div>

                            <div className="input-field">
                                <label htmlFor='cc_recibe'>Número de documento</label>
                                <input onChange={handleChange} name='cc_recibe' type="number" placeholder='Ingrese el número de documento' />
                            </div>

                            <div className='input-field'>
                                <label htmlFor='direccion_recibe'>Dirección de residencia</label>
                                <input onChange={handleChange} name='direccion_recibe' type='text' placeholder='Ingrese la dirección del destinatario' required />
                            </div>
                        </div>
                        <center>
                            <button onClick={handleSubmit}>
                                <span className='btnText'>Enviar</span>
                                <i className='uil uil-navigator'></i>
                            </button>
                        </center>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SendPackage