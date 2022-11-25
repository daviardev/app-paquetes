import React from 'react'

const Detail = () => {
    return (
        <div className='container'>
            <header>DETALLES</header>
            <form>
            <div className='form first'>
                <div className='details personal'>
                    <strong className='title'>Remitente / Origen</strong>
                    <h1>Guia #3218334</h1>
                    <div className='fields'>
                        <div className='input-field'>
                            <strong>Ciudad de recogida</strong>
                            <p>Barranquilla</p>
                        </div>

                        <div className='input-field'>
                            <strong>Ciudad de destino</strong>
                            <p>Bogotá</p>
                        </div>

                        <div className='input-field'>
                            <strong>Cédula de contacto</strong>
                            <p>1045759468</p>
                        </div>

                        <div className='input-field'>
                            <strong htmlFor='typePackage'>Fecha de entrega</strong>
                            <p>Hoy</p>
                        </div>

                        <div className="input-field">
                            <strong>Número de contacto</strong>
                            <p>3003683126</p>
                        </div>

                        <div className='input-field'>
                            <strong>Nombre contacto</strong>
                            <p>Jerson David Silva Arjona</p>
                        </div>

                        <div className='input-field'>
                            <strong>Dirección</strong>
                            <p>calle 47 #21B-69</p>
                        </div>
                        
                        <div className='input-field'>
                            <strong>Tipo de paquete</strong>
                            <p>Documento</p>
                        </div>
                    </div>
                </div>

                <div className='details ID'>
                    <strong className='title'>Destinatario / Destino</strong>

                    <div className='fields'>
                    <div className='input-field'>
                            <strong>Ciudad de recogida</strong>
                            <p>Barranquilla</p>
                        </div>

                        <div className='input-field'>
                            <strong>Ciudad de destino</strong>
                            <p>Bogotá</p>
                        </div>

                        <div className='input-field'>
                            <strong>Cédula de contacto</strong>
                            <p>1046349120</p>
                        </div>

                        <div className='input-field'>
                            <strong>Fecha de entrega</strong>
                            <p>Hoy</p>
                        </div>

                        <div className="input-field">
                            <strong>Número de contacto</strong>
                            <p>3118797141</p>
                        </div>

                        <div className='input-field'>
                            <strong>Nombre contacto</strong>
                            <p>Joel Cantillo</p>
                        </div>

                        <div className='input-field'>
                            <strong>Dirección</strong>
                            <p>Cra sur 32 #21-44</p>
                        </div>
                        
                        <div className='input-field'>
                            <strong>Tipo de paquete</strong>
                            <p>Documento</p>
                        </div>
                    </div>
                </div> 
            </div>
            </form>
        </div>
    )
}

export default Detail