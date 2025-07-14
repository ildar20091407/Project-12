import React, { useRef, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import photo from '../assets/images/photo_2025-02-10_09-43-29.jpg';
import s from "./Home.module.scss";
import background from '../assets/images/tild3163-6265-4137-a337-643863353964__3-01-01.png';

export const Home = () => {
    const { t } = useTranslation();
    const footerRef = useRef(null);
    const [isFooterVisible, setIsFooterVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setIsFooterVisible(true);
                    } else {
                        setIsFooterVisible(false);
                    }
                });
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.5,
            }
        );

        const currentFooterRef = footerRef.current;

        if (currentFooterRef) {
            observer.observe(currentFooterRef);
        }

        return () => {
            if (currentFooterRef) {
                observer.unobserve(currentFooterRef);
            }
        };
    }, [footerRef]);

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
            <main className={s.main__top}>
                <div className={s.main__top_title}>
                    <p className={s.main__top_title}>{t('aboutMe')}</p>
                </div>
                <div className="container">
                    <div className={s.main__top_box}>
                        <div className={s.main__top_left}>
                            <img className={s.main__top_left_img} src={photo} alt="Photo" />
                        </div>
                        <div className={s.main__top_right}>
                            <h2 className={s.main__top_right_title}>{t('iAm')} {t('name')}</h2>
                            <p className={s.main__top_right_text}>{t('frontEndDeveloper')}</p>
                            <p className={s.main__top_right_text}>
                                {t('description1')}
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <div className="container">
                    <div className={s.footer__box}>
                        <h2 className={s.footer__box_title}>Мои навыки</h2>
                    </div>
                <footer className={`${s.footer} ${isFooterVisible ? s.footerVisible : ''}`} ref={footerRef}>
                    <div className={s.footer__main}>
                        <div className={s.footer__main_item}>
                            <p className={s.footer__main_item_text}>HTML</p>
                            <div className={s.footer__main_item_number}>
                                <p className={s.footer__main_item_color1}>80%</p>
                            </div>
                        </div>
                        <div className={s.footer__main_item}>
                            <p className={s.footer__main_item_text}>CSS</p>
                            <div className={s.footer__main_item_number}>
                                <p className={s.footer__main_item_color2}>75%</p>
                            </div>
                        </div>
                        <div className={s.footer__main_item}>
                            <p className={s.footer__main_item_text}>Java Script</p>
                            <div className={s.footer__main_item_number}>
                                <p className={s.footer__main_item_color3}>80%</p>
                            </div>
                        </div>
                        <div className={s.footer__main_item}>
                            <p className={s.footer__main_item_text}>React</p>
                            <div className={s.footer__main_item_number}>
                                <p className={s.footer__main_item_color4}>85%</p>
                            </div>
                        </div>
                    </div>
                    <div className={s.footer__main_item}>
                        <p className={s.footer__main_item_text}>Type Script</p>
                        <div className={s.footer__main_item_number}>
                            <p className={s.footer__main_item_color5}>55%</p>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
};

const ContactForm = () => {
    const { t } = useTranslation();
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_qpatmgp', 'template_lc1e2ax', form.current, 'JWaSpnmlhnunZpzHr')
            .then((result) => {
                console.log(result.text);
                alert(t('messageSent'));
            }, (error) => {
                console.log(error.text);
                alert(t('errorMessage'));
            });
    };

    return (

        <nav className="footer">

            <div className="container">
                <p className="footer__title">{t('contactMe')}</p>


                    <form ref={form} onSubmit={sendEmail}>
                        <div className="footer">

                <div className="footer__text">
                          <div className="first">

                        <label className="footer__email-text">{t('nameLabel')}:</label>
                        <input type="text" name="user_name" />
                          </div>
                          <div className="first">
                        <label className="footer__email-text">{t('emailLabel')}:</label>
                        <input type="email" name="user_email" />
                          </div>
                          <div className="first">

                        <label className="footer__email-text">{t('messageLabel')}:</label>
                        <textarea name="message" />
                          </div>
                        <input type="submit" value={t('send')} />
                </div>
                        </div>
                    </form>
            </div>

        </nav>
    );
};


const CombinedComponent = () => {
    return (
        <>
            <Home />
            <ContactForm />
        </>
    );
};


export default CombinedComponent;


