import React from 'react';
import { useTranslation } from 'react-i18next';
import photo from '../assets/images/photo_2025-02-10_09-43-29.jpg';
import s from "./Users1.module.scss";
import background from '../assets/images/tild3163-6265-4137-a337-643863353964__3-01-01.png'

const Users = () => {
    const { t } = useTranslation();

    return (
        <>
             <nav className="nav__bottom">
                <img src={background} className="background" alt="" />
                    <div className="nav__botom-box">
                        <div className="main__top-right">
                            <h2 className="nav__title">{t('Hello!')}</h2>
                            <h2 className="nav__title">{t('I am')} </h2>
                            <p className="nav__text">{t('Web-development1')}</p>
                        </div>
                    </div>
            </nav>
        <div>
            <main className={s.main__top}>
                <div className={s.main__top_title}>
                    <p className={s.main__top_title}>{t('aboutMe')}</p>
                </div>
                <div className="container">
                    <div className={s.main__top_box}>
                        <img className={s.main__top_left_img} src={photo} alt={t('altPhoto')} />

                        <div className={s.main__first_text}>
                            <h2 className={s.main__top_right_title}>{t('iAm')} {t('name')}</h2>

                            <div> {/* Wrap text and list in a div */}
                                <p className={s.main__top_right_text}>
                                    {t('jobTitle')}
                                    {t('jobDescription')}
                                    {t('keySkills')}:
                                </p>
                                <ul className={s.main__top_right_list}>
                                    <div className="">
                                        <li className={s.main__top_right_link}>
                                            {t('responsibility1')}
                                        </li>
                                        <li className={s.main__top_right_link}>
                                            {t('responsibility2')}
                                        </li>
                                        <li className={s.main__top_right_link}>
                                            {t('responsibility3')}
                                        </li>
                                        <li className={s.main__top_right_link}>
                                            {t('responsibility4')}
                                        </li>
                                        <li className={s.main__top_right_link}>
                                            {t('responsibility5')}
                                        </li>
                                        <li className={s.main__top_right_link}>
                                            {t('responsibility6')}
                                        </li>
                                        <li className={s.main__top_right_link}>
                                            {t('responsibility7')}
                                        </li>
                                    </div>
                                </ul>
                            </div>

                            <div> {/* Wrap text and list in a div */}
                                <p className="main__top-right-text">
                                    {t('specializationsLabel')}:
                                </p>
                                <ul className="main__top-right-list">
                                    <li className={s.main__top_right_link}>
                                        {t('specialization1')}
                                    </li>
                                    <li className={s.main__top_right_link}>
                                        {t('specialization2')}
                                    </li>
                                    <li className={s.main__top_right_link}>
                                        {t('specialization3')}
                                    </li>
                                    <li className={s.main__top_right_link}>
                                        {t('specialization4')}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
        </>
    );
};

export default Users;
