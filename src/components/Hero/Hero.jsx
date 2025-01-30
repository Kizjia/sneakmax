import React, { useState } from 'react';
import s from './Hero.module.scss';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import HeaderCart from './HeaderCart/HeaderCart';

export default function Hero() {
  const { orders } = useSelector((state) => state.orders);
  const [openCartModal, setOpenCartModal] = useState(false);
  const [isCartFullScreen, setIsCartFullScreen] = useState(false); // Состояние полноэкранной корзины

  const ordersLength = orders.length;

  return (
    <section id="hero" className={s.heroSection}>
      <div className={s.container}>
        <header className={s.header}>
          <div className={s.logoWrapper}>
            <a href="#hero">
              <p className={s.logo}>SneakMax</p>
            </a>
          </div>
          <nav className={s.navbar}>
            <ul className={s.navList}>
              <li className={s.navItem}>
                <a href="#catalog" className={s.navLink}>
                  Каталог
                </a>
              </li>
              <li className={s.navItem}>
                <a href="#about" className={s.navLink}>
                  О нас
                </a>
              </li>
              <li className={s.navItem}>
                <a href="#quiz" className={s.navLink}>
                  Подбор товара
                </a>
              </li>
              <li className={s.navItem}>
                <a href="#team" className={s.navLink}>
                  Наша команда
                </a>
              </li>
              <li className={s.navItem}>
                <a href="#faq" className={s.navLink}>
                  Доставка и оплата
                </a>
              </li>
              <li className={s.navItem}>
                <a href="#contacts" className={s.navLink}>
                  Контакты
                </a>
              </li>
            </ul>

            <div
              className={s.cartWrapper}
              onClick={(e) => {
                setOpenCartModal(true);
              }}
            >
              <MdOutlineShoppingCart className={s.cartIcon} />
              {ordersLength > 0 && (
                <div className={s.cartCountWrapper}>
                  <p className={s.cartCount}>{ordersLength}</p>
                </div>
              )}
              {openCartModal && (
                <HeaderCart
                  setOpenCartModal={setOpenCartModal}
                  isCartFullScreen={isCartFullScreen}
                  setIsCartFullScreen={setIsCartFullScreen}
                />
              )}
            </div>
          </nav>
        </header>
        <div className={s.heroContent}>
          <p className={s.backgroundText}>SneakMax</p>
          <div className={s.textContent}>
            <h1 className={s.title}>
              Кроссовки известных брендов с доставкой по России и СНГ
            </h1>
            <p className={s.description}>
              Мы продаем кроссовки брендов Nike, Adidas, Puma, Reebok, Converse
              и многие другие по низким ценам
            </p>
            <a href="#catalog">
              <button className={s.ctaButton}>Перейти к покупкам</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
