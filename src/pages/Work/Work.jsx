import React from 'react';
import {Link} from "react-router-dom";
import { HiOutlineMail } from "react-icons/hi";
import { FaRegUser } from "react-icons/fa";
import { LuUsers } from "react-icons/lu";


const Work = () => {
    return (
        <div className='work'>
            <div className="work__row">

                <div className="work__left">
                    <h2 className="work__title">
                        Стажировка в области психологии...
                    </h2>
                    <p className="work__text">
                        Это отличная возможность для всех студентов, <br/>
                        которые обучаются в области психологи. Мы <br/>
                        предлагаем вам стажировку. Проделав нам <br/>
                        такую помощь вы получится куча опытов в <br/>
                        этой сфере общая с нашими пострадавшими.
                    </p>
                    <div className="work__subtitle">
                        <span>Замечание</span> <br/>
                        Как только вы решитесь подать заявку, то в течение 5-7 часов мы свяжемся с вами!
                    </div>
                </div>
                <div className="work__right">
                    <h2 className="login__left-title work__right-title">
                        Подать заявку
                    </h2>

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

                        <button className="login__btn2">
                            Отправить
                        </button>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Work;