import React from 'react'
import { NavLink } from 'react-router-dom'

import './styles.scss'

const Invoice = () => {
    return <>
        <div className='container'>
            <header>Factura</header>
            <form>
            <div className='form first'>
                <div className='details personal'>
                    <div className='fields'>
                        <div className='input-field'>
                            <strong>Número de envío</strong>
                            <p>#2409202201</p>
                        </div>

                        <div className='input-field'>
                            <strong>Cliente</strong>
                            <p>Jerson David Silva Arjona</p>
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
                            <p>1045759468</p>
                        </div>
                    </div>
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