import React from 'react';
import icon1 from '../../assets/icons/icon1.png'
import icon2 from '../../assets/icons/icon2.png'
import icon3 from '../../assets/icons/icon3.png'
import icon4 from '../../assets/icons/icon4.png'
import {Link} from 'react-router-dom'
import img from '../../assets/icons/ava.jpg'
import aza from '../../assets/icons/aza.jpg'


const Room = () => {
    return (
        <section className='room'>
            <div className="container">

                <h2 className="room__title">
                    Личный кабинет
                </h2>

                <div className="room__row">

                    <div className="room__left">

                        <h2 className="room__left-title">
                            Пользователь сайта
                        </h2>
                        <div className="room__left-line"></div>

                        <img src={aza} alt="" className="room__left-img0"/>

                        <h3 className="room__left-subtitle">
                            Мусагалиев Азамат
                        </h3>
                        <p className="room__left-text">
                            Кыргызская республика
                        </p>

                        <div className="room__left-row">
                            <Link to='/'>
                                <img src={icon1} alt="" className="room__left-img"/>
                            </Link>
                            <Link to='/'>
                                <img src={icon2} alt="" className="room__left-img"/>
                            </Link>
                            <Link to='/'>
                                <img src={icon3} alt="" className="room__left-img"/>
                            </Link>
                            <Link to='/'>
                                <img src={icon4} alt="" className="room__left-img"/>
                            </Link>
                        </div>

                    </div>
                    <div className="room__right">
                        <div className="room__right-row2">
                            <button className="room__right-btn">О пользователе</button>
                            <Link to='' className="room__right-link">Отправить сообщение</Link>
                        </div>

                        <div className="room__right-line"></div>

                        <h3 className="room__right-title">
                            История профиля
                        </h3>

                        <div className="room__right-row3">
                            <div className="room__right-block">
                                <p className="room__right-text room__right-text2">Зарегистрирован:</p>
                                <p className="room__right-text">Последняя активность:</p>
                                <p className="room__right-text">Страна:</p>
                                <p className="room__right-text">Город:</p>
                                <p className="room__right-text">Пол:</p>
                                <p className="room__right-text">Возраст:</p>
                                <p className="room__right-text">Семейное положение:</p>
                            </div>

                            <div className="room__right-block2">
                                <p className="room__right-text room__right-text2 room__right-text3">12-06-2025</p>
                                <p className="room__right-text room__right-text3">25-12-2025 / 09:11</p>
                                <p className="room__right-text room__right-text3">Кыргызстан</p>
                                <p className="room__right-text room__right-text3">Бишкек</p>
                                <p className="room__right-text room__right-text3">Мужской</p>
                                <p className="room__right-text room__right-text3">34</p>
                                <p className="room__right-text room__right-text3">Холостяк</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default Room;