import React from 'react';
import {Link} from 'react-router-dom'
import logo from '../../../assets/header.jpg'
import { FiUser } from "react-icons/fi";

const Header = () => {
    return (
        <header className="header">
            <div className="container">

                <div className="header__row">
                    <Link to=''>
                        <img src={logo} alt="" className="header__img"/>
                    </Link>


                    <div className="header__menu">
                        <Link to='/study' className="header__menu-link">Обучение</Link>
                        <Link to='/work' className="header__menu-link">Стажировки</Link>
                    </div>

                    <Link to='/login' className="header__user">
                        <FiUser className="header__user-users"/>
                    </Link>
                </div>



            </div>
        </header>
    );
};

export default Header;