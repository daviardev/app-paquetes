import React from 'react'

import './styles.scss'

const Invoice = () => {
    return <>
        <div className='container'>
            <header>Factura</header>
            <form action='#'>
            <div className='form first'>
                <div className='details personal'>
                    <div className='fields'>
                        <div className='input-field'>
                            <label>Número de envío</label>
                            <input type='text' placeholder='Ingrese el número de envío' required />
                        </div>

                        <div className='input-field'>
                            <label>Cliente</label>
                            <input type='text' placeholder='Ingrese sus nombres y apellidos' required />
                        </div>

                        <div className='input-field'>
                            <label>Fecha de envío</label>
                            <input type='date' required />
                        </div>

                        <div className='input-field'>
                            <label>Fecha de entrega</label>
                            <input type="date" required />
                        </div>

                        <div className='input-field'>
                            <label>Número de factura</label>
                            <input type='number' placeholder='Ingrese el número de factura' required />
                        </div>

                        <div className='input-field'>
                            <label>Tipo de factura</label>
                            <select required>
                                <option disabled selected>Seleccione una opción</option>
                                <option value='santa-marta'>Contado</option>
                                <option value='barranquilla'>Línea</option>
                            </select>
                        </div>
                    </div>
                </div>
                    <button>
                        <span className='btnText'>Realizar pago</span>
                        <i className='uil uil-navigator'></i>
                    </button>
                </div> 
            </form>
        </div>
    </>
}

export default Invoice