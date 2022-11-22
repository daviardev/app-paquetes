import React from 'react'
import { NavLink } from 'react-router-dom'

import { useAuthContext } from '../../context/AuthContext'

import './styles.scss'

const SendPackage = () => {
    const appContext = useAuthContext()
    console.log(appContext)
    return (
        <div className='container'>
            <header>Solicitud de envío de paquetes</header>
            <form action='#'>
            <div className='form first'>
                <div className='details personal'>
                    <span className='title'>Información del cliente</span>

                    <div className='fields'>
                        <div className='input-field'>
                            <label>Nombre quien envía</label>
                            <input type='text' placeholder='Ingrese sus nombres y apellidos' required />
                        </div>

                        <div className='input-field'>
                            <label>Dirección de recogida</label>
                            <input type='text' placeholder='Ingrese la dirección de su domicilio' required />
                        </div>

                        <div className='input-field'>
                            <label>No. de contacto</label>
                            <input type='number' placeholder='Ingrese su número de celular' required />
                        </div>

                        <div className='input-field'>
                            <label>Tipo de paquete</label>
                            <select name='tipoPaquete' id='tipo_paquete'>
                                <option disabled selected>Seleccione una opción</option>
                                <option value='documento'>Documento</option>
                                <option value='paquete'>Paquete</option>
                            </select>
                        </div>

                        <div className="input-field">
                            <label>Número de documento</label>
                            <input type="number" placeholder='Ingrese su número de documento' />
                        </div>

                        <div className='input-field'>
                            <label>Ciudad</label>
                            <select required>
                                <option disabled selected>Seleccione una ciudad</option>
                                <option value='santa-marta'>Santa Marta</option>
                                <option value='barranquilla'>Barranquilla</option>
                                <option value='cartagena'>Cartagena</option>
                                <option value='bogota'>Bogotá</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className='details ID'>
                    <span className='title'>Información del destinatario</span>

                    <div className='fields'>
                        <div className='input-field'>
                            <label>Nombre quien recibe</label>
                            <input type='text' placeholder='Ingrese los nombres y apellidos' required />
                        </div>

                        <div className='input-field'>
                            <label>No. de contacto</label>
                            <input type='number' placeholder='Ingrese el número de celular' required />
                        </div>

                        <div className='input-field'>
                            <label>Ciudad</label>
                            <select required>
                                <option disabled selected>Seleccione una ciudad</option>
                                <option value='santa-marta'>Santa Marta</option>
                                <option value='barranquilla'>Barranquilla</option>
                                <option value='cartagena'>Cartagena</option>
                                <option value='bogota'>Bogotá</option>
                            </select>
                        </div>

                        <div className='input-field'>
                            <label>País</label>
                            <select required>
                                <option disabled selected>Seleccione un país</option>
                                <option value='santa-marta'>Colombia</option>
                                <option value='barranquilla'>Estados Unidos</option>
                                <option value='cartagena'>España</option>
                                <option value='bogota'>Argentina</option>
                            </select>
                        </div>

                        <div className="input-field">
                            <label>Número de documento</label>
                            <input type="number" placeholder='Ingrese el número de documento' />
                        </div>

                        <div className='input-field'>
                            <label>Dirección de residencia</label>
                            <input type='text' placeholder='Ingrese la dirección del destinatario' required />
                        </div>
                    </div>
                    <center>
                        <NavLink to='/factura'>
                            <button>
                                <span className='btnText'>Enviar</span>
                                <i className='uil uil-navigator'></i>
                            </button>
                        </NavLink>
                    </center>
                </div> 
            </div>
            </form>
        </div>
    )
}

export default SendPackage