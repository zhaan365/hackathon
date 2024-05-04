import React from 'react';
import {Link} from "react-router-dom";
import img from "../../assets/register.png";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { LuUsers } from "react-icons/lu";


const Register = () => {
    return (
        <section className='login'>
            <div className="login__left">
                <h2 className="login__left-title">
                    Зарегистрироваться
                </h2>
                <p className="login__left-text2">
                    Если у вас уже есть учетная запись, зарегистрируйтесь <br/>
                    Вы можете <Link className="login__left-link" to='/login'>войти здесь!</Link>
                </p>

                <div className="login__left-row2">
                    <div className="login__field">
                        <h2 className="login__field-title2">
                            Email
                        </h2>

                        <div className="login__field-row">

                            <HiOutlineMail size={27} className="login__field-icon"/>
                            <input type="email" placeholder='Введите ваш адрес электронной почты' className="login__field-input"/>

                        </div>
                    </div>

                    <div className="login__field">
                        <h2 className="login__field-title2">
                            Имя
                        </h2>

                        <div className="login__field-row">

                            <FaRegUser size={27} className="login__field-icon"/>
                            <input type="email" placeholder='Введите ваше имя' className="login__field-input"/>

                        </div>
                    </div>

                    <div className="login__field">
                        <h2 className="login__field-title2">
                            Фамилия
                        </h2>

                        <div className="login__field-row">

                            <LuUsers size={27} className="login__field-icon"/>
                            <input type="email" placeholder='Введите ваше фамилие' className="login__field-input"/>

                        </div>
                    </div>

                    <div className="login__field">
                        <h2 className="login__field-title2">
                            Пароль
                        </h2>

                        <div className="login__field-row">

                            <RiLockPasswordLine size={27} className="login__field-icon"/>
                            <input type="email" placeholder='Введите ваш пароль' className="login__field-input"/>

                        </div>
                    </div>

                    <button className="login__btn2">
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

export default Register;