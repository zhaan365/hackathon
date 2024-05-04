import React from 'react';
import {Link} from 'react-router-dom'
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import img from '../../assets/login.png'


const Login = () => {
    return (
        <section className='login'>
            <div className="login__left">
                <h2 className="login__left-title">
                    Войти
                </h2>
                <p className="login__left-text">
                    Если у вас нет регистрации аккаунта <br/>
                    Вы можете <Link className="login__left-link" to='/register'>зарегистрироваться здесь!</Link>
                </p>

                <div className="login__left-row">
                    <div className="login__field">
                        <h2 className="login__field-title">
                            Email
                        </h2>

                        <div className="login__field-row">

                            <HiOutlineMail size={27} className="login__field-icon"/>
                            <input type="email" placeholder='Введите ваш адрес электронной почты' className="login__field-input"/>

                        </div>
                    </div>

                    <div className="login__field">
                        <h2 className="login__field-title">
                            Пароль
                        </h2>

                        <div className="login__field-row">

                            <RiLockPasswordLine size={27} className="login__field-icon"/>
                            <input type="email" placeholder='Введите ваш пароль' className="login__field-input"/>

                        </div>
                    </div>

                    <button className="login__btn">
                        Авторизоваться
                    </button>
                </div>


            </div>

            <div className="login__right">
                <img src={img} alt="" className="login__right-img"/>
            </div>
        </section>
    );
};

export default Login;