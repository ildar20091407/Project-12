import React, { useState, useEffect } from 'react';
import { Link, useLocation, Routes, Route } from "react-router-dom";
import logoLnguage from '../assets/images/computer-icons-language-icon-png-favpng-NQSGiSmKDpKJpGXw1p4tMdi6Z.jpg';
import { useTranslation } from "react-i18next";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Home from "../pages/BigHome";
import Products from "../pages/BigProducts";
import Users from "../pages/BigUsers";


const Navbar = () => {
    const { t, i18n } = useTranslation();
    const [langMenuOpen, setLangMenuOpen] = useState(false);
    const location = useLocation();
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light'); // Default to 'light'

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    const changeLang = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem('language', lng); // Save language to localStorage
        setLangMenuOpen(false);
    };

    const links = [
        { title: t('Home'), url: '/' },
        { title: t('About Me'), url: '/users' },
        { title: t('My Works'), url: '/products' },
    ];

    return (
        <div className="navbar-container"> 
            <nav className="nav">
                <div className="nav__box">
                    <div className="nav__left">
                        <ul className="nav__list">
                            {links.map((link, i) => (
                                <li key={i}>
                                    <Link to={link.url} className="nav__link">
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <ul className="header__nav-list">
                        <li className="header__nav-li" style={{ position: 'relative' }}>
                            <img
                                src={logoLnguage}
                                className="header__nav-button"
                                alt="Language selection"
                                onClick={() => setLangMenuOpen(!langMenuOpen)}
                                style={{ cursor: 'pointer' }}
                            />
                            {langMenuOpen && (
                                <ul className="header__nav-dropdown"> {/* Removed inline styles for better maintainability */}
                                    <li><button onClick={() => changeLang('en')}>En</button></li>
                                    <li><button onClick={() => changeLang('ru')}>Ru</button></li>
                                    <li><button onClick={() => changeLang('uz')}>Uz</button></li>
                                </ul>
                            )}
                        </li>

                        {/* Theme Toggle Button */}
                        <li className="header__nav-li">
                            <button onClick={toggleTheme}>
                                {theme === 'light' ? 'Dark' : 'Light'} Theme
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>

            <TransitionGroup>

                    <div className="transition-wrapper"> {/* Important:  A single div wrapper around routes */}
                        <Routes location={location}>
                            <Route path="/" element={<Home />} />
                            <Route path="/products" element={<Products />} />
                            <Route path="/users" element={<Users />} />
                        </Routes>
                    </div>

            </TransitionGroup>
        </div>
    );
};

export default Navbar;
