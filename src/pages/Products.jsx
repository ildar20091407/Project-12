import React  from 'react';
import {products} from '../store/users/usersSlice1'
import background from '../assets/images/blobid1579928399432.jpg';
import { useTranslation } from 'react-i18next';

const Products = () => {
  
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
      <div className="container">
        <h1>Страница работ</h1>
        <div className="box">
          {products.map((item) => (
            <div className="product__item">

            <div className="item" key={item.id}>
              <h2>Название: {item.title}</h2>
              <p>Описание: {item.description}</p>
              <div className="product__img">

<img className="product__img" src={item.img}  />
              </div>
            </div>
              <a href={item.link} target="_blank" rel="noopener noreferrer">Ссылка на сайт</a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
