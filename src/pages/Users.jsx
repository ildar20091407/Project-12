import React from 'react';
import { useTranslation } from 'react-i18next';
import photo from '../assets/images/photo_2025-02-10_09-43-29.jpg';
import s from "./Users.module.scss";
import background from '../assets/images/blobid1579928399432.jpg';

const Home = () => {
    const { t } = useTranslation();



    return (
        <>
        <nav className="nav__bottom">
            <img src={background} className="background" alt="" />
              <div className="nav__botom-box">
                <div className="main__top-right">
                    <h2 className="nav__title">{t('Hello!')}</h2>
                    <h2 className="nav__title">{t('I am')} </h2>
                    <p className="nav__text">{t('Web-development')}</p>
                </div>
              </div>
        </nav>
            <main className={s.main__top}>
                <div className={s.main__top_title}>
                    <p className={s.main__top_title}>{t('aboutMeU1')}</p>
                </div>
                <div className={s.container}>
                    <div className={s.main__top_box}>
                        <div className={s.main__top_left}>
                            <img className={s.main__top_left_img} src={photo} alt={t('altPhotoU1')} />
                        </div>
                        <div className={s.main__top_right}>
                            <h2 className={s.main__top_right_title}>{t('iAmU1')} {t('nameU1')}</h2>
                <div className="">
                            <p className={s.main__top_right_text}>{t('frontEndDeveloperU1')}</p>
                            <p className={s.main__top_right_text}>
                                {t('frontendTasks')}
                            </p>
                        </div>
                    </div>
                </div>
                </div>
            </main>
        </>
    );
};

export default Home;
