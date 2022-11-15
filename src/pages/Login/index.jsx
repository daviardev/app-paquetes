import React, { useState } from 'react'
import { FaUserAlt, FaLock } from 'react-icons/fa'
import { AiFillIdcard } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'

import './styles.scss'

const Login = () => {
    const [toggle, setToggle] = useState(false)
    return <>
       <div className="login">
            <div className="login__content">
                <div className="login__img">
                    <img src="/src/assets/img-login.svg" alt="" />
                </div>

                <div className="login__forms">
                    {!toggle && (
                        <form action="" className='login__registre' id="login-in">
                        <h1 className="login__title">Iniciar sesión</h1>
    
                        <div className="login__box">
                            <FaUserAlt className='login__icon' />
                            <input type="text" placeholder="Usuario" className="login__input" />
                        </div>
    
                        <div className="login__box">
                            <FaLock className='login__icon' />
                            <input type="password" placeholder="Contraseña" className="login__input" />
                        </div>

                        <a href="#" className="login__button">Iniciar sesión</a>
                        <div>
                            <span className="login__account">¿No tienes una cuenta?</span>
                            <span onClick={() => setToggle(true)} className="login__signin" id="sign-up"> Registrate</span>
                        </div>
                    </form>
                    )}

                    {toggle && (
                        <form action="" className='login__create' id="login-up">
                        <h1 className="login__title">Crear cuenta</h1>
    
                        <div className="login__box">
                            <FaUserAlt className='login__icon' />
                            <input type="text" placeholder="Nombres y apellidos" className="login__input" />
                        </div>
    
                        <div className="login__box">
                            <AiFillIdcard className='login__icon' />
                            <input type="text" placeholder="No. identificación" className="login__input" />
                        </div>

                        <div className="login__box">
                            <MdEmail className='login__icon' />
                            <input type="email" placeholder="Correo" className="login__input" />
                        </div>

                        <div className="login__box">
                            <FaLock className='login__icon' />
                            <input type="password" placeholder="Contraseña" className="login__input" />
                        </div>

                        <a href="#" className="login__button">Registrarse</a>

                        <div>
                            <span className="login__account">¿Ya tienes una cuenta?</span>
                            <span className="login__signup" id="sign-in" onClick={() => setToggle(false)}> Inicia sesión</span>
                        </div>
                    </form>
                    )}
                </div>
            </div>
        </div>
    </>
}

export default Login