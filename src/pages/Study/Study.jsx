import React from 'react';
import {Link} from "react-router-dom";
import ava1 from "../../assets/ava1.png";
import ava2 from "../../assets/ava2.png";

const Study = () => {
    return (
        <section>

            <h2 className="home__title">
                Наша программа обучения
            </h2>

            <div className="home__row">

                <Link to='/parents'>
                    <div className="home__card">
                        <img src={ava1} alt="" className="home__card-img"/>

                        <h3 className="home__card-title">
                            Родитель
                        </h3>
                    </div>
                </Link>

                <Link to='/other'>
                    <div className="home__card">
                        <img src={ava2} alt="" className="home__card-img"/>

                        <h3 className="home__card-title">
                            Пострадавший
                        </h3>
                    </div>
                </Link>

            </div>

        </section>
    );
};

export default Study;