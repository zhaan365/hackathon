import React from "react";
import img1 from '../../assets/home1.jpeg'
import img2 from '../../assets/home2.jpeg'
import img3 from '../../assets/home3.jpeg'


const Home = () => {
    return (
        <div className="home">
            <div className="container">

                <section className="home__one">

                    <div className="home__left">

                        <h2 className="home__left-title">
                            Рука помощи, слово поддержки: <br/>
                            вместе за безопасность!

                            <div className="home__left-box1"></div>
                            <div className="home__left-box2"></div>
                        </h2>
                        <p className="home__left-text">
                            <span>Мы</span> — команда, заботящаяся о безопасности и благополучии наших <br/>
                            пользователей. Наш сайт создан для того, чтобы предоставить <br/>
                            поддержку пострадавшим от домогательств, свидетелям насилия и <br/>
                            водителям транспорта. Мы также стремимся помочь родителям <br/>
                            разобраться в сложных ситуациях и научить их, как эффективно <br/>
                            поддерживать своих детей. Мы с вами
                        </p>

                    </div>
                    <div className="home__right">

                        <img src={img3} alt="" className="home__right-img home__right-img1"/>
                        <img src={img2} alt="" className="home__right-img home__right-img2"/>
                        <img src={img1} alt="" className="home__right-img home__right-img3"/>



                    </div>

                </section>









            </div>
        </div>
    );
};

export default Home;