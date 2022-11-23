import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { MdEmail } from 'react-icons/md'
import { AiFillIdcard } from 'react-icons/ai'
import { FaUserAlt, FaLock } from 'react-icons/fa'

import { useAuth } from '../../context/AuthProvider'

import './styles.scss'

const Login = () => {
    const navigate = useNavigate()
    const [toggle, setToggle] = useState(false)
    const [user, setUser] = useState ({
        email: '',
        password: ''
    })

    const { signup } = useAuth()

    const handleChange = ({target: { name, value }}) => setUser({...user, [name]: value})

    const handleSubmit = async e => {
        e.preventDefault()
        try {
            await signup(user.email, user.password)
            navigate('/')
        } catch(error) {
            window.alert(error.code)
        }
    }
    return <>
       <div className='login'>
            <div className='login__content'>
                <div className='login__img'>
                    <img src='/src/assets/img-login.svg' alt='' />
                </div>

                <div className='login__forms'>
                    {!toggle && (
                        <form action='' className='login__registre' id='login-in'>
                        <h1 className='login__title'>Iniciar sesión</h1>

                        <div className='login__box'>
                            <FaUserAlt className='login__icon' />
                            <input id='userId' name='userId' type='text' placeholder='Usuario' className='login__input' />
                        </div>

                        <div className='login__box'>
                            <FaLock className='login__icon' />
                            <input name='password' id='password' type='password' placeholder='Contraseña' className='login__input' />
                        </div>

                        <button className='login__button'>Iniciar sesión</button>
                        <div>
                            <span className='login__account'>¿No tienes una cuenta?</span>
                            <span onClick={() => setToggle(true)} className='login__signin' id='sign-up'> Registrate</span>
                        </div>
                    </form>
                    )}

                    {toggle && (
                            <form onSubmit={handleSubmit} className='login__create' id='login-up'>
                            <h1 className='login__title'>Crear cuenta</h1>

                            <div className='login__box'>
                                <FaUserAlt className='login__icon' />
                                <input name='userName' id='userName' type='text' placeholder='Nombres y apellidos' className='login__input' onChange={handleChange} />
                            </div>

                            <div className='login__box'>
                                <AiFillIdcard className='login__icon' />
                                <input name='userId' id='userId' type='text' placeholder='No. identificación' className='login__input' onChange={handleChange} />
                            </div>

                            <div className='login__box'>
                                <MdEmail className='login__icon' />
                                <input name='email' id='email' type='text' placeholder='Correo' className='login__input' onChange={handleChange} />
                            </div>

                            <div className='login__box'>
                                <FaLock className='login__icon' />
                                <input name='password' id='password' type='password' placeholder='Contraseña' className='login__input' onChange={handleChange} />
                            </div>

                            <button className='login__button'>Registrarse</button>

                            <div>
                                <span className='login__account'>¿Ya tienes una cuenta?</span>
                                <span className='login__signup' onClick={() => setToggle(false)}> Inicia sesión</span>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    </>
}

export default Login